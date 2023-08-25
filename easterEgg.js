// array that will contain the last 10 keyboard strokes.
const keyArray = [];
// reference to the Dialog that is displayed when the Code fires.
const dialogRef = document.getElementById('egg_dialog');
// reference to the element within the dialog that will close the dialog if clicked.
const closeDialogRef = document.getElementById('egg_dialog_close');

// listen for keyboard presses in the whole document.
window.addEventListener('keydown', keyEvent => {
    // if keyArray is 10 elements long, remove the first element and shift all other elements down one.
    if (keyArray.length >= 10) {
        keyArray.shift();
    }

    // push the latest keystroke as the last element of the keyArray
    keyArray.push(keyEvent.key);

    //this compares the last 10 typed keyboard strokes and looks to see if they are the Code.
    if (keyArray.toString() === "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a") {
        dialogRef.showModal();
    }
    else {
        // if the dialog is open, then close.
        if (dialogRef.open) {
            dialogRef.close();
        }
    }

});

// listen to clicks only on the dialog.
closeDialogRef.addEventListener('click', closeDialog => dialogRef.close())

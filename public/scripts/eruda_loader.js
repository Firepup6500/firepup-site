let dPressed = false;
let ePressed = false;
let vPressed = false;
function keydownListener(event) {
  if (event.key === "d") {
    dPressed = true;
  } else if (event.key === "e" && dPressed) {
    ePressed = true;
  } else if (event.key === "v" && ePressed) {
    eruda.init();
    document.removeEventListener('keyup', keyupListener);
    document.removeEventListener('keydown', keydownListener);
  } else {
    dPressed = false;
    ePressed = false;
    vPressed = false;
  }
}
document.addEventListener('keydown', keydownListener);
function keyupListener(e) {
  if (
        //e.shiftKey &&
        e.ctrlKey  &&
        e.altKey   &&
        e.key === "d"
  ) {
    eruda.init();
    document.removeEventListener('keyup', keyupListener);
    document.removeEventListener('keydown', keydownListener);
  }
}
document.addEventListener('keyup', keyupListener);
console.debug("Listener Script ready.")

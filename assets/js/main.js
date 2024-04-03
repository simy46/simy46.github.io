import MainEventController from './MainEventController.js';

var modal = document.getElementById("myModal");
const mainEventController = new MainEventController();


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = () => {
  const scrollContainer = document.getElementById('skills-container');
  mainEventController.listenToAllEvents();
}
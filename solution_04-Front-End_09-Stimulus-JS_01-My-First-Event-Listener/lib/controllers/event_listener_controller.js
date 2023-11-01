import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  audio = new Audio('sound.mp3');

  connect() {
    // TODO: console.log something!
    console.log("Hello from the Event Listener controller!");
  }

  disable() {
    this.element.innerText = "Bingo!";
    this.element.setAttribute("disabled", "");
    this.audio.play();
  }
}
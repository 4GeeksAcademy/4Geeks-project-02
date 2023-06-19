/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./surprised.jpg";

window.onload = function() {
  let culpable = "";
  let accion = "";
  let cosa = "";
  let cuando = "";

  const randomNumberculpable = Math.random();

  if (randomNumberculpable >= 0 && randomNumberculpable < 1 / 5) {
    culpable = "A slug";
    document.body.style.backgroundColor = "pink";
  } else if (randomNumberculpable >= 1 / 5 && randomNumberculpable < 2 / 5) {
    culpable = "A cat";
    document.body.style.backgroundColor = "blue";
  } else if (randomNumberculpable >= 2 / 5 && randomNumberculpable < 3 / 5) {
    culpable = "A donkey";
    document.body.style.backgroundColor = "green";
  } else if (randomNumberculpable >= 3 / 5 && randomNumberculpable < 4 / 5) {
    culpable = "A goat";
    document.body.style.backgroundColor = "purple";
  } else if (randomNumberculpable >= 4 / 5 && randomNumberculpable < 1) {
    culpable = "An old dog";
    document.body.style.backgroundColor = "darkorange";
  }

  const randomNumberaccion = Math.random();

  if (randomNumberaccion >= 0 && randomNumberaccion < 1 / 4) {
    accion = "crazily ate";
  } else if (randomNumberaccion >= 1 / 4 && randomNumberaccion < 2 / 4) {
    accion = "little by little hid";
  } else if (randomNumberaccion >= 2 / 4 && randomNumberaccion < 3 / 4) {
    accion = "scaredly stepped on";
  } else if (randomNumberaccion >= 3 / 4 && randomNumberaccion < 1) {
    accion = "chewed to death";
  }

  const randomNumbercosa = Math.random();

  if (randomNumbercosa >= 0 && randomNumbercosa < 1 / 4) {
    cosa = "your long awaited meal";
  } else if (randomNumbercosa >= 1 / 4 && randomNumbercosa < 2 / 4) {
    cosa = "your sexy underwear";
  } else if (randomNumbercosa >= 2 / 4 && randomNumbercosa < 3 / 4) {
    cosa = "your dear china";
  } else if (randomNumbercosa >= 3 / 4 && randomNumbercosa < 1) {
    cosa = "your grandmother";
  }

  const randomNumbercuando = Math.random();

  if (randomNumbercuando >= 0 && randomNumbercuando < 1 / 4) {
    cuando = "right now";
  } else if (randomNumbercuando >= 1 / 4 && randomNumbercuando < 2 / 4) {
    cuando = "yesterday";
  } else if (randomNumbercuando >= 2 / 4 && randomNumbercuando < 3 / 4) {
    cuando = "in a remote moment in the future";
  } else if (randomNumbercuando >= 3 / 4 && randomNumbercuando < 1) {
    cuando = "I'm not sure when";
  }

  document.getElementById("subtitle").innerHTML =
    culpable + " " + accion + " " + cosa + " " + cuando;
};

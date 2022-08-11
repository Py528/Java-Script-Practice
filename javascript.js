let a = "Helu World";

let name, admin;
name = "Pranav";
admin = name;

let ourPlantName = "Earth";
let currentUserName = "Pranav";

let userName1 = prompt("Who's there?", "");

if (userName1 === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName1 === "" || userName1 === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

let officalName = prompt("What's the “official” name of JavaScript?");

(officalName === "ECMAScript") ? alert("Right") : alert("You don't know? “ECMAScript”!");
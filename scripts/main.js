import { addToDom } from "./createCard.js";

fetch("./db.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((e) => addToDom(e));
  });

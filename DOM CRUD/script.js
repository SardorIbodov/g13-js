import { database } from "./mock.js";

const tBody = document.querySelector("tbody");
let students = database;

const display = (base) => {
  tBody.innerHTML = "";
  for (let item of base) {
    const tr = document.createElement("tr");
    for (let column in item) {
      const td = document.createElement("td");
      td.innerText = item[column];
      tr.append(td);
    }

    const tdDelete = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    tdDelete.append(deleteBtn);
    tr.append(tdDelete);
    //! delete
    deleteBtn.addEventListener("click", () => {
      students = students.filter((v) => v.id !== item.id);
      display(students);
    });

    const tdEdit = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("editBtn");
    tdEdit.append(editBtn);
    tr.append(tdEdit);

    tBody.append(tr);
  }
};
display(students);

//! sort
const select = document.querySelector("#sortBy");
const sort = (sortBy) => {
  switch (sortBy) {
    case "id": {
      students = students.sort((a, b) => a.id - b.id);
      display(students);
      break;
    }
    case "name": {
      students = students.sort((a, b) => a.name.localeCompare(b.name));
      display(students);
      break;
    }
    case "birthYear": {
      students = students.sort((a, b) => a.year - b.year);
      display(students);
      break;
    }
  }
};
select.addEventListener("input", (e) => sort(e.target.value));

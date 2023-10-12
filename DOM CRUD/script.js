import { database } from "./mock.js";

const tHead = document.querySelector("thead");
const tBody = document.querySelector("tbody");
let students = database;

const display = (base) => {
  /* Table header */
  {
    tHead.innerHTML = "";
    const tr = document.createElement("tr");
    for (let key in base[0]) {
      if (key !== "isEdited") {
        const th = document.createElement("th");
        th.innerText = key;
        tr.append(th);
      }
    }
    const thDelete = document.createElement("th");
    thDelete.innerText = "delete";
    const thEdit = document.createElement("th");
    thEdit.innerText = "edit";
    if (base.length && students.length) {
      tr.append(thDelete, thEdit);
      tHead.append(tr);
      document.querySelector("h1").innerText = "";
    } else {
      tHead.innerHTML = "";
      tBody.innerHTML = "";
      document.querySelector("h1").innerText = "Ma'lumot topilmadi!";
    }
  }

  /* Table content */
  tBody.innerHTML = "";
  let editings = {};

  for (let item of base) {
    const tr = document.createElement("tr");
    for (let column in item) {
      if (column !== "isEdited") {
        const td = document.createElement("td");
        if (!item.isEdited || column === "id") {
          td.innerText = item[column];
        } else {
          let editedValue = document.createElement("input");
          editedValue.value = item[column];
          editedValue.addEventListener("input", (e) => {
            editings[column] = e.target.value;
          });
          editings.id = item.id;
          td.append(editedValue);
        }
        tr.append(td);
      }
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
    //! edit
    const tdEdit = document.createElement("td");
    tdEdit.classList.add("tEdit");
    if (!item.isEdited) {
      const editBtn = document.createElement("button");
      editBtn.addEventListener("click", () => {
        item.isEdited = true;
        display(students);
      });
      editBtn.innerText = "Edit";
      editBtn.classList.add("editBtn");
      tdEdit.append(editBtn);
    } else {
      const saveBtn = document.createElement("button");
      const cancelBtn = document.createElement("button");
      saveBtn.classList.add("saveBtn");
      cancelBtn.classList.add("cancelBtn");
      saveBtn.innerText = "Save";
      cancelBtn.innerText = "Cancel";
      //! cancel
      cancelBtn.addEventListener("click", () => {
        item.isEdited = false;
        display(students);
      });
      //! save
      saveBtn.addEventListener("click", () => {
        students = students.map((v) => {
          return v.id === editings.id
            ? { ...v, ...editings, isEdited: false }
            : v;
        });
        display(students);
      });
      tdEdit.append(saveBtn);
      tdEdit.append(cancelBtn);
    }
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

//! add
const addName = document.querySelector("#addName");
const addBirthYear = document.querySelector("#addBirthYear");
const addBtn = document.querySelector("#addBtn");

let newName;
addName.addEventListener("input", (e) => {
  newName = e.target.value;
});
let newBirthYear;
addBirthYear.addEventListener("input", (e) => {
  newBirthYear = e.target.value;
});

//! id generator
function* idGenerator() {
  let id = students.length;
  while (true) {
    yield ++id;
  }
}
const newId = idGenerator();

const addNewUser = (object) => {
  if (object.name && object.year) {
    students = [...students, { id: newId.next().value, ...object }];
    display(students);
    addName.value = null;
    addBirthYear.value = null;
    newName = null;
    newBirthYear = null;
  } else alert("Ma'lumot kiriting!");
};
addBtn.addEventListener("click", () => {
  addNewUser({ name: newName, year: newBirthYear });
});

//! search
const search = (value) => {
  let base = students.filter((v) =>
    v.name.toLowerCase().includes(value.toLowerCase())
  );
  display(base);
};
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => search(e.target.value));

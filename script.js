const input = document.getElementById("noteInput");
const addbtn = document.getElementById("addBtn");
const list = document.getElementById("noteList")
addbtn.addEventListener("click", () => {
    if (input.value === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
    updatestatus();
});
const update = document.getElementById("status");
const remove = document.getElementById("deleteBtn");
remove.addEventListener("click", () => {
    list.lastElementChild.remove();
    updatestatus();
});
const container = document.getElementById("container");
const toggle = document.getElementById("themeBtn");
toggle.addEventListener("click", () => {
    container.classList.toggle("dark");
});
const notes = document.querySelectorAll(".note");
notes.forEach((note) => {
    note.addEventListener("click", () => {
        note.classList.toggle("completed")
    });
});
notes.forEach((note) => {
    note.addEventListener("dblclick", () => {
        note.remove();
    })
});
const clearall = document.getElementById("clearBtn");
clearall.addEventListener("click", () => {
    list.innerHTML = "";
    updatestatus();
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addbtn.click();
    }
});
const title = document.getElementById("title");
function updatestatus() {
    if (list.children.length === 0) {
        update.textContent = "No Notes Available";
    } else if (list.children.length > 10) {
        title.style.color = ("red");
        update.textContent = `Total Notes: ${list.children.length}`;
    }
    else {
        update.textContent = `Total Notes: ${list.children.length}`;
    }
}
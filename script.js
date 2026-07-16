const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const themeBtn = document.getElementById("themeBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("noteList");
const status = document.getElementById("status");
const title = document.getElementById("title");
const container = document.getElementById("container");
function updateStatus() {
    const totalNotes = list.children.length;
    if (totalNotes === 0) {
        status.textContent = "No Notes Available";
    } else {
        status.textContent = `Total Notes: ${totalNotes}`;
    }
    if (totalNotes > 10) {
        title.style.color = "red";
    } else {
        title.style.color = "";
    }
}
function createNote(noteText) {
    const li = document.createElement("li");
    li.classList.add("note");
    li.textContent = noteText;
    // Single click = mark/unmark
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
    // Double click = delete note
    li.addEventListener("dblclick", () => {
        li.remove();
        updateStatus();
    });
    list.appendChild(li);
    updateStatus();
}
addBtn.addEventListener("click", () => {
    const noteText = input.value.trim();

    if (noteText === "") {
        return;
    }
    createNote(noteText);
    input.value = "";
    input.focus();
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
deleteBtn.addEventListener("click", () => {
    if (list.lastElementChild) {
        list.lastElementChild.remove();
        updateStatus();
    }
});
clearBtn.addEventListener("click", () => {
    list.innerHTML = "";
    updateStatus();
});
themeBtn.addEventListener("click", () => {
    container.classList.toggle("dark");
});
// Add functionality to notes that already exist in HTML
const existingNotes = document.querySelectorAll(".note");
existingNotes.forEach((note) => {
    note.addEventListener("click", () => {
        note.classList.toggle("completed");
    });
    note.addEventListener("dblclick", () => {
        note.remove();
        updateStatus();
    });
});
updateStatus();

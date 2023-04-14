
const fileInput = document.querySelector("#file-input");
const filePreview = document.querySelector("#file-preview");
const addButton = document.querySelector("button");
const displayBox = document.querySelector("#display-box");
const fileList = document.createElement("ul");
displayBox.appendChild(fileList);

fileInput.addEventListener("change", function() {
  const files = fileInput.files;
  if (files.length > 0) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
});

addButton.addEventListener("click", function() {
  const files = fileInput.files;
  if (files.length === 0) {
    alert("No files were selected.");
    return;
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const listItem = document.createElement("li");
    listItem.textContent = file.name;
    fileList.appendChild(listItem);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    listItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
      listItem.remove();
    });

    const openButton = document.createElement("button");
    openButton.textContent = "Open";
    listItem.appendChild(openButton);
    const fileURL = URL.createObjectURL(file);
    openButton.addEventListener("click", function() {
      window.open(fileURL);
      URL.revokeObjectURL(fileURL);
    });
  }
});

addButton.disabled = true;
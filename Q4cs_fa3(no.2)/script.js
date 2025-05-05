let contacts = [];

function updateDisplay() {
  document.getElementById("contactsOutput").textContent = contacts.join(" ");
}

function addName() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name === "") return; // Ignore empty input

  if (contacts.length === 7) {
    contacts.shift(); // Remove first if already 7
  }

  contacts.push(name); // Add new name to end
  nameInput.value = ""; // Clear textbox
  updateDisplay();
}

function removeName() {
  contacts.pop(); // Remove last name
  updateDisplay();
}

function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let statusCell = row.cells[3];
    let genderCell = row.cells[2];
    let ageCell = row.cells[1];

    if (!statusCell.getAttribute("data-available")) {
      row.hidden = true;
    } else if (statusCell.getAttribute("data-available") === "true") {
      row.classList.add("available");
    } else {
      row.classList.add("unavailable");
    }

    if (genderCell.textContent === "m") {
      row.classList.add("male");
    } else if (genderCell.textContent === "f") {
      row.classList.add("female");
    }

    if (ageCell.textContent < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}

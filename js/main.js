// Sets Target
const sets = document.querySelectorAll(".set");

// Available Sets Value Dynamic
const setAvailableValue = Number(
  document.getElementById("available-seat").innerText
);
document.getElementById("available-seat").innerText = sets.length;

// Check How Much Set Are Selected
let selectedSetCount = 0;

// All Sets Are Count
for (const set of sets) {
  set.addEventListener("click", function (e) {
    // Select Current Set
    const currentElement = e.target;

    // Validate Set Are Selected
    currentElement.disabled = true;

    // Check How Much Set Are Selected
    selectedSetCount += 1;
    if (selectedSetCount >= 4) {
      alert(
        `You Are Already 4 Set Selected! Only One Person Can Buy Maximam 4 Set.`
      );
      const sets = document.querySelectorAll(".set");
      for (const set of sets) {
        set.disabled = true;
      }
    }
    // Current Set Selected
    currentElement.classList.add("!bg-green", "!text-white");

    // Available Sets
    let availableSets = Number(
      document.getElementById("available-seat").innerText
    );
    // Calculate Available Sets
    let availableSetsDown = availableSets - 1;

    // Fine Available Sets And Set The Value
    setDownUp("available-seat", availableSetsDown);

    // Selected Set
    const selectedSit = Number(
      document.getElementById("selected-seat").innerText
    );
    // Calculate Selected Set
    let selectedSitUp = selectedSit + 1;

    // Fine Selected Set And Set The Value
    setDownUp("selected-seat", selectedSitUp);

    // Current Value
    const currentValue = e.target.innerText;

    // Current Per Seat Price
    const perSetPrice = Number(
      document.getElementById("per-seat-price").innerText
    );
    // Find Selected Seat Row
    const findSelectedSeatRow = document.getElementById("selected-seat-body");

    // Crate Table Row And Style Add
    const tr = document.createElement("tr");
    tr.classList.add("*:text-[#03071299]", "*:text-base", "*:font-normal");

    // Create Multiple Table Data And Style Add
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td3.classList.add("text-end");

    // Assign Value Table Data
    td1.innerText = currentValue;
    td2.innerText = "Economoy";
    td3.innerText = perSetPrice;

    // Assign Table Data In Parent Element
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    findSelectedSeatRow.appendChild(tr);

    // Find Total Price
    const totalPrice = Number(document.getElementById("total-price").innerText);
    document.getElementById("total-price").innerText = totalPrice + perSetPrice;

    getDiscount();
  });
}

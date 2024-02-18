// Sets Target
const sets = document.querySelectorAll(".set");

for (const set of sets) {
  set.addEventListener("click", function (e) {
    // Select Current Set
    const currentElement = e.target;

    // Current Set Selected
    AddClass(currentElement);

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
    const tr = document.createElement("tr");
    tr.classList.add("*:text-[#03071299]", "*:text-base", "*:font-normal");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td3.classList.add("text-end");
    td1.innerText = currentValue;
    td2.innerText = "Economoy";
    td3.innerText = perSetPrice;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    findSelectedSeatRow.appendChild(tr);
  });
}
// if (!selectedProducts.has(productId)) {
//   // Check if product is not already selected
//   selectedProducts.add(productId); // Add product to selected set
//   const productName = this.parentElement.textContent.trim();
//   const listItem = document.createElement("li");
//   listItem.textContent = productName;
//   document.getElementById("selectedProducts").appendChild(listItem);
// } else {
//   alert("This product is already selected.");
// }

// Down Available Sets
function setDownUp(elementId, elementValue) {
  let currenAvailableSets = document.getElementById(elementId);
  currenAvailableSets.innerText = elementValue;
}

// Show Grand Total
function showGrandTotal(elementId) {
  const grandTotal = document.getElementById(elementId);
  grandTotal.classList.add("!flex");
}

// Add Class
function AddClass(elementId) {
  elementId.classList.add("!bg-green", "!text-white");
}

// Check Coupon Field is Valid

// Down Available Sets
function setDownUp(elementId, elementValue) {
  let currenAvailableSets = document.getElementById(elementId);
  currenAvailableSets.innerText = elementValue;
}

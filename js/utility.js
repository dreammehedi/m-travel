// Down Available Sets
function setDownUp(elementId, elementValue) {
  let currenAvailableSets = document.getElementById(elementId);
  currenAvailableSets.innerText = elementValue;
}
// Set Discount Price
function setDiscountPrice(elementId, setValue) {
  const discountPriceId = document.getElementById(elementId);
  discountPriceId.innerText = setValue;
}

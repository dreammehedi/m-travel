// Check Minimum One Sit Are Selected And Phone Number Is Valid
function checkSitNumber(selectedSit) {
  const number = parseInt(document.getElementById("number").value);
  if (selectedSit >= 1 && !isNaN(number)) {
    const submitForm = document.getElementById("submit-form");
    submitForm.disabled = false;
    submitForm.classList.add("!bg-green", "text-white");
  }
}

// Find Submit Btn
const submitBtn = document.getElementById("submit-form");
submitBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.classList.add("!flex");
});

// Close Modal
const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("!flex");
});

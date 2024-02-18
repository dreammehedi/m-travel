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

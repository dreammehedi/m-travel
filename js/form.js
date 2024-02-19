// Check Minimum One Sit Selected Or Phone Number Is Valid
const numberField = document.getElementById("number");
numberField.addEventListener("keyup", function (e) {
  // Current Number Length
  const checkNumberNotEmpty = e.target.value.length;

  // Find Selected Sit Value
  const selectedSit = Number(
    document.getElementById("selected-seat").innerText
  );
  // selected sit not valid akhan theka kaj korte hoba abar
  if (checkNumberNotEmpty !== 0 && selectedSit !== 0) {
    const couponInputField = document.getElementById("coupon-field");
    couponInputField.disabled = false;
  }
});

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

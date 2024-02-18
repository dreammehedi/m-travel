// Check Coupon Field Is Valid
const couponField = document.getElementById("coupon-field");
couponField.addEventListener("keyup", (e) => {
  // coupon field value
  const couponInputValue = e.target.value;

  //   15% Coupon Code
  const coupon15 = document.getElementById("coupon15").innerText;

  //   20% Coupon Code
  const coupon20 = document.getElementById("coupon20").innerText;

  // Check   Coupon Input Value Is True
  if (couponInputValue === coupon15 || couponInputValue === coupon20) {
    const applyBtn = document.getElementById("apply-coupon");
    applyBtn.disabled = false;
    applyBtn.classList.add("bg-green");
  } else {
    applyBtn.disabled = true;
    applyBtn.classList.remove("bg-green");
  }
});

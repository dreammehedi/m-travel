// Check Coupon Field Is Valid
const couponField = document.getElementById("coupon-field");
couponField.addEventListener("keyup", (e) => {
  // coupon field value
  const couponInputValue = e.target.value;

  //   15% Coupon Code
  const coupon15 = document.getElementById("coupon15").innerText;

  //   20% Coupon Code
  const coupon20 = document.getElementById("coupon20").innerText;

  // Check Coupon Input Value Is True
  if (couponInputValue === coupon15 || couponInputValue === coupon20) {
    const applyBtn = document.getElementById("apply-coupon");
    applyBtn.disabled = false;
    applyBtn.classList.add("!bg-green", "text-white");
  } else {
    applyBtn.disabled = true;
    applyBtn.classList.remove("!bg-green", "text-white");
  }
});

//   If Coupon Code Is Valid This Function Is Call
const applyBtn = document.getElementById("apply-coupon");
applyBtn.addEventListener("click", getFinalDiscount);

// Calculate Final Discount
function getFinalDiscount() {
  //   Get Discount
  getDiscount();
}

// Get Discount
function getDiscount() {
  // Get Discount
  const off15 = Number(document.getElementById("off15").innerText);
  const off20 = Number(document.getElementById("off20").innerText);

  //   Coupon Input Field
  const couponValueCheck = document.getElementById("coupon-field").value;

  //   Discount Calculation
  if (couponValueCheck === "NEW15") {
    // Hide Coupon Input Field & Apply Button
    hideCouponInputField();

    const totalPrice = Number(document.getElementById("total-price").innerText);
    const discountPrice = (off15 / 100) * totalPrice;

    // Set Discount Price
    setDiscountPrice("discount-price", discountPrice);

    // Discount Total Grand Price
    const discountTotalGrandPrice = totalPrice - discountPrice;

    // Grand Total Price Set
    const grandTotalPrice = document.getElementById("grand-total-price");
    grandTotalPrice.innerText = discountTotalGrandPrice;
  } else if (couponValueCheck === "Couple 20") {
    // Hide Coupon Input Field & Apply Button
    hideCouponInputField();

    const totalPrice = Number(document.getElementById("total-price").innerText);
    const discountPrice = (off20 / 100) * totalPrice;

    // Set Discount Price
    setDiscountPrice("discount-price", discountPrice);

    // Discount Total Grand Price
    const discountTotalGrandPrice = totalPrice - discountPrice;

    // Grand Total Price Set
    const grandTotalPrice = document.getElementById("grand-total-price");
    grandTotalPrice.innerText = discountTotalGrandPrice;
  }
}

//   Hide Coupon Input Field & Apply Button
function hideCouponInputField() {
  const couponFieldApplyBtn = document.getElementById(
    "coupon-input-field-&-btn"
  );
  couponFieldApplyBtn.classList.add("hidden");
}

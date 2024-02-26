const bestOffers = [
  {
    bgColor: "#FFBF0F",
    discout: {
      id: "off15",
      num: 15,
      content: "% OFF",
    },
    title: "on your next purchase",
    date: "use by January 2024",
    img: "../images/cupon-devider.png",
    coupon: {
      id: "coupon15",
      code: "NEW15",
      title: "Coupon Code",
    },
  },
  {
    bgColor: "#F78C9C",
    discout: {
      id: "off20",
      num: 20,
      content: "% OFF",
    },
    title: "on your next purchase",
    date: "use by January 2024",
    img: "../images/cupon-devider.png",
    coupon: {
      id: "coupon20",
      code: "Couple 20",
      title: "Coupon Code",
    },
  },
];

const couponCode = document.getElementById("coupon-code");
couponCode.innerHTML = `${bestOffers
  .map((val) => {
    return `<div
    class="bg-[${val.bgColor}] rounded-3xl px-12 flex justify-between items-center"
  >
    <!-- Content -->
    <div class="font-inter flex flex-col space-y-2 text-[#030712CC]">
      <h2 class="text-xl md:text-4xl lg:text-[40px] font-black">
        <span id="${val.discout.id}">${val.discout.num}</span>${val.discout.content}
      </h2>
      <h3 class="text-base md:text-xl font-semibold">
        ${val.title}
      </h3>
      <p class="p !font-medium text-[#03071280]">use by January 2024</p>
    </div>
    <!-- Devider -->
    <img
      class="min-h-[200px]"
      src="${val.img}"
      alt="coupon devider"
    />
    <!-- Coupon -->
    <div
      class="flex flex-col justify-center items-center text-center gap-2"
    >
      <h2 id="${val.coupon.id}" class="text-xl md:text-3xl font-bold">${val.coupon.code}</h2>
      <p class="p !font-medium !text-base md:!text-xl text-[#03071266]">
        ${val.coupon.title}
      </p>
    </div>
  </div>`;
  })
  .join("")}`;

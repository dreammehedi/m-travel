const ticketRegistration = [
  { img: "./images/people.png", count: "500K+", type: "Registered users" },
  { img: "./images/ticket-cupon.png", count: "1.7lacks", type: "Ticket Sold" },
  { img: "../images/stoppage.png", count: "80 k+", type: "Rental partners" },
];

const ticketRegistrationUser = document.getElementById(
  "ticket-registration-user"
);
ticketRegistrationUser.innerHTML = `${ticketRegistration
  .map((val) => {
    return `<div
  class="flex justify-center items-center bg-green/10 lg:bg-white py-8 px-10 rounded-3xl gap-4 font-inter border-b-[3px] border-green"
>
  <img
    class="border border-gray-300 border-dashed cursor-pointer"
    src="${val.img}"
    alt="People"
  />
  <div class="flex flex-col justify-start">
    <h3 class="text-secondary-black font-bold text-4xl">${val.count}</h3>
    <p class="p text-[#03071299]">${val.type}</p>
  </div>
</div>`;
  })
  .join("")}`;

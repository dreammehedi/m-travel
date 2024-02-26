const places = [
  {
    class:
      "mybtn !text-base !font-medium !font-inter bg-[#0307120D] text-[#030712CC] hover:bg-green/10 hover:text-green hover:border-green",
    title: "Boarding Point - Laxmipur",
  },
  {
    class:
      "mybtn !text-base !font-medium !font-inter bg-[#0307120D] text-[#030712CC] hover:bg-green/10 hover:text-green hover:border-green",
    title: "Dropping Point - Bogura",
  },
  {
    class:
      "mybtn !text-base !font-medium !font-inter bg-[#0307120D] text-[#030712CC] hover:bg-green/10 hover:text-green hover:border-green",
    title: "Est. Time - 11 Hour",
  },
];

const paribahanPlaces = document.getElementById("paribahan-places");
paribahanPlaces.innerHTML = `${places
  .map((val) => {
    return `<button
class="${val.class}"
>
${val.title}
</button>`;
  })
  .join("")}`;

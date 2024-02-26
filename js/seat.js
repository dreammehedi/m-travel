// seat list
const seatAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const seatAlphabetId = document.getElementById("seat-alphabet");
seatAlphabetId.innerHTML = `${seatAlphabet
  .map((val) => {
    return `<strong id="${val}">${val}</strong>`;
  })
  .join("")}`;

//  seat listed 1 - 4
const seatAlphabetNum = [
  {
    class: "set hover:bg-[#1DD100]",
    title: "A1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "A2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "A3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "A4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "B1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "B2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "B3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "B4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "C1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "C2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "C3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "C4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "D1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "D2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "D3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "D4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "E1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "E2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "E3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "E4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "F1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "F2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "F3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "F4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "G1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "G2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "G3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "G4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "H1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "H2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "H3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "H4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "I1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "I2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "I3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "I4",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "J1",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "J2",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "J3",
  },
  {
    class: "set hover:bg-[#1DD100]",
    title: "J4",
  },
];

const seatAlphabetNumId = document.getElementById("sets");
seatAlphabetNumId.innerHTML = `${seatAlphabetNum
  .map((val) => {
    return `<button id="${val.title}" class="${val.class}">
    ${val.title}
</button>`;
  })
  .join("")}`;

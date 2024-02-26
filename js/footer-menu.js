const footerMenu = [
  {
    link: "#",
    title: "Terms & condition",
  },
  {
    link: "#",
    title: "Return & refund policy",
  },
  {
    link: "#",
    title: "Privacy policy",
  },
];

const footerMenuId = document.getElementById("footer-menu");

footerMenuId.innerHTML = `${footerMenu
  .map((val) => {
    return `<li class="hover:text-green"><a href="${val.link}">${val.title}</a></li>`;
  })
  .join("")}`;


const headerMenu = [
  {
    id: "1",
    name: "Dashboard",
    links: "/",
    namesub: [],
  },
  {
    id: "2",
    name: "Trade",
    links: "/trade/individual_assets",
    namesub: [
      {
        id: "1",
        sub: "Individual Assets",
        links: "/trade/individual_assets",
      },
      {
        id: "2",
        sub: "Perpetuals",
        links: "/trade/individual_assets",
      },
      {
        id: "3",
        sub: "Future Markets",
        links: "/trade/individual_assets",
      },
    ],
  },
  {
    id: "3",
    name: "Swap",
    links: "/swap",
    namesub: [],
  },
  {
    id: "4",
    name: "Analytics",
    links: "/",
    namesub: [],
  },
  {
    id: "5",
    name: "Blog",
    links: "/",
    namesub: [],
  },
];

export default headerMenu;

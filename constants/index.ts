const ICONS = {
  record: "/assets/icons/record.svg",
};

const dummyCards = [
  {
    id: "1",
    title: "A week in Bali",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/dummy.jpg",
    username: "James",
    views: 10,
    duration: 156,
    visibility: "public",
  },
  {
    id: "2",
    title: "Exploring Tokyo",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-05-02"),
    userImg: "/assets/images/dummy.jpg",
    username: "Anna",
    views: 25,
    duration: 210,
    visibility: "public",
  },
  {
    id: "3",
    title: "Mountain Adventure",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-05-03"),
    userImg: "/assets/images/dummy.jpg",
    username: "Liam",
    views: 42,
    duration: 185,
    visibility: "private",
  },
  {
    id: "4",
    title: "City Lights",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-05-04"),
    userImg: "/assets/images/dummy.jpg",
    username: "Sophia",
    views: 33,
    duration: 132,
    visibility: "public",
  },
  {
    id: "5",
    title: "Desert Journey",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-05-05"),
    userImg: "/assets/images/dummy.jpg",
    username: "Noah",
    views: 18,
    duration: 204,
    visibility: "unlisted",
  },
];

export { ICONS, dummyCards };

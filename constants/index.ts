export const PROPERTYLISTINGSAMPLE = [
  {
    name: "Sunny Beach Villa",
    rating: 4.8,
    address: {
      city: "Miami",
      country: "USA",
    },
    image: "/images/sunny-beach-villa-main.jpg",
    images: [
      "/images/sunny-beach-villa-1.jpg",
      "/images/sunny-beach-villa-2.jpg",
      "/images/sunny-beach-villa-3.jpg",
    ],
    description: "A beautiful beach villa with stunning ocean views...",
    category: ["WiFi", "Pool", "Air Conditioning", "Kitchen", "Parking"],
    pricePerNight: 250,
    reviews: [
      {
        name: "Alice Johnson",
        avatar: "/avatars/alice.jpg",
        rating: 5,
        comment: "Amazing stay, loved the beach view and hospitality!",
      },
      {
        name: "Bob Smith",
        avatar: "/avatars/bob.jpg",
        rating: 4,
        comment: "Great location but the kitchen could be better equipped.",
      },
    ],
    host: {
      name: "John Doe",
      about: "Passionate host who loves making guests feel at home.",
    },
  },
  // You can add more property objects here
];

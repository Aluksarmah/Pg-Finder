import { atom } from "recoil";

export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  // {
  //   id: 3,
  //   path: "/services",
  //   text: "Services",
  // },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      // {
      //   id: 52,
      //   path: "/team",
      //   text: "Our Team",
      // },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact Us",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Find the perfect PG for you",
    subtitle: "Happy living",
    btn1: "Find PG",
    btn2: "Book PG",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Find the perfect PG for you",
    subtitle: "happy living",
    btn1: "Find PG",
    btn2: "Book PG",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  // {
  //   id: 2,
  //   header: "Services",
  //   UnitItem: [
  //     {
  //       name: "Food & Restaurant",
  //     },
  //     {
  //       name: "Spa & Fitness",
  //     },
  //     {
  //       name: "Sports & Gaming",
  //     },
  //     {
  //       name: "Event & Party",
  //     },
  //     {
  //       name: "GYM & Yoga",
  //     },
  //   ],
  // },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "Jorhat, Assam, India",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@example.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    
    name: "Client Name",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = atom({
  key: "roomItems",
  default: [
    {
      img: "../assets/img/room-1.webp",
      price: "₹6500 per Month",
      name: "Aashrita PG",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  
    {
      img: "../assets/img/room-2.jpg",
      price: "₹7000 per Month",
      name: "Sunny's P.G",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
    {
      img: "../assets/img/room-3.webp",
      price: "₹5700 per Month",
      name: "Abhinash Boys P.G",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },

    {
      img: "../assets/img/room-2.jpg",
      price: "₹6500 per Month",
      name: "Aidhan Aloy PG",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },

    {
      img: "../assets/img/room-2.jpg",
      price: "₹5500 per Month",
      name: "Divine Boy's P.G",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },

    {
      img: "../assets/img/room-2.jpg",
      price: "₹3000 per Month",
      name: "Aditi Girls Hostel",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },

  ]
})

export const searchTermState = atom({
  key: 'searchTermState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (empty string for now)
});



export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];

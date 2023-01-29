// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilWeight,
  UilPackage,
  UilChart,
  UilFire,
  UilTrophy,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Workout Courses",
  },
  {
    icon: UilUsersAlt,
    heading: "Personalized Trainer",
  },
  {
    icon: UilPackage,
    heading: 'Fitness Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Weight",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 80,
    value: "Good Progress",
    png: UilWeight,
    series: [
      {
        name: "Weight history",
        data: [91,87,85,86,89,84,80],
      },
    ],
  },
  {
    title: "Calories Burnt",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "Total - 9,270",
    png: UilFire,
    series: [
      {
        name: "Calories Burnt",
        data: [100,120,90,130,200,160,200],
      },
    ],
  },
  {
    title: "Weekly Steps",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "77,000",
    png: UilTrophy,
    series: [
      {
        name: "Weekly Steps",
        data: [7000,15000,11000,9000,1500,8000,12000],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "Step count - 40000",
    time: "25 minutes ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "Step count - 35000",
    time: "1 hour ago",
  },
  {
    img: img3,
    name: "Iron Girl",
    noti: "Step count - 27000",
    time: "2 hours ago",
  },
];

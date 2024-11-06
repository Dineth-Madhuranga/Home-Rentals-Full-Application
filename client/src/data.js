import { MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import { GiGrass, GiBoatFishing } from "react-icons/gi";
import { FaPumpSoap, FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey, FaCouch, FaUserGraduate, FaChild, FaTractor, FaLeaf } from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet, FaBuilding, FaDoorOpen } from "react-icons/fa6";
import { BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge, BiWorld } from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { PiBathtubFill, PiCoatHangerFill, PiTelevisionFill } from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import { GiHeatHaze, GiCctvCamera, GiCampfire } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";




export const categories = [
    {
        label: "All",
        icon: <BiWorld />,
    },
    {
        img: "assets/house.jpg",
        label: "House Rental",
        icon: <FaHouseUser />,
        description: "This property is close to the beach!",
    },
    {
        img: "assets/apart.jpg",
        label: "Apartment Rentals",
        icon: <FaPeopleRoof />,
        description: "This property is has windmills!",
    },
    {
        img: "assets/commercial.jpg",
        label: "Commercial Property",
        icon: <FaBuilding />,
        description: "This property is modern!",
    },
    {
        img: "assets/rooms.jpg",
        label: "Room & Annex",
        icon: <FaDoorOpen />,
        description: "This property is in the countryside!",
    },
    {
        img: "assets/holiday.jpg",
        label: "Holiday & Short Term",
        icon: <FaUmbrellaBeach />,
        description: "This is property has a beautiful pool!",
    },
    {
        img: "assets/land.jpg",
        label: "Land Rentals",
        icon: <GiGrass />,
        description: "This property is on an island!",
    },
    {
        img: "assets/lake_cat.webp",
        label: "Lakefront",
        icon: <GiBoatFishing />,
        description: "This property is near a lake!",
    },
    {
        img: "assets/skiing_cat.jpg",
        label: "Pet-Friendly",
        icon: <MdPets />,
        description: "This property is suitable for pet lovers!",
    },
    {
        img: "assets/castle_cat.webp",
        label: "Studios",
        icon: <FaBuilding />,
        description: "This property is a studio apartment!",
    },
    {
        img: "assets/cave_cat.jpg",
        label: "Furnished Rentals",
        icon: <FaCouch />,
        description: "This property is fully furnished!",
    },
    {
        img: "assets/camping_cat.jpg",
        label: "Student Housing",
        icon: <FaUserGraduate />,
        description: "This property is ideal for students!",
    },
    {
        img: "assets/arctic_cat.webp",
        label: "Family-Friendly",
        icon: <FaChild />,
        description: "This property is family-friendly!",
    },
    {
        img: "assets/desert_cat.webp",
        label: "Rural Rentals",
        icon: <FaTractor />,
        description: "This property is located in a rural area!",
    },
    {
        img: "assets/barn_cat.jpg",
        label: "Eco-Friendly Rentals",
        icon: <FaLeaf />,
        description: "This property is environmentally friendly!",
    },
    {
        img: "assets/lux_cat.jpg",
        label: "Luxury",
        icon: <IoDiamond />,
        description: "This property is brand new and luxurious!",
    },
];

export const types = [
    {
        name: "An entire place",
        description: "Guests have the whole place to themselves",
        icon: <FaHouseUser />,
    },
    {
        name: "Room(s)",
        description:
            "Guests have their own room in a house, plus access to shared places",
        icon: <BsFillDoorOpenFill />,
    },
    {
        name: "A Shared Room",
        description:
            "Guests sleep in a room or common area that maybe shared with you or others",
        icon: <FaPeopleRoof />,
    },
];

export const facilities = [
    {
        name: "Bath tub",
        icon: <PiBathtubFill />,
    },
    {
        name: "Personal care products",
        icon: <FaPumpSoap />,
    },
    {
        name: "Outdoor shower",
        icon: <FaShower />,
    },
    {
        name: "Washer",
        icon: <BiSolidWasher />,
    },
    {
        name: "Dryer",
        icon: <BiSolidDryer />,
    },
    {
        name: "Hangers",
        icon: <PiCoatHangerFill />,
    },
    {
        name: "Iron",
        icon: <TbIroning3 />,
    },
    {
        name: "TV",
        icon: <PiTelevisionFill />,
    },
    {
        name: "Dedicated workspace",
        icon: <BsPersonWorkspace />
    },
    {
        name: "Air Conditioning",
        icon: <BsSnow />,
    },
    {
        name: "Heating",
        icon: <GiHeatHaze />,
    },
    {
        name: "Security cameras",
        icon: <GiCctvCamera />,
    },
    {
        name: "Fire extinguisher",
        icon: <FaFireExtinguisher />,
    },
    {
        name: "First Aid",
        icon: <BiSolidFirstAid />,
    },
    {
        name: "Wifi",
        icon: <BiWifi />,
    },
    {
        name: "Cooking set",
        icon: <FaKitchenSet />,
    },
    {
        name: "Refrigerator",
        icon: <BiSolidFridge />,
    },
    {
        name: "Microwave",
        icon: <MdMicrowave />,
    },
    {
        name: "Private patio or Balcony",
        icon: <MdBalcony />,
    },
    {
        name: "Fire Wood / Gas",
        icon: <GiCampfire />,
    },
    {
        name: "Garden",
        icon: <MdYard />,
    },
    {
        name: "Free parking",
        icon: <AiFillCar />,
    },
    {
        name: "Self check-in",
        icon: <FaKey />
    },
    {
        name: " Pet allowed",
        icon: <MdPets />
    }
];

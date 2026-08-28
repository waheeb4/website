import logo from "../assets/uni-logo.png";
import abdelrahman from "../assets/members/abdelrahman.png";
import abdullah from "../assets/members/abdullah.jpeg";
import aboya from "../assets/members/aboya.jpeg";
import ahmedMansour from "../assets/members/ahmed-mansour.jpeg";
import aley from "../assets/members/aley.jpeg";
import aliElouny from "../assets/members/ali-elouny.jpeg";
import amroTarek from "../assets/members/amro-tarek.jpeg";
import ayaYasser from "../assets/members/aya yasser.jpeg";
import bassam from "../assets/members/bassam.jpeg";
import elRayes from "../assets/members/el-rayes.jpeg";
import faridaGouda from "../assets/members/farida gouda.jpeg";
import gamal from "../assets/members/gamal.jpeg";
import hadeerAmer from "../assets/members/hadeer amer.jpeg";
import haggar from "../assets/members/haggar.jpeg";
import hashem from "../assets/members/hashem.jpeg";
import janaAyman from "../assets/members/jana ayman.jpeg";
import kenzy from "../assets/members/kenzy.jpeg";
import malakIslam from "../assets/members/malak islam.jpeg";
import mariam from "../assets/members/mariam.jpeg";
import marawanGui from "../assets/members/marawan-gui.jpeg";
import marwan from "../assets/members/marwan.jpeg";
import mohamedEhab from "../assets/members/mohamed-ehab.jpeg";
import mongy from "../assets/members/mongy.jpeg";
import nourWalid from "../assets/members/nour walid.jpeg";
import sagedKhaled from "../assets/members/saged-khaled.jpeg";
import salama from "../assets/members/salama.jpeg";
import salmaAbdelsattar from "../assets/members/salma abdelsattar.jpeg";
import salmaSherif from "../assets/members/salma-sherif.jpeg";
import samaAbdelhady from "../assets/members/sama abdelhady.jpeg";
import seifWalid from "../assets/members/seif-walid.jpeg";
import seiffox from "../assets/members/seiffox.jpeg";
import sheifo from "../assets/members/sheifo.jpeg";
import sheifoJr from "../assets/members/sheifo-jr.jpeg";
import sherif from "../assets/members/sherif.jpeg";
import yehiaMoh from "../assets/members/yehia-moh.jpeg";
import youssefWaleed from "../assets/members/youssef-waleed.jpeg";
import zeinaMagdy from "../assets/members/zeina magdy.jpeg";
import zeyadMagdy from "../assets/members/zeyad-magdy.jpeg";
import ziadGado from "../assets/members/ziad-gado.jpeg";
import type { Member } from "../types";

export const members: Member[] = [
  {
    year: 2026,
    member: [
      {
        firstName: "Muhammad",
        lastName: "Mongy",
        role: "Academic Supervisor",
        image: mongy,
        alt: "Muhammad Mongy, Academic Supervisor",
        links: [
          {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/mhmdmongy",
          },
        ],
      },

      // C-suite
      {
        firstName: "Mohamed",
        lastName: "Ehab",
        role: "CEO",
        image: mohamedEhab,
        alt: "Mohamed Ehab, CEO",
      },
      {
        firstName: "Yahia",
        lastName: "Mohamed",
        role: "COO",
        image: yehiaMoh,
        alt: "Yahia Mohamed, COO",
      },
      {
        firstName: "Mohamed",
        lastName: "Osama",
        role: "CTO",
        image: aboya,
        alt: "Mohamed Osama, CTO",
      },
      {
        firstName: "Ali",
        lastName: "Elouny",
        role: "CFO",
        image: aliElouny,
        alt: "Ali Elouny, CFO",
      },

      // Mechanical
      {
        firstName: "Youssef",
        lastName: "Haggar",
        role: "Mechanical Member",
        image: haggar,
        alt: "Youssef Haggar, Mechanical Member",
      },
      {
        firstName: "Abdallah",
        lastName: "Khaled",
        role: "Mechanical Member",
        image: abdullah,
        alt: "Abdallah Khaled, Mechanical Member",
      },
      {
        firstName: "Amro",
        lastName: "Tarek",
        role: "Mechanical Member",
        image: amroTarek,
        alt: "Amro Tarek, Mechanical Member",
      },
      {
        firstName: "Sherif",
        lastName: "Fahmy",
        role: "Mechanical Member",
        image: sherif,
        alt: "Sherif Fahmy, Mechanical Member",
      },
      {
        firstName: "Abdelrahman",
        lastName: "Salama",
        role: "Mechanical Member",
        image: salama,
        alt: "Abdelrahman Salama, Mechanical Member",
      },
      {
        firstName: "Aleyeldeen",
        lastName: "Bassam",
        role: "Mechanical Member",
        image: aley,
        alt: "Aleyeldeen Bassam, Mechanical Member",
      },
      {
        firstName: "Bassam",
        lastName: "Hisham",
        role: "Mechanical Member",
        image: bassam,
        alt: "Bassam Hisham, Mechanical Member",
      },
      {
        firstName: "Farida",
        lastName: "Gouda",
        role: "Mechanical Member",
        image: faridaGouda,
        alt: "Farida Gouda, Mechanical Member",
      },

      // Software
      {
        firstName: "Youssef",
        lastName: "Hashem",
        role: "Software Lead",
        image: hashem,
        alt: "Youssef Hashem, Software Lead",
      },
      {
        firstName: "Youssef",
        lastName: "Waleed",
        role: "Control Lead",
        image: youssefWaleed,
        alt: "Youssef Waleed, Control Lead",
      },
      {
        firstName: "Saged",
        lastName: "Khaled",
        role: "Vision Lead",
        image: sagedKhaled,
        alt: "Saged Khaled, Vision Lead",
      },
      {
        firstName: "Adham",
        lastName: "Waheeb",
        role: "GUI Lead",
        image: elRayes,
        alt: "Adham Waheeb, GUI Lead",
      },
      {
        firstName: "Salma",
        lastName: "Sherif",
        role: "Float Lead",
        image: salmaSherif,
        alt: "Salma Sherif, Float Lead",
      },
      {
        firstName: "Marwan",
        lastName: "Mahmoud",
        role: "Software Member",
        image: marwan,
        alt: "Marwan Mahmoud, Software Member",
      },
      {
        firstName: "Marwan",
        lastName: "Hossam",
        role: "Software Member",
        image: marawanGui,
        alt: "Marwan Hossam, Software Member",
      },
      {
        firstName: "Gamal",
        lastName: "ElMarangoz",
        role: "Software Member",
        image: gamal,
        alt: "Gamal ElMarangoz, Software Member",
      },
      {
        firstName: "Mohamed",
        lastName: "Tawfik",
        role: "Software Member",
        image: sheifoJr,
        alt: "Mohamed Tawfik, Software Member",
      },
      {
        firstName: "Jana",
        lastName: "Ayman",
        role: "Software Member",
        image: janaAyman,
        alt: "Jana Ayman, Software Member",
      },
      {
        firstName: "Aya",
        lastName: "Yasser",
        role: "Software Member",
        image: ayaYasser,
        alt: "Aya Yasser, Software Member",
      },
      {
        firstName: "Hadeer",
        lastName: "Amer",
        role: "Software Member",
        image: hadeerAmer,
        alt: "Hadeer Amer, Software Member",
      },
      {
        firstName: "Ahmed",
        lastName: "Mansour",
        role: "Software Member",
        image: ahmedMansour,
        alt: "Ahmed Mansour, Software Member",
      },
      {
        firstName: "Ziad",
        lastName: "Gado",
        role: "Software Member",
        image: ziadGado,
        alt: "Ziad Gado, Software Member",
      },
      {
        firstName: "Zeina",
        lastName: "Magdy",
        role: "Software Member",
        image: zeinaMagdy,
        alt: "Zeina Magdy, Software Member",
      },
      {
        firstName: "Nour",
        lastName: "Walid",
        role: "Software Member",
        image: nourWalid,
        alt: "Nour Walid, Software Member",
      },
      {
        firstName: "Kenzy",
        lastName: "Baher",
        role: "Software Member",
        image: kenzy,
        alt: "Kenzy Baher, Software Member",
      },

      // Electrical
      {
        firstName: "Ziad",
        lastName: "Magdy",
        role: "Electrical Lead",
        image: zeyadMagdy,
        alt: "Ziad Magdy, Electrical Lead",
      },
      {
        firstName: "Seifeldeen",
        lastName: "Walid",
        role: "Electrical Member",
        image: seiffox,
        alt: "Seifeldeen Walid, Electrical Member",
      },
      {
        firstName: "Mohamed",
        lastName: "Sherif",
        role: "Electrical Member",
        image: sheifo,
        alt: "Mohamed Sherif, Electrical Member",
      },
      {
        firstName: "Seif",
        lastName: "Alaa",
        role: "Electrical Member",
        image: seifWalid,
        alt: "Seif Alaa, Electrical Member",
      },
      {
        firstName: "Mariam",
        lastName: "Mohamed",
        role: "Electrical Member",
        image: mariam,
        alt: "Mariam Mohamed, Electrical Member",
      },

      // Technical documentation
      {
        firstName: "Sama",
        lastName: "Abdelhady",
        role: "Technical Documentation Member",
        image: samaAbdelhady,
        alt: "Sama Abdelhady, Technical Documentation Member",
      },
      {
        firstName: "Salma",
        lastName: "Abdelsattar",
        role: "Technical Documentation Member",
        image: salmaAbdelsattar,
        alt: "Salma Abdelsattar, Technical Documentation Member",
      },
      {
        firstName: "Malak",
        lastName: "Islam",
        role: "Technical Documentation Member",
        image: malakIslam,
        alt: "Malak Islam, Technical Documentation Member",
      },
      {
        firstName: "Abdelrahman",
        lastName: "Aly",
        role: "Technical Documentation Member",
        image: abdelrahman,
        alt: "Abdelrahman Aly, Technical Documentation Member",
      },
    ],
  },
  {
    year: 2027,
    member: [
      {
        firstName: "Coming",
        lastName: "Soon",
        role: "Triton",
        image: logo,
        alt: "Triton",
      },
    ],
  },
];

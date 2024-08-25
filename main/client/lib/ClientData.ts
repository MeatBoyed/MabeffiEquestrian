import { EventType } from "@/components/Event";
import { SiteImagesRepo } from "./siteConfig";

export const SocialMediaLinks = {
  WhatsApp: "",
};

export const servicesOffer = [
  {
    title: "Pony Rides",
    description: "Enhance your riding skills",
    intails: [
      "1 Lap around arena",
      "For all ages",
      // "Brushing & tackling horse for riding",
    ],
    bookWhat: "Ride",
    link: "",
  },
  {
    title: "Hour Riding Lesson",
    description: "Enhance your riding skills",
    intails: ["Horse Riding", "Prepare horse for paddock", "Brushing & tackling horse"],
    bookWhat: "Lesson",
    link: "",
  },
  {
    title: "30min Lesson",
    description: "Enhance your riding skills",
    intails: ["Horse Riding", "Ideal for Kids under 5", "Brushing & Tackling horse"],
    bookWhat: "Session",
    link: "",
  },
  {
    title: "Photo Shoot",
    description: "Enhance your riding skills",
    intails: ["Horse Riding", "Preparing horse for paddock", "Brushing & tackling horse for riding"],
    bookWhat: "Session",
    link: "",
  },
];

export const events: EventType[] = [
  {
    title: "Pony Camp",
    image: SiteImagesRepo.Events,
    date: "21/3/24",
    location: "Walvis Bay, Namibia",
    maxMemebers: 20,
    enrollLink: "",
    bodyText: {
      first: "A thrilling 5-day adventure designed to introduce kids aged 2-16 to the essentials of equestrianism.",
      second:
        "Under the guidance of our experienced instructors, campers will learn the basics of horse care, develop riding skills, and gain a deeper understanding of equestrian sports.",
      part1:
        "Limited to only 15 participants, this camp offers a unique opportunity for young riders to immerse themselves in a fun-filled, educational experience.",
      part2: "Don't miss out on this incredible opportunity! Register now to secure your child's spot in our Pony Camp",
    },
  },
  {
    title: "Horse Riding Lessons",
    image: SiteImagesRepo.Events,
    date: "21/3/24",
    location: "Walvis Bay, Namibia",
    maxMemebers: 20,
    enrollLink: "",
    bodyText: {
      first: "A thrilling 5-day adventure designed to introduce kids aged 2-16 to the essentials of equestrianism.",
      second:
        "Under the guidance of our experienced instructors, campers will learn the basics of horse care, develop riding skills, and gain a deeper understanding of equestrian sports.",
      part1:
        "Limited to only 15 participants, this camp offers a unique opportunity for young riders to immerse themselves in a fun-filled, educational experience.",
      part2: "Don't miss out on this incredible opportunity! Register now to secure your child's spot in our Pony Camp",
    },
  },
];

export const testimonials = [
  {
    name: "Sarah J. Smith",
    body: "My child has been attending Maribeth Connor's Horse Riding Lessons for several months now, and I couldn't be happier with the experience. Maribeth's expertise and passion for horses truly shines through in her teaching. Not only has my child developed solid riding skills, but they have also gained confidence, discipline, and a deep love for these magnificent animals.",
  },
  {
    name: "Kyle",
    body: "My child has been attending Maribeth Connor's Horse Riding Lessons for several months now, and I couldn't be happier with the experience. Maribeth's expertise and passion for horses truly shines through in her teaching. Not only has my child developed solid riding skills, but they have also gained confidence, discipline, and a deep love for these magnificent animals.",
  },
];

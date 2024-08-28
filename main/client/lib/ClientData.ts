import { EventType } from "@/components/Event";
import { SiteImagesRepo } from "./siteConfig";
import { ServiceCard, ServiceEnum } from "@/components/ServiceCard";

export const SocialMediaLinks = {
  WhatsApp: "",
};

export const servicesOffer: ServiceCard[] = [
  {
    service: ServiceEnum["Pony Rides"],
    title: "Pony Rides",
    description: "Book a gentle, supervised pony ride experience.",
    intails: ["For kids", "No experience required", "Gentle, supervised experience", "Perfect introduction to horses"],
    bookWhat: "Pony Ride",
    link: "",
    dialog: {
      title: "Book a Pony Ride",
      description: "Leave your details and we I will get back to you as soon as possible",
      button: "Book Now",
    },
  },
  {
    service: ServiceEnum["1 hour lesson"],
    title: "1 Hour Riding Lesson",
    description: "Learn how to ride and become an equestrian",
    intails: [
      "For all ages",
      "Learn Show jumping fundamentals",
      "Learn advanced horse riding techniques",
      "Learn Horse grooming and stable skills",
      "Learn how to become a professional equestrian",
      "Learn beginner to advanced horse riding skills",
      "Compete in local and national equestrian events",
      "Ideal for those who want to become well rounded equestrians",
    ],
    bookWhat: "Lesson",
    link: "",
    dialog: {
      title: "Join the waiting list",
      description: "Unfortonatly we are currently full, please leave your details and I'll contact you when a spot opens up.",
      button: "Join Now",
    },
  },
  {
    service: ServiceEnum["30 min lesson"],
    title: "30min Lesson",
    description: "Enhance your riding skills",
    intails: [
      "For all ages",
      "Brushing & Tackling horse",
      "Learn how to become a professional equestrian",
      "Learn beginner to intimidate horse riding skills",
      "Ideal for those who aren't sure about horse riding",
    ],
    bookWhat: "Lesson",
    link: "",
    dialog: {
      title: "Book a 30min Lesson",
      description: "Leave your details and I'll will get back to you as soon as possible",
      button: "Book Now",
    },
  },
  {
    service: ServiceEnum["photoshoot"],
    title: "Photo Shoot",
    description: "Enhance your riding skills",
    intails: [
      "Great for Social Media posts",
      "Great for Wedding and family photos",
      "Horses are tacked up and ready to ride",
      "Horses are groomed and ready for the shoot",
    ],
    bookWhat: "Session",
    link: "",
    dialog: {
      title: "Book a Photo Shoot",
      description: "Leave your details and we I'll get back to you as soon as possible",
      button: "Book Now",
    },
  },
];

export const events: EventType[] = [
  {
    title: "Equestrian Fun Day",
    image: SiteImagesRepo.Events,
    date: "20/1/25",
    location: "Walvis Bay, Namibia",
    maxMemebers: 10,
    enrollLink: "",
    bodyText: {
      first:
        "Join us for an exciting full-day event designed for kids aged 8-14 to enhance their equestrian skills and have fun with horses!",
      second:
        "Our experienced instructors will guide participants through a variety of engaging activities, including riding lessons, grooming techniques, and equine care basics.",
      part1:
        "The day will also feature fun games and quizzes to improve equestrian knowledge, as well as team-building exercises centred around horse care.",
      part2:
        "Limited to 10 participants to ensure individual attention. Book now to secure your child's spot in this unforgettable equestrian adventure!",
    },
  },
  {
    title: "Junior Riders' Afternoon",
    image: SiteImagesRepo.Events,
    date: "15/12/24",
    location: "Walvis Bay, Namibia",
    maxMemebers: 8,
    enrollLink: "",
    bodyText: {
      first: "An action-packed afternoon event tailored for young riders aged 6-12 looking to improve their horsemanship skills.",
      second:
        "Participants will enjoy a mix of riding lessons, stable management activities, and fun equestrian-themed games and challenges.",
      part1:
        "Our skilled instructors will focus on building confidence, improving riding techniques, and fostering a love for horses in a safe, supportive environment.",
      part2:
        "With only 8 spots available, early booking is recommended. Don't miss this chance to boost your child's equestrian skills!",
    },
  },
];

export const testimonials = [
  {
    name: "Emma Thompson",
    body: "Maribeth's lessons have been transformative for my daughter. In just a few months, I've seen a remarkable improvement in her riding skills and confidence. The way Maribeth connects with both the children and the horses is truly special. Her patience and expertise make every lesson a joy for my daughter.",
  },
  {
    name: "David Patel",
    body: "As a parent, safety is my top priority, and I couldn't feel more at ease with Maribeth's instruction. Her attention to detail and emphasis on proper technique have given my son a solid foundation in horsemanship. It's not just about riding; he's learning responsibility and compassion too.",
  },
  {
    name: "Sophie Williams",
    body: "We tried several riding schools before finding Maribeth, and the difference is night and day. Her personalised approach means my twins, despite their different skill levels, are both progressing brilliantly. The bond they've formed with Donny is heartwarming to see. Highly recommend!",
  },
  {
    name: "James O'Connor",
    body: "Maribeth has a gift for teaching. My shy daughter has blossomed under her guidance, gaining not just riding skills but also self-assurance that's carried over into other areas of her life. The positive, encouraging atmosphere Maribeth creates is second to none.",
  },
  {
    name: "Olivia Chen",
    body: "I was hesitant about horse riding lessons for my son due to his ADHD, but Maribeth has been incredible. Her patience and structured approach have helped him focus and gain confidence. The progress he's made, both in riding and in his overall demeanour, is remarkable.",
  },
  {
    name: "Michael Ndlovu",
    body: "As a complete novice to the equestrian world, I was nervous about starting lessons. Maribeth's welcoming nature and clear instruction have made the experience enjoyable and rewarding. Her passion for horses is contagious, and I look forward to every lesson.",
  },
  {
    name: "Sarah Johnson",
    body: "The holiday pony camp run by Maribeth was the highlight of my daughter's summer. Not only did she improve her riding skills, but she also made new friends and learned valuable lessons about teamwork and animal care. We'll definitely be back next year!",
  },
  {
    name: "Robert van der Merwe",
    body: "Maribeth's expertise extends beyond just teaching riding. Her knowledge of horse behaviour and care has been invaluable. My teenagers have developed a deep respect for these magnificent animals and a genuine interest in equestrianism as a whole. Truly a comprehensive learning experience.",
  },
];

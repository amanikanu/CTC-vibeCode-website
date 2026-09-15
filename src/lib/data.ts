import type { StaticImageData } from "next/image";
import { parseDate, startOfDay } from "./date";

export interface Speaker {
  name: string;
  title: string;
  imageUrl: string;
  imageHint: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  imageHint: string;
  speakers: Speaker[];
  resources: string;
  registrationUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  team: string[];
  repoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  imageHint: string;
  status?: "upcoming" | "past";
  details: {
    schools?: string[];
    goal: string;
    hasVideo?: boolean;
    videoUrl?: string;
    date?: string;
    location?: string;
  };
  registrationLink?: string;
  registrationButtonText?: string;
  hideButton?: boolean,
  recap?: {
    text?: string;
    link?: string;
  };
  useModal?: boolean
}
export interface Faq {
  question: string;
  answer: string;
}

import { womensDay2026, nocodePortfolio2026 } from "@/assets/images";
const events: Event[] = [
  {
    id: "nocode-portfolio-2026",
    title: "How to Create a Portfolio Using No-code Tools",
    date: "2026-09-12",
    time: "5:00 PM WAT",
    location: "Google Meet",
    shortDescription:
      "Learn how to build and showcase a professional tech portfolio using modern no-code tools.",
    description:
      "Join Calabar Tech Community, Amani Kanu (The Tech Evangelist), and the TESI Initiative for an insightful session on 'How to Create a Portfolio Using No-code Tools'. Featuring guest speaker Olatunji Oye, Senior Software Engineer at BNSF Railway. Discover how to effectively showcase your projects and skills without writing complex code.",
    imageUrl: nocodePortfolio2026.src,
    imageHint: "no code portfolio creation flyer",
    speakers: [
      {
        name: "Olatunji Oye",
        title: "Senior Software Engineer - BNSF Railway",
        imageUrl: "https://picsum.photos/seed/olatunjioye/200/200",
        imageHint: "Olatunji Oye portrait",
      },
    ],
    resources: "Follow Calabar Tech Community social media pages for workshop slides and recordings.",
  },
  {
    id: "iwd-2025",
    title: "IWD 2026: Give to Gain",
    date: "2026-03-08",
    time: "5:00 PM WAT",
    location: "Virtual",
    shortDescription:
      'Celebrate International Women\'s Day 2026 with CTC as we discuss the theme "Give to Gain" for women in the technology ecosystem.',
    description:
      'International Women\'s Day (IWD) is a global day celebrating the social, economic, cultural, and political achievements of women. This year, Calabar Tech Community is hosting a high-impact virtual session themed "Give to Gain". We will dive into actionable insights on leadership, technical growth, and building inclusive spaces that empower women to thrive in tech.',
    imageUrl: womensDay2026.src,
    imageHint: "women tech event",
    speakers: [],
    resources: "Check out our past IWD events on our social media channels.",
    registrationUrl: "https://bit.ly/CTC_IWD-registration",
  },
  {
    id: "11",
    title: "Navigating Your Career as a Techy",
    date: "2024-01-27",
    time: "Not specified",
    location: "Virtual",
    shortDescription:
      "Insights on navigating a career in tech from industry experts.",
    description:
      'A huge shoutout to our amazing speakers, Onone Ega, Oyebamiji Jeremiah, Mary Onuorah, and Godswill Ejike, for illuminating the path to success in the tech world at our recent event! Your insights on "Navigating Your Career as a Techy" were truly inspiring.',
    imageUrl:
      "https://res.cloudinary.com/dedjhsw2k/image/upload/v1758884131/tech_event_1_py9sni.jpg",
    imageHint: "tech career event",
    speakers: [
      {
        name: "Onone Ega",
        title: "IT Project Manager & Scrum Master",
        imageUrl: "https://picsum.photos/seed/speaker4/100/100",
        imageHint: "woman professional",
      },
      {
        name: "Godswill Ejike",
        title: "Lead Product Designer",
        imageUrl: "https://picsum.photos/seed/speaker5/100/100",
        imageHint: "man designer",
      },
      {
        name: "Mary Onuorah",
        title: "Software Quality Assurance (QA)",
        imageUrl: "https://picsum.photos/seed/speaker6/100/100",
        imageHint: "woman qa",
      },
      {
        name: "Oyebamiji Jeremiah",
        title: "Snr. Software Engineer",
        imageUrl: "https://picsum.photos/seed/speaker7/100/100",
        imageHint: "man engineer",
      },
    ],
    resources: "N/A",
  },
  {
    id: "8",
    title: "Calabar Tech Community Hangout",
    date: "2024-07-20",
    time: "3:00 PM",
    location: "Lions Park, Marian Rd by Ekong Etta Traffic Light",
    shortDescription:
      "A community hangout at Lions Park to connect and have fun.",
    description:
      "It’s all going down at the Calabar Tech Community Hangout! Bring your A-game. See you soon!",
    imageUrl:
      "https://res.cloudinary.com/dedjhsw2k/image/upload/v1757938742/481986853_595576653317630_7237548188180696827_n_m7ra3l.jpg",
    imageHint: "community hangout",
    speakers: [],
    resources: "N/A",
  },
  {
    id: "9",
    title: "Calabar Tech Community Pizza Hangout 3.0",
    date: "2023-12-30",
    time: "Not specified",
    location: "Deluxe bar Atekong junction Marian",
    shortDescription:
      "Not just a regular hangout, this one is coming with so many vibes and varieties, Games, and lots more.",
    description:
      "It's \"Calabar Tech Community\" Pizza Hangout 3.0. This is not your regular hangout, This one is coming with so many vibes and varieties, Games, and lots more. You wouldn't want to miss it. Share to invite those already in Tech and those who are interested in building a Career in Tech. We look forward to having you there.",
    imageUrl:
      "https://res.cloudinary.com/dedjhsw2k/image/upload/v1757938742/480349656_584475874427708_2364846479836564905_n_ciuufx.jpg",
    imageHint: "pizza hangout",
    speakers: [],
    resources: "Registration Link: https://bit.ly/cal_tech_hangout",
  },
  {
    id: "10",
    title: "CRACKING THE CODE: A Roadmap To Success In Tech Interview Process",
    date: "2024-04-27",
    time: "9:00 AM",
    location: "Virtual",
    shortDescription:
      "Discover insider tips and strategies to ace your next tech interview.",
    description:
      'Join us for "CRACKING THE CODE: A Roadmap To Success In Tech Interview Process" hosted by Calabar Tech Community. Discover insider tips and strategies from professional HR, Eva Ebuzoeme to ace your next tech interview. From resume crafting to interview etiquette, unlock the secrets to landing your dream job in tech. This event promises invaluable insights and networking opportunities.',
    imageUrl:
      "https://res.cloudinary.com/dedjhsw2k/image/upload/v1757938741/482210798_621941777352465_418539730082261152_n_kt4xpc.jpg",
    imageHint: "tech interview",
    speakers: [
      {
        name: "Eva Ebuzoeme",
        title: "Professional HR",
        imageUrl: "https://picsum.photos/seed/speaker3/100/100",
        imageHint: "woman professional",
      },
      {
        name: "Amani Kanu",
        title: "Senior Software Engineer and Program Manager",
        imageUrl:
          "https://res.cloudinary.com/sirsuccess/image/upload/v1755979859/IMG-20250616-WA0039_1_u9c4ta.jpg",
        imageHint: "man professional",
      },
    ],
    resources: "Register at: https://bit.ly/ctc_interview",
  },
  {
    id: "tech-conference-calabar",
    title: "The Tech Conference Calabar",
    date: "2025-11-28",
    time: "9:00 AM",
    location: "Calabar International Convention Centre",
    shortDescription:
      "The biggest tech conference in Calabar, bringing together the brightest minds in technology.",
    description:
      'Join us for the largest gathering of tech talent in Calabar. "The Tech Conference Calabar" will feature keynote speeches from industry leaders, hands-on workshops, and networking opportunities. Whether you are a seasoned professional or just starting, this is an event you cannot miss.',
    imageUrl:
      "https://res.cloudinary.com/sirsuccess/image/upload/v1759598949/1003150400_zk97b3.png",
    imageHint: "tech conference audience",
    speakers: [],
    resources: "Official event website: https://calabartechconf.ng",
  },
];

const projects: Project[] = [
  {
    id: "1",
    title: "Calabar Tour Guide App",
    description:
      "A mobile application that helps tourists and residents discover the best spots in Calabar, from historical sites to local restaurants. Features user reviews and offline maps.",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    imageHint: "mobile app",
    team: ["Jane Doe", "John Smith"],
    repoUrl: "https://github.com/example/tour-guide",
  },
  {
    id: "2",
    title: "Waste Management Analytics",
    description:
      "A web-based platform that visualizes waste collection data across the city, helping to optimize routes and improve efficiency for waste management services.",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    imageHint: "dashboard analytics",
    team: ["Peter Jones", "Mary Johnson"],
    repoUrl: "https://github.com/example/waste-dashboard",
  },
  {
    id: "3",
    title: "Artisan Marketplace",
    description:
      "An e-commerce website connecting local artisans in Calabar with a global audience, allowing them to sell their handmade crafts and products online.",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    imageHint: "ecommerce website",
    team: ["Chris Green", "Patricia White"],
  },
  {
    id: "4",
    title: "E-Learning Platform",
    description:
      "An accessible online learning platform offering courses on digital skills, tailored for the youth in our community. Includes video tutorials and quizzes.",
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    imageHint: "online learning",
    team: ["Mike Adenuga", "Fatima Bello"],
    repoUrl: "https://github.com/example/elearning",
  },
  {
    id: "5",
    title: "Community Health Connect",
    description:
      "A mobile app that connects individuals with local health services and provides reliable health information and emergency contacts.",
    imageUrl: "https://picsum.photos/seed/project5/600/400",
    imageHint: "health app",
    team: ["David Okon", "Grace Bassey"],
  },
  {
    id: "6",
    title: "Local Farm Produce Directory",
    description:
      "A simple web directory that lists local farms and their produce, helping consumers buy fresh, locally-sourced food directly from farmers.",
    imageUrl: "https://picsum.photos/seed/project6/600/400",
    imageHint: "local food",
    team: ["Samuel Etta", "Amina Yusuf"],
    repoUrl: "https://github.com/example/farm-directory",
  },
];

const teamMembers: TeamMember[] = [
  {
    id: "7",
    name: "Amani Kanu",
    role: "Founder",
    imageUrl:
      "https://res.cloudinary.com/sirsuccess/image/upload/v1755979859/IMG-20250616-WA0039_1_u9c4ta.jpg",
    imageHint: "man founder portrait",
    bio: "Amani Kanu is a Senior Software Engineer, Developer Relations (DevRel) professional, and the Founder of Calabar Tech Community. With over half a decade of experience, he has developed scalable web applications for both global and local clients while mentoring aspiring technologists through Semicolon Africa, Decagon, and FootPrint Mentorship—a platform he established to help job seekers navigate their career journeys, secure opportunities, and position themselves as top candidates.\n\nA passionate community builder and tech evangelist, Amani has made significant contributions to the African tech ecosystem by fostering innovation, collaboration, and career growth. His work continues to empower individuals and organizations while inspiring the next generation of technology leaders.",
    social: {
      linkedin: "https://www.linkedin.com/in/amani-kanu/",
      twitter: "https://twitter.com/AmaniKanu",
      github: "https://github.com/AmaniKanu",
    },
  },
  {
    id: "8",
    name: "Florence Arong",
    role: "Co-founder",
    imageUrl:
      "https://res.cloudinary.com/sirsuccess/image/upload/v1757839614/florence_aa8cyo.jpg",
    imageHint: "woman professional",
    bio: "Florence Egwu is a software engineer with half a decade of experience spanning fintech and healthtech. She is the co-founder of the Calabar Tech Community, where she drives initiatives that foster innovation, collaboration, and talent development. As a Backend Engineer, she builds scalable distributed systems with modern technologies, and is passionate about knowledge sharing, mentorship, and community building. Florence is committed to advancing Calabar’s position as a growing hub for tech and innovation.",
    social: {
      linkedin: "https://www.linkedin.com/in/florencesarah-arong-egwu",
      twitter: "#",
    },
  },
  {
    id: "9",
    name: "Grace Effiong",
    role: "Co-founder & Frontend Engineer",
    imageUrl:
      "https://res.cloudinary.com/sirsuccess/image/upload/v1757839681/grace_nqxvpr.jpg",
    imageHint: "woman engineer",
    bio: "Grace Effiong is a frontend engineer who possesses a strong interest in fostering the growth of individuals in the technology sector. With over five years of experience, she has gained expertise in developing user-friendly and responsive web interfaces utilizing React.js and Next.js frameworks. Grace is well-versed in frontend technologies, and is passionate about assisting novices in the tech industry by monitoring their progress. Her commitment to mentoring and guiding beginners has the potential to shape their professional journeys and promote the development of a more diverse and inclusive tech community.",
    social: {
      linkedin: "https://www.linkedin.com/in/grace-effiong/",
      twitter: "https://twitter.com/Grace_ffiong",
    },
  },
  {
    id: "10",
    name: "Bassey Archibong",
    role: "Co-founder & Product Manager",
    imageUrl:
      "https://res.cloudinary.com/sirsuccess/image/upload/v1757839613/bassey_ykmymm.jpg",
    imageHint: "man manager portrait",
    bio: "Bassey Archibong is an experienced product manager with in-depth knowledge of the startup industry in Nigeria and a talent for innovative thinking. He continually challenges the status quo and seeks out new opportunities to excel. Bassey demonstrates excellence in launching cutting-edge products, mentoring emerging talent, and collaborating with cross-functional teams. However, his interests extend beyond business, as he is also dedicated to empowering the youth of Calabar by assisting them in securing gainful employment in the technology field. With his sharp wit and dynamic energy, Bassey is well-equipped to help individuals achieve their career goals, while simultaneously making the process enjoyable, competitive, and thrilling.",
    social: {
      linkedin: "https://www.linkedin.com/in/basseyarchibong/",
      twitter: "#",
    },
  },
];

const volunteers: Volunteer[] = [
  {
    id: "1",
    name: "Churchill Nnanna",
    role: "Front-end Developer",
    imageUrl:
      "https://res.cloudinary.com/dedjhsw2k/image/upload/v1757943229/Churchill-nnanna_-_Churchill_Nnanna_mzxumw.png",
    imageHint: "man developer portrait",
  },
];

import { estateImage1 } from "@/assets/images";
const programs: Program[] = [
  {
    id: "iwd-2025-program",
    title: "IWD 2026: Give to Gain",
    status: "upcoming",
    description:
      'Celebrate International Women\'s Day 2026 with CTC as we discuss the theme "Give to Gain" for women in the technology ecosystem.',
    imageUrl: womensDay2026,
    imageHint: "women tech event",
    details: {
      goal: 'Empowering women with the "Give to Gain" philosophy in tech.',
      date: "8th March, 2026",
      location: "Virtual",
      hasVideo: false,
      videoUrl: "https://bit.ly/CTC_IWD-registration",
    },
    hideButton: true
  },
  {
    id: "school-tech-storm-2026",
    title: "School Tech Storm 2026",
    status: "upcoming",
    description:
      "Following the success of the 2025 edition, School Tech Storm is expanding its impact. This 2-day outreach program aims to reach 4-5 schools, introducing students to tech careers, digital skills, and future opportunities in the tech ecosystem.",
    imageUrl: estateImage1,
    imageHint: "students classroom",
    details: {
      schools: ["Targeting 4-5 schools in Cross River State"],
      goal: "To expose students to real-world tech career paths early, inspire interest in digital skills, and bridge the gap between secondary education and the tech industry.",
      hasVideo: true,
      // videoUrl: "/tis",
      date: "24th - 25th March, 2026",
    },
    recap: {
      text: "Recap",
      link: "https://www.instagram.com/reel/DW8JzAegeLX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  },
  {
    id: "tech-conference-calabar-2025",
    title: "The Tech Conference Calabar",
    status: "past",
    description:
      "The biggest tech conference in Calabar, bringing together the brightest minds in technology. The event featured keynotes, workshops, and networking.",
    imageUrl:
      "https://res.cloudinary.com/sirsuccess/image/upload/v1759598949/1003150400_zk97b3.png",
    imageHint: "tech conference audience",
    details: {
      goal: "Bringing together the brightest minds in technology.",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/onBDDzC21ww",
      date: "28th - 29th November 2025",
      location: "Calabar International Convention Centre",
    },
    recap: {
      text: "Watch video",
      link: "https://www.youtube.com/embed/onBDDzC21ww",
    },
  },
  {
    id: "school-tech-storm-2025",
    title: "School Tech Storm 2025",
    status: "past",
    description:
      "Our flagship tech outreach for secondary schools. In 2025, we successfully reached over 400 SS class students across two schools, improving awareness of tech careers and sparking interest in digital skills.",
    imageUrl:
      "https://res.cloudinary.com/sirsuccess/image/upload/v1757839977/m_100_1_zz5rfb.jpg",
    imageHint: "students learning tech",
    details: {
      schools: [
        "NYSC Demonstration Secondary School",
        "Estate Model High School",
      ],
      goal: "To expose students to real-world tech career paths at an early stage, inspire interest in digital skills and innovation, and bridge the gap between secondary education and the tech industry.",
      hasVideo: true,
      videoUrl:
        "https://www.instagram.com/reel/DNTtbYmIwa1/?utm_source=ig_web_copy_link",
    },
    recap: {
      text: "Watch Recap",
      link: "https://www.instagram.com/reel/DNTtbYmIwa1/?utm_source=ig_web_copy_link",
    },
  },
];

const faqs: Faq[] = [
  {
    question: "What is the Calabar Tech Community?",
    answer:
      "The Calabar Tech Community is a group of individuals and organizations in Calabar, Nigeria who are passionate about technology and its potential to transform society. The community provides a platform for tech enthusiasts, entrepreneurs, developers, and investors to connect, share ideas, and collaborate on projects.",
  },
  {
    question: "Who can join the Calabar Tech Community?",
    answer:
      "Anyone who is interested in technology and innovation can join the Calabar Tech Community. This includes tech enthusiasts, entrepreneurs, developers, investors, and students.",
  },
  {
    question: "How do I join the Calabar Tech Community?",
    answer:
      "You can join the Calabar Tech Community by visiting their website or social media pages, and following the instructions to become a member. You may be required to fill out a membership form or attend a community event to become a member.",
  },
  {
    question: "What are the benefits of joining the Calabar Tech Community?",
    answer:
      "By joining the Calabar Tech Community, you will have the opportunity to network with like-minded individuals, attend events and workshops, learn new skills, collaborate on projects, and stay up-to-date with the latest trends and developments in the tech industry.",
  },
  {
    question: "What kind of events does the Calabar Tech Community organize?",
    answer:
      "The Calabar Tech Community organizes a variety of events, including hackathons, workshops, meetups, and conferences. These events cover topics such as programming, entrepreneurship, data science, artificial intelligence, and blockchain.",
  },
  {
    question:
      "How can I get involved in organizing events for the Calabar Tech Community?",
    answer:
      "If you are interested in organizing events for the Calabar Tech Community, you can reach out to the community leaders or attend a community meeting to express your interest. The community is always looking for enthusiastic and dedicated individuals to help organize events and activities.",
  },
  {
    question: "Is the Calabar Tech Community only for tech professionals?",
    answer:
      "No, the Calabar Tech Community is open to anyone who is interested in technology and innovation. Whether you are a student, a professional in a non-tech field, or simply someone who is passionate about technology, you are welcome to join the community.",
  },
  {
    question:
      "Does the Calabar Tech Community offer any training or mentorship programs?",
    answer:
      "Yes, the Calabar Tech Community offers training and mentorship programs for its members. These programs are designed to help members develop their skills, learn new technologies, and advance their careers in the tech industry.",
  },
  {
    question:
      "How can I stay updated on the activities of the Calabar Tech Community?",
    answer:
      "You can stay updated on the activities of the Calabar Tech Community by following their social media pages, subscribing to their newsletter, attending community events, or joining their online discussion forums.",
  },
];

export function getEvents(): Event[] {
  return [...events].sort((a, b) => {
    const dateA = parseDate(a.date)?.getTime() ?? Number.NEGATIVE_INFINITY;
    const dateB = parseDate(b.date)?.getTime() ?? Number.NEGATIVE_INFINITY;
    return dateB - dateA;
  });
}

function getEventDayTimeMs(event: Event): number | null {
  const d = parseDate(event.date);
  if (!d) return null;
  return startOfDay(d).getTime();
}

export function getUpcomingEvents(now: Date = new Date()): Event[] {
  const todayMs = startOfDay(now).getTime();

  return events
    .map((event) => ({ event, dayMs: getEventDayTimeMs(event) }))
    .filter((x) => x.dayMs !== null && x.dayMs >= todayMs)
    .sort((a, b) => (a.dayMs as number) - (b.dayMs as number))
    .map((x) => x.event);
}

export function getPastEvents(now: Date = new Date()): Event[] {
  const todayMs = startOfDay(now).getTime();

  const datedPast = events
    .map((event) => ({ event, dayMs: getEventDayTimeMs(event) }))
    .filter((x) => x.dayMs !== null && x.dayMs < todayMs)
    .sort((a, b) => (b.dayMs as number) - (a.dayMs as number))
    .map((x) => x.event);

  const undated = events.filter((e) => getEventDayTimeMs(e) === null);
  return [...datedPast, ...undated];
}

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}

export function getProjects(): Project[] {
  return projects;
}

export function getTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getVolunteers(): Volunteer[] {
  return volunteers;
}

export function getPrograms(now: Date = new Date()): Program[] {
  return programs.map((p) => ({ ...p, status: computeProgramStatus(p, now) }));
}

export function getUpcomingPrograms(): Program[] {
  const now = new Date();
  return getPrograms(now)
    .filter((p) => p.status === "upcoming")
    .map((program) => ({ program, range: getProgramDateRangeMs(program) }))
    .sort((a, b) => {
      const aStart = a.range?.startMs ?? Number.POSITIVE_INFINITY;
      const bStart = b.range?.startMs ?? Number.POSITIVE_INFINITY;
      return aStart - bStart;
    })
    .map((x) => x.program);
}

export function getPastPrograms(): Program[] {
  const now = new Date();
  return getPrograms(now)
    .filter((p) => p.status === "past")
    .map((program) => ({ program, range: getProgramDateRangeMs(program) }))
    .sort((a, b) => {
      // Show the most recent past programs first; undated ones go last.
      const aEnd = a.range?.endMs ?? Number.NEGATIVE_INFINITY;
      const bEnd = b.range?.endMs ?? Number.NEGATIVE_INFINITY;
      return bEnd - aEnd;
    })
    .map((x) => x.program);
}

export function getFaqs(): Faq[] {
  return faqs;
}

function computeProgramStatus(
  program: Program,
  now: Date,
): "upcoming" | "past" {
  const todayMs = startOfDay(now).getTime();
  const range = getProgramDateRangeMs(program);

  if (range) {
    return range.endMs >= todayMs ? "upcoming" : "past";
  }

  // If we can't parse a date (or it's missing), fall back to the manual status
  // so the UI still behaves sensibly.
  return program.status ?? "past";
}

function getProgramDateRangeMs(
  program: Program,
): { startMs: number; endMs: number } | null {
  const raw = program.details.date;
  if (!raw) return null;

  const range = parseProgramDateRange(raw);
  if (!range) return null;

  return {
    startMs: startOfDay(range.start).getTime(),
    endMs: startOfDay(range.end).getTime(),
  };
}

function parseProgramDateRange(
  value: string,
): { start: Date; end: Date } | null {
  // Examples in our data:
  // - "8th March, 2026"
  // - "24th - 25th March, 2026"
  // - "28th - 29th November 2025"
  const normalized = value
    .replace(/[–—]/g, "-") // en/em dashes -> hyphen
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const rangeMatch =
    /^(\d{1,2})(?:st|nd|rd|th)?\s*-\s*(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/i.exec(
      normalized,
    );
  if (rangeMatch) {
    const startDay = Number(rangeMatch[1]);
    const endDay = Number(rangeMatch[2]);
    const monthIndex = monthNameToIndex(rangeMatch[3]);
    const year = Number(rangeMatch[4]);

    if (monthIndex === null) return null;

    const start = buildLocalDate(year, monthIndex, startDay);
    const end = buildLocalDate(year, monthIndex, endDay);
    if (!start || !end) return null;

    return { start, end };
  }

  const singleMatch =
    /^(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/i.exec(normalized);
  if (singleMatch) {
    const day = Number(singleMatch[1]);
    const monthIndex = monthNameToIndex(singleMatch[2]);
    const year = Number(singleMatch[3]);

    if (monthIndex === null) return null;

    const d = buildLocalDate(year, monthIndex, day);
    if (!d) return null;

    return { start: d, end: d };
  }

  return null;
}

function monthNameToIndex(value: string): number | null {
  const key = value.toLowerCase();
  const map: Record<string, number> = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    sept: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11,
  };

  return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : null;
}

function buildLocalDate(
  year: number,
  monthIndex: number,
  day: number,
): Date | null {
  const d = new Date(year, monthIndex, day);

  // Guard against impossible dates like "31st February 2026".
  if (
    d.getFullYear() !== year ||
    d.getMonth() !== monthIndex ||
    d.getDate() !== day
  ) {
    return null;
  }

  return d;
}

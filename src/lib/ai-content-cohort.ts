export type CohortStaff = {
  name: string;
  imageUrl: string;
  bio: string;
  linkedinUrl: string;
};

export type AiContentParticipant = CohortStaff & {
  portfolioUrl: string;
  videoUrl: string;
};

const photo = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
const video = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

export const aiContentLead: CohortStaff | null = {
  name: "Amani Kanu",
  imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQE__tNKYRbx_g/profile-displayphoto-scale_400_400/B4DZrpbQb6JIAg-/0/1764852830050?e=1792022400&v=beta&t=5LC5G1L1wZsgh5krEFywLTGl3vEmR5Jez5YyyvAkyHA",
  bio: "Placeholder profile. Program lead guiding the cohort through realistic AI content, storytelling, and how to turn practice projects into paid work.",
  linkedinUrl: "https://www.linkedin.com/in/amani-kanu/",
};

export const aiContentFacilitator: CohortStaff | null = {
  name: "Stephina Kalu",
  imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGf4GeEsEKYSg/profile-displayphoto-scale_400_400/B4EZ7Yz21WJgAg-/0/1781753933964?e=1792022400&v=beta&t=Y5cf2Ua524_QK8c7DtuUgXa2wSrpa0jQ9mti78FhxZk",
  bio: "Placeholder profile. Facilitator supporting workshops, reviews, and day-to-day questions as participants build their first content pieces.",
  linkedinUrl: "https://www.linkedin.com/in/kalustephina/",
};

export const aiContentParticipants: AiContentParticipant[] = [
  {
    name: "Temitope Eniola Olagunju",
    imageUrl: photo("1ZNDTs-BFguZVt6o0KZGwdoOYYplcBQL6"),
    bio: "Hi, I’m Temitope Olagunju, a frontend developer and creative enthusiast with a passion for technology, design, and AI. I enjoy learning new ways to turn ideas into meaningful digital experiences and constantly improving my skills through practical projects.",
    linkedinUrl: "https://www.linkedin.com/in/temitope-eniola-99a531272/",
    portfolioUrl: "https://temitope112.vercel.app",
    videoUrl: video("1dnFE5aU5FAnENAumZn6jA4PIHMuaAiEx"),
  },
  {
    name: "Nkoyo J. Okoli",
    imageUrl: photo("1T2cbGjyfoRTsb4JBegLt9rzNmCaxNjge"),
    bio: "I am Nkoyo Okoli, a Video Editor and an AI Video Creator. I combine creative storytelling with AI-powered tools to produce high-converting and engaging content across short-form commercials, UGC videos, movies, animations, and podcasts.\n\nMy completion of the TESI training added a new level of professionalism to my workflow, refining my skills in AI video creation, client delivery, and content strategy. I’m truly grateful for this opportunity.",
    linkedinUrl: "https://www.linkedin.com/in/nkoyo-okoli-uxui-automation-itsupport",
    portfolioUrl: "https://nkoeditzokoli.framer.website/",
    videoUrl: video("1abw5D0ie1QJUNqkxntzVfwEYUId23aMt"),
  },
  {
    name: "Olamiposi Adekola",
    imageUrl: photo("1Fugvotr4RHR3mWo1WbOTyfkphSicRM6d"),
    bio: "I’m an IT Support Specialist and Tech Enthusiast passionate about helping businesses solve technology challenges and work smarter. I also create engaging AI-powered content, promotional visuals, and videos, combining technical expertise with creativity to help businesses connect with their audience.",
    linkedinUrl: "https://www.linkedin.com/in/olamiposi-adekola/",
    portfolioUrl: "https://olamiposi-adekola.framer.website/",
    videoUrl: video("1tEanm5wH4J_m5VfGTmX4XfuuRAS_nQSh"),
  },
  {
    name: "Adariku Blessing Ukwun",
    imageUrl: photo("1TjyyJn-2vj0Tc7ifwVouYjUtCnSZY_H7"),
    bio: "Adariku Blessing Ukwun is a Registered Nurse, skilled AI professional, and experienced administrator with a background in healthcare, customer support, and executive assistance. She is organized, tech-savvy, detail-oriented, and passionate about using technology and AI to improve productivity and work processes.",
    linkedinUrl: "https://www.linkedin.com/in/adariku-blessing",
    portfolioUrl: "https://bit.ly/adariku-blessing",
    videoUrl: video("1R-g1se4JNLCq8--i6nmN_iHRYxRojknx"),
  },
  {
    name: "Fyneboy Nwachukwu Macdickson Celt",
    imageUrl: photo("16OsHAd1eSVwh-DXaTHDfaak0OkJi0Awf"),
    bio: "Fyneboy Nwachukwu Macdickson Celt is a technology professional with interests and developing expertise in HealthTech, Internet of Things (IoT), embedded systems, software quality assurance, and DevOps. He is passionate about building technology-driven solutions that connect software, intelligent devices, and real-world applications, particularly in healthcare. He is committed to continuous learning, innovation, and developing practical technologies that can improve how people live, work, and access services.",
    linkedinUrl: "",
    portfolioUrl: "https://fyneboynwachukwu.framer.website/",
    videoUrl: video("1cO4UD2KlgH7KLXNjZIV5x-NfYZ4Vhhlu"),
  },
  {
    name: "Daniella Kehinde Akpeji",
    imageUrl: photo("1OBUDvokCwd3V1T3eEixfjGB49j1nDKG5"),
    bio: "I'm Daniella Akpeji, your favourite AI Content Specialist & Social Media Manager. I make brands impossible to ignore from content that converts to strategies that actually grow.\n\nLet's make your content work smarter.",
    linkedinUrl: "https://www.linkedin.com/in/daniella-apeji",
    portfolioUrl: "https://daniellaakpeji.framer.ai/",
    videoUrl: video("1CkcuyczEvPMlhF2gRnwAoTiCcWu6KymT"),
  },
  {
    name: "Awolu Owolabi Samuel",
    imageUrl: photo("1SO1wcLKzDU0qC2RrsdPjiZT_HBLvz2O5"),
    bio: "A professional Frontend Developer with over 5 years of experience building web and mobile applications using modern technologies such as React, Next.js, Vue, and JavaScript. He is passionate about technology, AI, and digital creativity, and is currently exploring AI-powered video creation to combine his technical skills with storytelling and visual content.",
    linkedinUrl: "https://www.linkedin.com/in/awolu-owolabi-samuel",
    portfolioUrl: "https://rotating-copywriter-467568-b308bf595.framer.app/",
    videoUrl: video("1L1jKVEHiAOxf5vrE92Od5xKO2ZiM2VUT"),
  },
  {
    name: "Aya Edodi Oka",
    imageUrl: photo("14QqgDoFWX6bPF2PETm4ahxle7C9R73E9"),
    bio: "I'm a Quality Assurance Engineer, based in Lagos, Nigeria. I work in tech company ensuring that are reliable, scalable, and actually deliver value to users. Beyond tech, I am advocate for accountability and better tech communities.",
    linkedinUrl: "https://www.linkedin.com/in/aya-oka-07a8a0277",
    portfolioUrl: "https://okaaya.framer.website/",
    videoUrl: video("1LGY6WHqDAj6WNfmmxxJhfmUFioTORKPQ"),
  },
  {
    name: "Agugoesi Faith Chinazom",
    imageUrl: photo("12fedJPARQybZH0_LXsHwKCoF5IeuMbRX"),
    bio: "Professional AI Movie creator",
    linkedinUrl: "",
    portfolioUrl: "",
    videoUrl: video("1UPwB2O-NI1Gw-mr0ixAQnIu348_zjgL3"),
  },
  {
    name: "Olayinka Opeoluwa Omolabi",
    imageUrl: photo("1HZNCilaxruR2GZGHRpS45PmZLFqvEzzD"),
    bio: "I am a technology professional with 4+ years of experience in technical support, Microsoft cloud technologies, Microsoft Dynamics GP, SQL, and customer-focused IT solutions. My experience spans troubleshooting complex technical issues, supporting cloud and ERP environments, resolving customer challenges, and collaborating with teams to deliver reliable solutions while maintaining high customer satisfaction.\n\nAlongside my technical career, I have developed skills in Cloud Computing, DevOps, Generative AI, and AI-powered content creation. I have explored the use of AI tools to create engaging videos, visual content, advertisements, and digital experiences, combining creativity with technology to communicate ideas effectively.\n\nI am passionate about learning emerging technologies and finding practical ways to use technology and AI to improve productivity, solve problems, create engaging digital content, and deliver better experiences. My goal is to continue growing at the intersection of technology, customer experience, DevOps, and AI innovation.",
    linkedinUrl: "https://www.linkedin.com/in/olayinkaomolabi",
    portfolioUrl: "https://olayinkaomolabi.framer.website",
    videoUrl: video("1lllWjBOVdiBXrjRr1QXx4BhthddjOzbj"),
  },
  {
    name: "Mbamala Jessica Chinyere",
    imageUrl: photo("1VFE2pb4FdykrcBQJuiT6PwRYYkCvXyDh"),
    bio: "I am Mbamala Jessica a graduate in Biochemistry and a creative content creator on health issues, children cartoons. I am one who is passionate about creating engaging visual content, advertising and inspiring others through my work.",
    linkedinUrl: "",
    portfolioUrl: "",
    videoUrl: video("1S8X8TEEWZ-dorOFsofUwgkECEfyux7qT"),
  },
  {
    name: "Wejinya Michael",
    imageUrl: photo("1tNB180NikUylGwoFjJ6_N4jFM8DkdIb4"),
    bio: "My name is Wejinya Michael, I am an Agricultural Expert with strong passion for Agritech.",
    linkedinUrl: "https://www.linkedin.com/in/michael-wejinya-6a13a316b",
    portfolioUrl: "https://wejinyamichael.framer.website/",
    videoUrl: video("1jxIoqkehRfbdAjGh1Z89LB6cr4rS8vkz"),
  },
  {
    name: "Ivy Samuel Asako-Ita",
    imageUrl: photo("13hJ_L3iaUb4OZmK3VbkYzhlo1FjF98A2"),
    bio: "An Administrative and Remote Virtual Assistant and currently an AI digital creator. Experienced in call auditing, transcribing and basic analytic tools.",
    linkedinUrl: "",
    portfolioUrl: "https://graceful-purpose-934780-da8321ea1.framer.app/",
    videoUrl: video("1r7OGc62wWONb-ozS_K8XPqr8361SNGBq"),
  },
  {
    name: "Onyema Miracle Adaeze",
    imageUrl: photo("1V6GiPBkgwarcWb4ycdTqAWqd7jCnf3WQ"),
    bio: "I’m Miracle, a creative technologist and aspiring Front-End Developer passionate about AI content creation, digital marketing, and turning ideas into impactful digital experiences through MiraVerse.",
    linkedinUrl: "https://www.linkedin.com/in/mima-tech",
    portfolioUrl: "https://miraverse.base44.app",
    videoUrl: video("1C-oJ5h6_fnmC_Azsr6o2KdZT2SkirYh5"),
  },
  {
    name: "Ukam Joseph Unor",
    imageUrl: photo("1W8ROSYDTaL3zAcHIs86LU0HebjrRGEFZ"),
    bio: "Lovely to be with",
    linkedinUrl: "",
    portfolioUrl: "https://intellectual-rule-409016.framer.app/",
    videoUrl: video("1yNHzc09_o5m_csuRuxcwNcK_DpU7kWm6"),
  },
  {
    name: "Wakwe Stephanie Ada-Ogor",
    imageUrl: photo("1pohSTUYNu1s95EA-xTqL7QAqXGi0YX9C"),
    bio: "I’m an AI Content Creator and Digital Marketer passionate about transforming ideas into captivating visual stories. I create AI-powered videos, images, and digital experiences that blend creativity, storytelling, and modern technology to help brands stand out.",
    linkedinUrl: "https://www.linkedin.com/in/stephanie-ada-ogor-wakwe-97767723b",
    portfolioUrl: "https://wakweadaogorstephanie.netlify.app/",
    videoUrl: video("1S8jbuKHrBmmtV9t7yVVLyQ6uoTliDw0U"),
  },
  {
    name: "Abasianam Essien",
    imageUrl: photo("1nw5NouJQdwSpprPrhEl0TOzjI7Ow_0B0"),
    bio: "I am Abasianam, a nurse by profession and entrepreneur at heart.\n\nAs the founder of Lunes scent, I create long-lasting fragrances that help people show up with confidence.\n\nI’m also the voice behind Anam’s health talks, where I simplify health for everyday people.",
    linkedinUrl: "",
    portfolioUrl: "https://drive.google.com/drive/folders/1KQcOC-7FX1OaIpS_ddzJTQiOK6U7yi0q",
    videoUrl: video("1ZAzFnQXOBRBov4jwYjHng5B5wp3woMtU"),
  },
  {
    name: "Janet Aklah",
    imageUrl: photo("1IV9QhfkGOvXAoct0pXZEFOvxpBBJGTj6"),
    bio: "Hi, I’m Janet Aklah, a UGC and content creator passionate about creating authentic, engaging, and scroll-stopping content for brands. I combine storytelling, creativity, and AI-powered tools to turn products and ideas into relatable content that connects with audiences and drives action.\n\nI create short-form videos, product demonstrations, testimonials, lifestyle content, and social media ads designed to feel natural while helping brands stand out online.",
    linkedinUrl: "https://www.linkedin.com/in/janet-aklah",
    portfolioUrl: "https://janetaklah.framer.website/",
    videoUrl: video("1pcppPhVdS7yNMOTUrlZuH9lAMoQN4CKm"),
  },
  {
    name: "Ekpang Josephine Benyin",
    imageUrl: photo("1JpMPHXmdJ_Yr31IJoZpTxFQJMhUYzX05"),
    bio: "My name is Josephine Ekpang and I'm an Author and ghostwriter. I love to learn new things because it growth is one thing that shouldn't be permanent.",
    linkedinUrl: "",
    portfolioUrl: "https://www.instagram.com/joeyekpang",
    videoUrl: video("1UKr-w3td8IVII1fSbWvcjJBDpLorDFEt"),
  },
  {
    name: "Chris Ojore Austin",
    imageUrl: photo("1xpp44hmNAgqkx6RUsXIbZuJLMihLM0_3"),
    bio: "I'm a senior frontend developer looking to explore the various field of AI",
    linkedinUrl: "https://linkedin.com/in/ojore-chris",
    portfolioUrl: "https://dev.creasedigital.com",
    videoUrl: video("1BLrJ0jczMXqRP-J90_8RwKbagkEx-HOn"),
  },
  {
    name: "Adebayo Olayinka",
    imageUrl: photo("1b8CSkhPUuNcDPLW5o3iF6SPgTtQ4SGpK"),
    bio: "I love AI",
    linkedinUrl: "https://www.linkedin.com/in/olayinka-adebayo-5228a6357/",
    portfolioUrl: "https://different-pineapples-438405.framer.app/",
    videoUrl: video("11I8Bd56ZLMKQNZt7VOfvNahDABEQ7Ihe"),
  },
  {
    name: "Mbamala Chinyere Jessica",
    imageUrl: photo("13_pnkxYwscHzQMrO-uNBEwBUyDtMflPR"),
    bio: "I am Mbamala Jessica, a Christian lady who is a graduate in Biochemistry. I create health contents and gospel cartoons, I am passionate about creating engaging visual content, advertising, and inspiring others through my work.",
    linkedinUrl: "",
    portfolioUrl: "",
    videoUrl: video("1Wxc2Va-w32YAYo-z2DQ9cAEUm6qbd3eH"),
  },
  {
    name: "Olisadebe Samuel",
    imageUrl: photo("1RX_d5daUU_AhBuJpSURw_xyVuqudSy1Z"),
    bio: "I am an AI creative producer",
    linkedinUrl: "https://www.linkedin.com/in/samuel-olisadebe-a59b171b0",
    portfolioUrl: "https://samuelaiproducer.lovable.app",
    videoUrl: video("1Z4P2G92rH8p-WXZCedjpanyhrHlY67B5"),
  },
];

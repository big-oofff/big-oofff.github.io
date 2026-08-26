/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thomas's Portfolio",
  description:
    "Thomas Xiao's personal site for math, code, research, and projects.",
  og: {
    title: "Thomas Xiao Portfolio",
    type: "website",
    url: "https://thomasxiao.org/",
  },
};

//Home Page
const greeting = {
  title: "Thomas Xiao",
  logo_name: "ThomasXiao",
  nickname: "肖舜齐",
  subTitle:
    "Hi, I'm Thomas! I study applied math at Carnegie Mellon and enjoy research, coding projects, and interesting problems.",
  resumeLink: "/Thomas-Xiao-Resume.pdf",
  resume: "/Thomas-Xiao-Resume.pdf",
  githubProfile: "https://github.com/big-oofff",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "GitHub",
    link: "https://github.com/big-oofff",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/thomas-xiao-30a285289/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/3Blue1Brown",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:thomasxi@andrew.cmu.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
];

const skills = {
  data: [
    {
      title: "Mathematics",
      fileName: "DataScienceImg",
      skills: [
        "- I like math most when it starts with a question I can't answer right away. Those questions often turn into research projects, competition models, or new things to build!",
        "- My HiMCM team earned an Honorable Mention, placing in the top 28% of 1,055 teams.",
        "- I also placed 2nd at both the USC SCMC Math Competition and CSULB Math Day at the Beach.",
      ],
      softwareSkills: [
        {
          skillName: "HiMCM",
          imageSrc: "himcm.png",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "M3",
          imageSrc: "m32.png",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "AMC",
          imageSrc: "amc.png",
          style: {
            backgroundcolor: "transparent",
          },
        },
        {
          skillName: "SMT",
          imageSrc: "smt.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "BMT",
          imageSrc: "bmt.png",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Programming",
      fileName: "DesignImg",
      skills: [
        "- I mostly use Python for research and data projects, usually with NumPy, pandas, and Matplotlib.",
        "- I helped run Beckman's Computer Science Club and taught algorithms and data structures to 15+ students.",
        "- I also like building things I can see and play with, including a real-time Desmos Bezier renderer and this site!",
        "- I have also competed in USACO, ACSL, and CALICO.",
      ],
      softwareSkills: [
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "material-icon-theme:matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "USACO",
          imageSrc: "usaco2.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GeoGebra",
          fontAwesomeClassname: "arcticons:geogebra",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Desmos",
          fontAwesomeClassname: "arcticons:desmos",
          style: {
            backgroundColor: "transparent",
            color: "#388C46",
          },
        },
        {
          skillName: "Maple",
          fontAwesomeClassname: "mdi:leaf-maple",
          style: {
            backgroundColor: "transparent",
            color: "#1851D6",
          },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "skill-icons:latex-light",
          style: {
            backgroundColor: "transparent",
            color: "#1851D6",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Overleaf",
          fontAwesomeClassname: "simple-icons:overleaf",
          style: {
            backgroundColor: "transparent",
            color: "#388C46",
          },
        },
        {
          skillName: "CALICO",
          imageSrc: "calico.png",
          style: {
            backgroundColor: "transparent",
            color: "#388C46",
          },
        },
      ],
    },
    {
      title: "Speech and Debate",
      fileName: "FullStackImg",
      skills: [
        "- I spent four years in Parliamentary and Lincoln-Douglas debate on the Southern California and national circuits.",
        "- Debate taught me how to turn a messy idea into a clear argument, explain it under pressure, and actually listen when someone pushes back.",
        "- I won 1st Place Speaker in Lincoln-Douglas Debate at the NSDA Stanford Invitational.",
        "- I was also the 2022 National Online Forensics Parliamentary Debate Champion and helped lead practice for 10+ teammates.",
      ],
      softwareSkills: [
        {
          skillName: "Parli",
          imageSrc: "parli2.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LD",
          imageSrc: "ld2.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CHSSA",
          imageSrc: "chssa2.png",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "OCDL",
          imageSrc: "ocdl.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NSDA",
          imageSrc: "nsda.png",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "TOC",
          imageSrc: "toc.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Stanford",
          imageSrc: "stanford.png",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Berkeley",
          imageSrc: "berk2.png",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/amogusss/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/secondbreakfest",
    },
    {
      siteName: "Hackthebox",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#07E843",
      },
    },
    //{
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },
      profileLink:
        "https://www.coursera.org/user/5b2fed2b9478e07a355d9d4e348692bd",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/secondbreakfest",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Carnegie Mellon University",
      subtitle: "B.S. in Mathematical Sciences",
      logo_path: "cmu.png",
      alt_name: "CMU",
      duration: "2026 - 2030",
      descriptions: [
        "Intended concentration: Computational and Applied Mathematics",
      ],
      website_link: "https://www.cmu.edu/",
    },
    {
      title: "Johns Hopkins University Center for Talented Youth",
      subtitle: "Multivariable Calculus",
      logo_path: "cty2.png",
      alt_name: "CTY",
      duration: "2024",
      descriptions: [
        "I spent summer 2024 working through multivariable calculus: vectors, partial derivatives, multiple integrals, and four long-term projects.",
      ],
      website_link: "https://cty.jhu.edu/",
    },
    {
      title: "Irvine Valley College",
      subtitle: "Precalculus and Linear Algebra",
      logo_path: "ivc2.png",
      alt_name: "IVC",
      duration: "2023 - 2025",
      descriptions: [
        "I took precalculus at IVC in summer 2023 to get ready for AP Calculus BC.",
        "I came back for linear algebra in fall 2024 and got especially interested in vector spaces, linear transformations, and matrix algebra.",
      ],
      website_link: "https://www.ivc.edu",
    },
    {
      title: "Arnold O. Beckman High School",
      subtitle: "High School Diploma",
      logo_path: "beckman.png",
      alt_name: "Beckman",
      duration: "2022 - 2026",
      descriptions: [
        "My high-school schedule leaned heavily STEM: AP Calculus BC, AP Physics 1, AP Statistics, and AP Computer Science Principles.",
      ],
      website_link: "https://beckman.tustin.k12.ca.us",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://coursera.org/share/a159db88e9b43c7aaaff0ad7aa04e467",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Python Data Structures",
      subtitle: "- Charles Severance",
      logo_path: "umich.png",
      certificate_link:
        "https://coursera.org/share/db7a7826d577893760ae797cd4951eed",
      alt_name: "python data structures",
      color_code: "#00000099",
    },
    {
      title: "Multivariable Calculus",
      subtitle: "- CTY",
      logo_path: "cty2.png",
      certificate_link:
        "https://drive.google.com/file/d/1BEFpYOt5nnFsYo185bMj8TqzdRRi9Grz/view?usp=sharing",
      alt_name: "CTY",
      color_code: "#ADD8E6",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteering",
  description: "upcoming!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Mathematics Educator",
          company: "A2 Admission Education",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "Dec 2024 - Present",
          location: "Irvine, CA, USA",
          description: "upcoming!",
          color: "#000000",
        },
        {
          title: "upcoming!",
          company: "upcoming! filler logo",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "upcoming!",
          location: "Irvine, CA, USA",
          description: "upcoming!",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Things I've Built and Researched",
  description:
    "A mix of papers, coding projects, and experiments that started with questions I wanted to chase. Click one to see the code, figures, or write-up!",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "A Few More Things",
  description:
    "Smaller projects I made for school, competitions, or just because they sounded fun!",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Desmos Bezier Renderer",
      name: "Desmos Bezier Renderer",
      createdAt: "2025-03-21",
      description:
        "A small Desmos integration that renders Bezier curves in real time for animations and dynamic graphs. Built on Junferno's open-source work.",
      url:
        "https://drive.google.com/file/d/1ohmnOF_5ZFarlQ7NXqltwmpqgvld8Iv2/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Say Hello",
    profile_image_path: "pfp2.png",
    description:
      "Hi, I'm Thomas! I'm studying Applied Mathematics at Carnegie Mellon. I enjoy moving between math problems, research questions, and coding projects, especially when I can turn an idea into something clear and useful. I've worked with climate data, researched board games, built animations in Desmos, taught programming, tutored math, and competed in debate. If you want to talk about a project or just say hi, email is the best way to reach me!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Irvine, CA",
    locality: "Irvine",
    country: "USA",
    region: "California",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Irvine,+CA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

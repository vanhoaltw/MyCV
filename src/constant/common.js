import { ReactComponent as IconSun } from "../asset/icons/sun.svg";
import { ReactComponent as IconMoon } from "../asset/icons/moon.svg";

export const ADMIN = {
  AVATAR: "https://i.ibb.co/5KVJ6rQ/62f5138d7a1bb745ee0a.jpg",
  VIDEO_BACKGROUND:
    "https://drive.google.com/file/d/1LTZ31QtY2e6_xvfqucyQRMAT_pp1oYIb/view?usp=sharing",
  NULL_AVATAR: "",
  NAME: "userName",
  slogan: ["about-slogan", "slogan1", "slogan2", "slogan3"],
  ADDRESS: "about-address-content",
  BIRTHDAY: "26/06/2001",
  EXPERIENT: true,
  EMAIL: "vanhoaltw@gmail.com",
  PHONE: "0778699653",
  EDUCATION: {
    school: "about-name-school",
    image:
      "https://haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Su-Pham-Ky-Thuat-TP-Ho-Chi-Minh-HCMUTE.png",
    year: "2019 - 2023",
    major: "about-major-ecomerce",
    subject: [
      "about-subject-oop",
      "about-subject-web",
      "about-subject-database",
    ],
  },
  RESUME: {
    activity: {
      title: "resume-activity",
      content: [
        {
          name: "Line logistic",
          time: "8/2021 - 1/2022",
          description:
            "Take the task from the superiors down the trade and coordinate with everyone to complete it. Plan to post content for logistic fanpage, write content to post on fanpage",
          company: "HCMUTE",
          role: "Staff content",
          skill: "Teamwork, manager social, content, design, communicate",
        },
        {
          name: "Programming Contest",
          time: "9/2021",
          company: "HCMUTE",
          role: "",
          description:
            "Programming competition on C++ language organized by the School of Technical Education.",
          skill: "C++",
        },
      ],
    },
    education: {
      title: "resume-education",
      content: [
        {
          name: "HCMC University of Technology and Education",
          time: "2019 - Present",
          role: "Student",
          description: "E-commerce",
        },
      ],
    },
    work: {
      title: "resume-experience",
      content: [
        {
          name: "Content Contributor",
          time: "8/2019",
          description:
            "Search for content, edit images according to assigned KPIs for each day. Manage the company's fanpage, pull interaction for the company's fanpage. Follow and update current trends to write content for fanpage.",
          company: "FJNTECH",
          role: "Collaborators Content",
          skill:
            "Seeding, manager social, google trend, content creator, design",
            },
        {
          name: "Hodace Network",
          time: "6/2020 - 1/2021",
          company: "Hodace",
          role: "Intern Frontend developer",
          description:
            "This is a startup company, so the number of employees is quite small, so I am in charge of developing the entire real estate website interface based on figma, coordinating with the backend team to make the website functional.",
          skill:
            "NextJS, typescript, Figma. Working with Scrum/Agile (Trello) model, reporting skills and weekly meetings",
          tech: "Nextjs, Redux, Axios, ChartJS, React-bootstrap",
          link: "https://bds-webdata-dev.service.makefamousapp.com/bat-dong-san",
        },
        {
          name: "Finhome",
          time: "10/2020 - 1/2021",
          company: "Make Famous App ",
          role: "Intern Frontend developer",
          description:
            "Real estate buying and selling website, customers can see the list of real estate being sold, near you, cheap, ... and can also filter real estate by many different criteria. Users can post and manage posted posts.",
          skill:
            "Slack, Github, Jira, Nextjs, Redux, Typescript, Scss, Antd,  Figma, Seo",
          tech: "NextJS, Axios, Swipper, Antd, ChartJS",
          link: "https://fihome.vn/",
        },
      ],
    },
  },
};

export const THEMES = {
  light: {
    code: "light",
    name: "Nen sang",
    icon: <IconSun />,
    styles: {
      title: "#173b6c",
      text:"#333333",
      bg: "#fff",
      border:"#173b6c",
      shadow:"0 0 24px 0 rgba(0, 0, 0, 0.12)",
      bgOpacity:'rgba(255, 255, 255, 0.9)'
    },
  },
  dark: {
    code: "dark",
    name: "Nen toi",
    icon: <IconMoon />,
    styles: {
      title:"#F05454",
      text: "#DDDDDD",
      bg: "#222831",
      border:"#F05454",
      shadow:"0 0 24px 0 rgba(253, 253, 253, 0.05)",
      bgOpacity:'rgba(45, 52, 54,0.9)'
    },
  },
};

export const LANGUAGES = [
  { lg: "en", name: "EN" },
  { lg: "vi", name: "VN" },
];

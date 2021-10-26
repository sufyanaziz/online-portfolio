// Sipesat
import SIPESAT_LOGIN from "./assets/si_pesat_login.png";
import SIPESAT_DASHBOARD from "./assets/dashboard.png";
import SIPESAT_FORM from "./assets/form.png";
// docpro
import DOCPRO from "./assets/docpro_login.png";
// healthylenial
import HealthyLenialLogin from "./assets/healthyLenialLogin.png";
import HealthyLenialReport from "./assets/healthyLenialReport.png";
import HealthyLenialHome from "./assets/healthyLenialHome.png";
import HealthyLenialList from "./assets/healthyLenialList.png";

export interface INProjectsData {
  title: string;
  webName: string;
  viewImg: string;
  dateWork: string;
  onClick: (setOpenDialog: any) => any;
  images: string[];
  desc: string;
  link: string;
  linkGit: string;
}

const projectDetail = [
  {
    title: "Web Developer at Uhamka - Intern",
    webName: "Sistem Pengajuan Surat",
    viewImg: SIPESAT_LOGIN,
    dateWork: "1 Jan 2021 - 1 Sep 2021",
    onClick: (setOpenDialog: any) => setOpenDialog(true),
    images: [SIPESAT_LOGIN, SIPESAT_DASHBOARD, SIPESAT_FORM],
    desc: "Create aplication for sistem pengajuan surat with React.js and Node.js",
    link: "",
    linkGit: "",
  },
  {
    title: "Web Developer - Freelance",
    webName: "Docpro",
    viewImg: DOCPRO,
    dateWork: "1 Jul 2020 - 1 Sep 2020",
    onClick: (setOpenDialog: any) => setOpenDialog(true),
    images: [DOCPRO],
    desc: "Frontend - React.js\n-Maintance Web Apointment docpro\n- Create a few features on the website docpro\nBackend - Node.js\n- Create API Web Apointmen docpro",
    link: "https://docpro-app.herokuapp.com/login",
    linkGit: "",
  },
  {
    title: "Tugas Kuliah Implementasi Proyek",
    webName: "HealthyLenial",
    viewImg: HealthyLenialLogin,
    dateWork: "17 Dec 2020",
    onClick: (setOpenDialog: any) => setOpenDialog(true),
    images: [
      HealthyLenialLogin,
      HealthyLenialHome,
      HealthyLenialList,
      HealthyLenialReport,
    ],
    desc: "create a website for college assignments with react.js and node.js",
    link: "https://app-healthylenial.herokuapp.com/",
    linkGit: "https://github.com/sufyanaziz/e-healthylenial",
  },
];

export { projectDetail };

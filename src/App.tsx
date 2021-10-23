import "./App.css";

import image from "./assets/index";

import Layout from "./components/Layout/layout";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Quote from "./components/Quote/quote";
import Projects from "./components/Projects/projects";

import Footer from "./components/Footer/footer";

import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";

const App = () => {
  const matches = useMediaQuery("(min-width: 689px)");

  useEffect(() => {
    window.alert("HI, welcome to my online portfolio");
  }, []);

  return (
    <Layout>
      <Header
        name="Achmad Sufyan Aziz"
        image={image}
        title="Junior Frontend Developer"
      />
      <Navbar />
      <Intro />
      <Skills />
      <Quote />
      <Projects />
      <Footer matches={matches} />
    </Layout>
  );
};

export default App;

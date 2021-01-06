import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";

import Header from "./shared/header";
import Footer from "./shared/footer";
import { ConfigContext } from "../contexts/ConfigContext";

import 'simple-line-icons/css/simple-line-icons.css';
import "../assets/scss/main.scss";
import styles from "./layout.module.scss";

const Layout = ({ location, title, description, wided, children }) => {
  const context = useContext(ConfigContext);

  const container = wided
    ? styles.containerLayout
    : "container " + styles.containerLayout;

  return (
    <>
      <Helmet>
        <title>
          {title ? `${title} | AlexLab - Frontend Developer` : context.title}
        </title>
        <meta
          name="description"
          content={description || "Alejandro Vivas - Frontend Developer."}
        />
      </Helmet>
      <Header />

      <main className={container}>
        <div className={styles.content}>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;

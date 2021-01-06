import React from 'react';
import { Helmet } from 'react-helmet-async';


import Header from './shared/header';
import Footer from './shared/footer';


import '../assets/scss/main.scss'
import styles from './layout.module.scss';


export const ConfigContext = React.createContext();

const Layout = ({location, title, description, wided, children}) => {


    const siteContext = {
        title: "Bienvenido | AlexLab - Frontend Developer",
        description: "Alejandro Vivas - Frontend Developer.",
        author: "alexsegen",
        twitter: "twitter.com/pixelagil",
        linkedin: "https://www.linkedin.com/in/alejandro-vivas/",
        github : "github.com/alexsegen"
    }

    const container = wided ? styles.containerLayout : 'container ' + styles.containerLayout;
    
    return ( 
        <>
        <ConfigContext.Provider value={siteContext}>
            <Helmet>
                <title>{ title ? title + " | AlexLab - Frontend Developer" : "Bienvenido | AlexLab - Frontend Developer" }</title>
                <meta name = "description" content={ description || "Alejandro Vivas - Frontend Developer." } />
            </Helmet>
            <Header/>

            <main className={container}>
                <div className={styles.content}>
                    {children}
                </div>
                <Footer/>
            </main>

        </ConfigContext.Provider>
        </>
     );
}
 
export default Layout;
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/home/hero';
import About from '../components/home/about';
import Features from '../components/home/features';
import ContactBar from '../components/shared/contact-bar';

const Home = () => {

    return ( 
        <Layout wided={true}>
            <Hero/>
            <About/>
            <Features/>
            <ContactBar 
            isDark={true}
            btnText="Escríbeme" 
            contentText="¿Tienes una idea para tu nuevo proyecto?" 
            contentSubText="Yo puedo ayudarte a hacerlo realidad."/>
        </Layout>
     );
}
 
export default Home;
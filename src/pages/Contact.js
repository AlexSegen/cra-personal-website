import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { ConfigContext } from '../contexts/ConfigContext';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {

  
  const iconStyles = {
    width: "20px",
    height: "20px",
    marginRight: "5px"
  }
  
  const context = useContext(ConfigContext);
  
  return ( 
        <Layout title="Contactar">
        <div className="ui__page">
            <div className="page__header">
              <h1>Contactar</h1>
              <hr/>
            </div>
            <div className="page__content">
              <div className="page__content-description">
                  <div className="row">
                      <div className="col-sm-6">
                          <div className="mb-2">
                            <p className=" wow fadeInUp">Escríbeme para compartir ideas o soluciones que pueda aportar.</p>
                            <ContactForm/>
                          </div>
                      </div>
                      <div className="col-sm-6">
                          <div>
                              <p className=" wow fadeInUp">Encuéntrame también en</p>

                              <ul className=" wow fadeInUp">
                                    <li className="mb-2">
                                      <a href={context.twitter} target="_blank" rel="noopener noreferrer">}
                                        <img src="/img/social/twitter-dark.png" alt="Twitter" style={iconStyles} /> Pixelagil
                                      </a>
                                    </li>
                                    <li className="mb-2">
                                      <a href={context.github} target="_blank" rel="noopener noreferrer">
                                        <img src="/img/social/github-dark.png" alt="Github" style={iconStyles} /> AlexSegen
                                      </a>
                                    </li>
                                    <li className="mb-2">
                                      <a href={context.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src="/img/social/linkedin-dark.png" alt="Linkedin" style={iconStyles} /> Alejandro-Vivas
                                      </a>
                                    </li>
                              </ul>

                              <h4 className="mt-5  wow fadeInUp">¡Responderé <br/> lo antes posible! 🚀</h4>

                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </Layout>
     );
}
 
export default ContactPage;
import React from 'react'
import Image from './Image';

import styles from './portfolio.module.scss';

const PortfolioItem = ({photo, thumb, name, description, category, url, published}) => {

    const validateURL = str => {
       return  str ? str.toString().trim().length > 0 : null;
    }

    return (
        <div href={url} className={styles.p__item + " wow fadeInUp"}>
            <div className={styles.p__item_overlay}>
            
                <div>
                    <a href={photo} className="btn btn-light" target="_blank" rel="noopener noreferrer">Previsualizar</a>
                    {
                        validateURL(url) && <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">Visitar Sitio</a>
                    }
                    
                </div>
            </div>
            <Image thumb={thumb} name={name}/>
            <div className={styles.p__item_caption}>
                <h4 className={styles.p__item_title}>{name}</h4>
                <p className={styles.p__item_category}>{category}</p>
            </div>
        </div>
    )

}

export default PortfolioItem;
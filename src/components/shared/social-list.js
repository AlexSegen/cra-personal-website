import React, { useContext } from 'react';
import { ConfigContext } from '../../contexts/ConfigContext';
import styles from './social-list.module.scss';

const SocialItem = ({ url, label, icon }) => {

    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={"/img/social/" + icon} alt={label}/>
            </a>
        </li>
    )
}

const SocialList = () => {

    const context = useContext(ConfigContext);

    return (
        <ul className={styles.social_list}>
            <SocialItem url={context.twitter} label="Twitter" icon="twitter-dark.png" />
            <SocialItem url={context.github} label="Github" icon="github-dark.png" />
            <SocialItem url={context.linkedin} label="Linkedin" icon="linkedin-dark.png" />
        </ul>
    )

}

export default SocialList;

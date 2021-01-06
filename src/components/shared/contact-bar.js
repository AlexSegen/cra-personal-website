import React from 'react';
import { Link } from 'react-router-dom';
import styles from './contact-bar.module.scss';

const ContactBar = props => {
    const { btnText, contentText, contentSubText, isDark } = props;

    const classes = styles.cb__wrapper;
    const dark = isDark ? styles.cb__wrapper__isDark : ''

    return (
        <div className={classes + ' ' + dark}>
            <div className={styles.cb__wrapper_content  + " wow fadeInUp"}>
                <h2>{ contentText }</h2>
                {
                    contentSubText ? <p>{ contentSubText }</p> : null
                }
            </div>
            <div className={styles.cb__wrapper_action  + " wow fadeInUp"}>
                <Link className={'btn btn-secondary ' + styles.cta} to="/contact">{ btnText }</Link>
            </div>
        </div>
    )
}

export default ContactBar;
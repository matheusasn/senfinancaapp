import React from 'react'
import styles from './Footer.module.css' 

function Footer(props) {
    let linkInstaSenseData = "https://www.instagram.com/sensedatabr/"
    let linkYoutubeSenseData = "https://www.youtube.com/c/SenseData"
    let linkLinkedinSenseData = "https://www.linkedin.com/company/sensedata/"
    return(
        <footer className={styles.footer}>
            <div className={styles.body_footer}>
                <div>
                    <p> SenFinaça - SenseData &copy; 2022</p>
                </div>
                <div className={styles.social_midia}>
                    <a href={linkInstaSenseData}>
                        <img alt="instagram" src={require('../../assets/socialmidia/img_instagram.png')} className={styles.img_social_midia}/>
                    </a>

                    <a href={linkYoutubeSenseData}>
                        <img alt="youtube" src={require('../../assets/socialmidia/img_youtube.png')} className={styles.img_social_midia}/>
                    </a>

                    <a href={linkLinkedinSenseData}>
                        <img alt="linkedin" src={require('../../assets/socialmidia/img_linkedin.png')} className={styles.img_social_midia}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
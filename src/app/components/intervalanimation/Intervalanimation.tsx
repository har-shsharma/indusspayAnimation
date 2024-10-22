'use client';
import React, { useEffect, useState } from 'react'
import styles from './Intervalanimation.module.css';
import Image from 'next/image';

const Intervalanimation: React.FC = () => {

    const [state1, setState1] = useState<boolean>(false);
    const [state2, setState2] = useState<boolean>(false);
    const [state3, setState3] = useState<boolean>(false);

    useEffect(() => {
        const states = [setState1, setState2, setState3];
        let currentIndex = 0;
        const updateStates = () => {
            states.forEach(setState => setState(false));
            states[currentIndex](true);
            currentIndex = (currentIndex + 1) % states.length;
        };
        const intervalId = setInterval(updateStates, 3000);
        updateStates();
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={styles.mainContainer}>

            <div className={styles.textContainer}>
                <div className={styles.textHeading}>Choose us</div>
                <div className={styles.subHeading}>Why partner with Indusspay?</div>
            </div>

            <div className={styles.animationContainer}>
                <div className={styles.animationTextContainer}>
                    <div className={styles.animationText1Container}>


                        <div className={styles.loaderContainer}>
                            <div className={styles.text1Icon}></div>
                            <svg width="64" height="64" className={state1 ? styles.loader : styles.inactive}>
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="27"
                                    stroke="#7333A8"
                                    strokeWidth="5"
                                    fill="none"
                                />
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="27"
                                    stroke="#FCE0E0"
                                    strokeWidth="5"
                                    fill="none"
                                    strokeDasharray="169.646"
                                    strokeDashoffset="169.646"
                                    className="loader-circle"
                                />
                            </svg>
                        </div>
                        <div className={state1 ? styles.animationText1 : styles.animationTextInactive}>Earn Generously</div>
                    </div>

                    <div className={styles.animationText2Container}>
                        <div className={styles.loaderContainer}>
                            <div className={styles.text2Icon}></div>
                            <svg width="64" height="64" className={state2 ? styles.loader : styles.inactive}>
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="27"
                                    stroke="#19BF6A"
                                    strokeWidth="5"
                                    fill="none"
                                />
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="27"
                                    stroke="#FCE0E0"
                                    strokeWidth="5"
                                    fill="none"
                                    strokeDasharray="169.646"
                                    strokeDashoffset="169.646"
                                    className="loader-circle"
                                />
                            </svg>
                        </div>
                        <div className={state2 ? styles.animationText2 : styles.animationTextInactive}>Empower Businesses</div>
                    </div>

                    <div className={styles.animationText3Container}>
                        <div className={styles.loaderContainer}>
                            <div className={styles.text3Icon}></div>
                            <svg width="64" height="64" className={state3 ? styles.loader : styles.inactive}>
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="27"
                                    stroke="#ED4245"
                                    strokeWidth="5"
                                    fill="none"
                                />
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="27"
                                    stroke="#FCE0E0"
                                    strokeWidth="5"
                                    fill="none"
                                    strokeDasharray="169.646"
                                    strokeDashoffset="169.646"
                                    className="loader-circle"
                                />
                            </svg>
                        </div>
                        <div className={state3 ? styles.animationText3 : styles.animationTextInactive}>Dedicated Support</div>
                    </div>
                </div>

                {state1 && <div className={styles.animationImageContainer}>Get a certain share for every successful<br /> transaction made by your referred merchants.<br /> The more you refer, the more you earn.
                    <Image className={styles.animationImage} src="/images/Layer_1.png" alt="emote" width={373.79} height={298} />
                </div>}
                {state2 && <div className={styles.animationImageContainer2}>Help businesses thrive with Indusspay's<br /> cutting-edge fintech solutions, and be a part <br />of their success story.
                    <Image className={styles.animationImage2} src="/images/Layer_2.png" alt="emote" width={450} height={300} />
                </div>}
                {state3 && <div className={styles.animationImageContainer3}>Count on our support team for guidance and <br />assistance throughout your partnership journey.
                    <Image className={styles.animationImage3} src="/images/Layer_3.png" alt="emote" width={373.79} height={298} />
                </div>}
            </div>

        </div>
    )
};

export default Intervalanimation;
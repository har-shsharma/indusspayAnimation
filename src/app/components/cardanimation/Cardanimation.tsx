"use client";
import React, { ElementRef, useEffect, useRef } from 'react'
import styles from "./Cardanimation.module.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const Cardanimation: React.FC = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const card1Ref = useRef<HTMLDivElement | null>(null);
    const card2Ref = useRef<HTMLDivElement | null>(null);
    const card3Ref = useRef<HTMLDivElement | null>(null);
    

    useEffect(() => {
        const pinAnimation=gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                scroller: "body",
                start: "top -15%",
                end: "top -105%",
                pin: true
            }
        });

        const card1Animation=gsap.to(card1Ref.current,{
            y:-1000,
            rotate:"60deg",
            scrollTrigger:{
                trigger:card1Ref.current,
                scroller:"body",
                start:"top 32%",
                end:"top -25%",
                scrub:1
            }
        });

        const card2Animation=gsap.to(card2Ref.current,{
            y:-1000,
            rotate:"60deg",
            scrollTrigger:{
                trigger:card2Ref.current,
                scroller:"body",
                start:"top 2%",
                end:"top -55%",
                scrub:1
            }
        });

        const card3Animation=gsap.to(card3Ref.current,{
            y:-1000,
            rotate:"60deg",
            scrollTrigger:{
                trigger:card3Ref.current,
                scroller:"body",
                start:"top -28%",
                end:"top -85%",
                scrub:1
            }
        });

        const card1OpacityAnimation=gsap.to(card1Ref.current,{
            opacity:0,
            scrollTrigger:{
                trigger:card1Ref.current,
                scroller:"body",
                start:"top -25%",
                scrub:1
            }
        });

        const card2OpacityAnimation=gsap.to(card2Ref.current,{
            opacity:0,
            scrollTrigger:{
                trigger:card2Ref.current,
                scroller:"body",
                start:"top -55%",
                scrub:1
            }
        });

        const card3OpacityAnimation=gsap.to(card3Ref.current,{
            opacity:0,
            scrollTrigger:{
                trigger:card3Ref.current,
                scroller:"body",
                start:"top -80%",
                scrub:1
            }
        });
       


        return ()=>{
            pinAnimation.kill();
            card1Animation.kill();
            card2Animation.kill();
            card3Animation.kill();
            card1OpacityAnimation.kill();
            card2OpacityAnimation.kill();
            card3OpacityAnimation.kill();
        }
    }, []);

    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <div className={styles.textContainer}>
                <div className={styles.textHeading}>Our Services</div>
                <div className={styles.textSubHeading}>Elevating Your Financial Journey</div>
            </div>
            <div className={styles.cardsContainer}>

                <div className={styles.card1} ref={card1Ref}>
                    <div className={styles.cardsInnerContainer1}>
                        <div className={styles.cardImageContainer}>
                            <Image className={styles.firstCardImage2} src="/images/firstcardimage2.png" alt="image" width={262} height={219} />
                            <Image className={styles.firstCardImage1} src="/images/firstcardimage1.png" alt="image" width={230} height={123} />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <div className={styles.cardTextHeading}>Payment Processing</div>
                            <div className={styles.cardTextSubHeading}>We offer a wide range of payment processing solutions, including credit/debit card processing, mobile payments, e-wallet integration, and more. Our platform supports multiple currencies, making it easy for businesses to expand globally.</div>
                        </div>
                    </div>
                </div>

                <div className={styles.card2} ref={card2Ref}>
                    <div className={styles.cardsInnerContainer2}>
                        <div className={styles.cardImageContainer}>
                            <Image className={styles.secondCardImage2} src="/images/secondcardimage1.png" alt="image" width={262} height={219} />
                            <Image className={styles.secondCardImage1} src="/images/secondcardimage2.png" alt="image" width={198} height={57} />
                            <Image className={styles.secondCardImage3} src="/images/secondcardimage3.png" alt="image" width={150} height={150} />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <div className={styles.cardTextHeading}>Online Payment Gateway</div>
                            <div className={styles.cardTextSubHeading}>Our secure online payment gateway enables businesses to accept payments on their websites seamlessly. With real-time transaction tracking and comprehensive reporting, our clients stay in control of their payment ecosystem.</div>
                        </div>
                    </div>
                </div>

                <div className={styles.card3} ref={card3Ref}>
                    <div className={styles.cardsInnerContainer3}>
                        <div className={styles.cardImageContainer}>
                            <Image className={styles.thirdCardImage1} src="/images/thirdcardimage1.png" alt="image" width={262} height={219} />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <div className={styles.cardTextHeading}>Accounts Merchants</div>
                            <div className={styles.cardTextSubHeading}>We facilitate the establishment of merchant accounts, allowing businesses to accept card payments and manage funds with ease.</div>
                        </div>
                    </div>
                </div>

                <div className={styles.card4} >
                    <div className={styles.cardsInnerContainer4}>
                        <div className={styles.cardImageContainer}>
                            <Image className={styles.fourthCardImage1} src="/images/fourthcardimage1.png" alt="image" width={262} height={219} />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <div className={styles.cardTextHeading}>Payment Security Solutions</div>
                            <div className={styles.cardTextSubHeading}>Our cutting-edge security solutions protect businesses from fraudulent activities and ensure data privacy, building trust among their customers. </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cardanimation

'use client';
import React ,{useEffect,useRef} from 'react'
import styles from './Pinanimation.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Pinanimation:React.FC= ()=> {

const containerRef = useRef<HTMLDivElement | null>(null);

useEffect(()=>{
    const pinAnimation=gsap.to(containerRef.current,{
        scrollTrigger:{
            trigger:containerRef.current,
            scroller:"body",
            start:"top 10%",
            end:"top -100%",
            pin:true
        }
    })

    return ()=>{
        pinAnimation.kill();
    }

},[]);

  return (
    <div className={styles.mainContainer} ref={containerRef}>
        <div className={styles.innerMainContainer}>

      <div className={styles.textHeader}>
        <div className={styles.mainTextHeading}>Partner’s Journey</div>
        <div className={styles.subTextHeading}>Path to Becoming a Partner</div>
      </div>

      <div className={styles.animationOuterContainer}>
        <div className={styles.animationTextContainer}>

            <div className={styles.animationTextItem1}>
                <div className={styles.animationTextHeading}>Joining the Program</div>
                <div className={styles.animationTextContent}>To become an Indusspay Partner, individuals or businesses need to sign up for the program through the Indusspay website.</div>
                <div className={styles.animationTextContent}>This process is simple and typically involves providing basic information, agreeing to terms and conditions, and getting approved.</div>
            </div>

            <div className={styles.animationTextItem2}>
                <div className={styles.animationTextHeading}>Access to Resources</div>
                <div className={styles.animationTextContent}>Once approved, partners gain access to a suite of resources, including a dedicated dashboard,product demonstration, training guides, and dedicated support channels.</div>
                <div className={styles.animationTextContent}>These resources are essential for partners to understand Indusspay's products and services thoroughly.</div>
            </div>

            <div className={styles.animationTextItem3}>
                <div className={styles.animationTextHeading}>Acquiring Merchants</div>
                <div className={styles.animationTextContent}>Partners leverage their network, expertise, and marketing skills to acquire new merchants.</div>
                <div className={styles.animationTextContent}>They introduce merchants to Indusspay's payment solutions, demonstrating the benefits and advantages of using Indusspay's fintech products.</div>
            </div>

            <div className={styles.animationTextItem4}>
                <div className={styles.animationTextHeading}>Onboarding Merchants</div>
                <div className={styles.animationTextContent}>Partners play a vital role in assisting merchants through the onboarding process.</div>
                <div className={styles.animationTextContent}>They help merchants set up their accounts, integrate payment solutions, and ensure a seamless experience.</div>
            </div>

            <div className={styles.animationTextItem5}>
                <div className={styles.animationTextHeading}>Earning Commissions</div>
                <div className={styles.animationTextContent}>As merchants onboard and start using Indusspay's services, partners earn commissions on the transactions processed through the platform.</div>
                <div className={styles.animationTextContent}>The commission structure may vary based on the partnership agreement and the type of merchants brought on board.</div>
            </div>

            <div className={styles.animationTextItem6}>
                <div className={styles.animationTextHeading}>Ongoing Support</div>
                <div className={styles.animationTextContent}>Indusspay provides continuous support to partners, offering assistance with any queries or challenges they may encounter.</div>
                <div className={styles.animationTextContent}>Partners can rely on Indusspay's expertise to address merchant needs effectively.</div>
            </div>

            <div className={styles.animationTextItem7}>
                <div className={styles.animationTextHeading}>Growth and Scaling</div>
                <div className={styles.animationTextContent}>Partners are encouraged to continue expanding their network and bringing in more merchants.</div>
                <div className={styles.animationTextContent}>With each new merchant, partners have the opportunity to increase their commission earnings.</div>
            </div>

        </div>
        <div className={styles.animationImageContainer}></div>

      </div>
      </div>
    </div>
  )
}

export default Pinanimation

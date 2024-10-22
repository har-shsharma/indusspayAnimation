// import Image from "next/image";
import styles from "./page.module.css";
import Intervalanimation from "./components/intervalanimation/Intervalanimation";
import Cardanimation from "./components/cardanimation/Cardanimation";
import Pinanimation from "./components/pinanimation/Pinanimation";

export default function Home() {
  return (
    <div className={styles.page}>
      <Intervalanimation/>
      <Cardanimation/>
      <Pinanimation/>
      <div className={styles.dummy}></div>
    </div>
  );
}

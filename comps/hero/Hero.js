import styles from "./Hero.module.css";
import Image from "next/image";
import img from "../../public/images/law30.jpg";
import Button from "../button/Button";

const Hero = () => {
  const img =
    "https://res.cloudinary.com/chrisware/image/upload/v1666810349/law30_puvvwe.jpg";

  const random = Math.floor(Math.random() * 49);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>
          48 Laws
          <br />
          <span>of Power</span>
        </h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.copy}>
            48 Laws of Power details the laws for attaining power in life,
            business, and more, and gives historical examples of each law in
            practice, as well as examples of those who do not respect these
            laws.
          </p>
          <div className={styles.btnContainer}>
            <Button href='/laws' text='All Laws' title='All Laws' />
            <Button
              href={`/laws/law${random}`}
              color='secondary'
              text='Random Law'
              title='Random Law'
            />
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src='https://res.cloudinary.com/chrisware/image/upload/v1666810349/law30_puvvwe.jpg'
            className={styles.img}
            width='1920'
            height='1280'
            layout='responsive'
            objectFit='cover'
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;

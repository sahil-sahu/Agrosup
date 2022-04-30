import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';
import Header from '../components/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

export default function Home() {

  let slidesNum = 1;

  const size = useWindowSize();

  if (size.width > 1000){
      slidesNum = 3;
  }else if (size.width > 600){
      slidesNum = 2;
  }

  const [isHovering, setIsHovered] = useState(true);
  const onMouseEnter = () => setIsHovered(false);
  const onMouseLeave = () => setIsHovered(true);

  return (
    <>
      <NextSeo
          title="AgroSup : A Web3 Farm produce MarketPlace"
          description="Cultivating a farm produce market of no monopoly. We are web 3.0 market for the direct relation of farmers to businesses."
        />
      <main>
        <Header></Header>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <h1>
              Cultivating a farm produce market of NO MONOPOLY
            </h1>
            <p>
              We are web 3.0 market for the direct relation of farmers to businesses.
            </p>
            <div className={styles.more}>
              <a href="#">
                KNOW <br />MORE
              </a>
            </div>
          </div>
          <div className={styles.heroImg}></div>
        </section>
        <section className={styles.benefits}>
          <div className={styles.benefitContainer}>
            <h2>
              <span>H</span>EALTHY <span>B</span>ENEFITS
            </h2>
            <Swiper
              slidesPerView={slidesNum}
              className={styles.benefitCards}
            >
              <SwiperSlide>
                <div className={isHovering ? (`${styles.benefitCard} ${styles.benefit1}`) : (`${styles.benefitCard}`)}>
                  <div className={styles.benefitTitle}>
                    <h4>Benefits for <div><span>F</span>ARMERS</div></h4>
                    <img src="/forCard1.svg" alt="" />
                  </div>
                  <ul>
                    <li>20% more revenue</li>
                    <li>one-stop-sale</li>
                    <li>Payment in 36 hours</li>
                    <li>Transparent weighing</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.benefitCard} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <div className={styles.benefitTitle}>
                    <h4>Convenience for <div><span>R</span>ETAILERS</div></h4>
                    <img src="/shop.svg" alt="" />
                  </div>
                  <ul>
                    <li>Competitive pricing</li>
                    <li>Doorstep delivery</li>
                    <li>High quality graded produce</li>
                    <li>Convenient & time savings</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.benefitCard}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <div className={styles.benefitTitle}>
                    <h4>Savings for<div><span>C</span>ONSUMERS</div></h4>
                    <img src="/forCard3.svg" alt="" />
                  </div>
                  <ul>
                    <li>Hygenically handled produce</li>
                    <li>100% traceable to farm - Improves fodd safety</li>
                    <li>Better quality</li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main> 
    </>
  )
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
    
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}


import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';
import Header from '../components/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';

export default function Home() {

  let slidesNum = 1;

  const size = useWindowSize();
  const year = new Date().getFullYear();

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
                    <li>25% more revenue</li>
                    <li>One-stop-sale</li>
                    <li>Payment in 36 hours</li>
                    <li>transparent weighing</li>
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
                    <li>No middle-men</li>
                    <li>Competitive price</li>
                    <li>High quality produce</li>
                    <li>Fresly delivered</li>
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
                    <li>15-20% less price</li>
                    <li>100% traceability</li>
                    <li>Hygienically handled</li>
                    <li>Better quality and food safety</li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className={styles.webhault}>
          <div className={styles.webhaultContainer}>
            <h3>
              The future of <span>Fresh Produce</span> supply chain
            </h3>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footContent}>
              <h6>
                Company
              </h6>
              <ul>
                <Link href={'about-us'}>
                  <li><a href={'about-us'}>About Us</a></li>
                </Link>
                <Link href={'about-us'} >
                  <li><a href={'about-us'} >Buy/Sell</a></li>
                </Link> 
                <Link href={'about-us'} >
                  <li><a href={'about-us'} >Subscribe</a></li>
                </Link>
                <Link href={'about-us'} >
                  <li><a href={'about-us'} >People</a></li>
                </Link>
                <Link href={'about-us'} >
                  <li><a href={'about-us'} >Parent Company</a></li>
                </Link>
              </ul>
            </div>
            <div className={styles.footContent}>
              <h6>
                Resources
              </h6>
              <ul>
                <Link href={'blogs'}>
                  <li><a href={'blogs'}>Blogs</a></li>
                </Link>
                <Link href={'about-us'} >
                  <li><a href={'about-us'} >FAQs</a></li>
                </Link> 
                <Link href={'about-us'} >
                  <li><a href={'about-us'} >Media</a></li>
                </Link>
                <Link href={'about-us'} >
                  <li><a href={'about-us'} >Reach Us</a></li>
                </Link>
              </ul>
            </div>
            <div className={styles.footContent}>
              <h6>
                Connect with us
              </h6>
              <ul className={styles.social} >
                  <li><a href={'about-us'}> <img src="social/fb.png" alt="Facebook" /> </a></li>
                  <li><a href={'about-us'} > <img src="social/twitter.png" alt="Twitter" /> </a></li>
                  <li><a href={'about-us'} > <img src="social/insta.png" alt="Instagram" /> </a></li>
                  <li><a href={'about-us'} > <img src="social/linkedin.png" alt="LinkedIn" /> </a></li>
              </ul>
            </div>
          </div>
          <ul className={styles.copyright}>
              <Link href={"yo"} >
                <li><a href="">Privacy Policy</a></li>
              </Link>
              <Link href={"yo"} >
                <li><a href="">Terms of Use</a></li>
              </Link>
              <Link href={"yo"} >
                <li><a href="">Refund Policy</a></li>
              </Link>
              <Link href={"yo"} >
                <li><a href="">@{year} ObsTackle Pvt. Ltd.</a></li>
              </Link>
          </ul>
        </footer>
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


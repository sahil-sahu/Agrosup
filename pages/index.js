import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';
import Header from '../components/header';

export default function Home() {
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
              Cultivating a farm produce market of NO MONOPLOY
            </h1>
            <p>
              We are web 3.0 market for the direct relation of farmers to businesses.
            </p>
          </div>
          <div className={styles.heroImg}></div>
        </section>
      </main> 
    </>
  )
}

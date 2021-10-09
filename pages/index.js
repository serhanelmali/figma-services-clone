import Head from "next/head";
import Footer from "../components/Footer";
import HeaderInfo from "../components/HeaderInfo";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
        <HeaderInfo />
      </header>
      <main>
        <Services />
      </main>
      <Subscribe />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import Header from "../components/header";
import Head from 'next/head'
export default function Home() {
  return (
     <Head>
      <title>Illusio</title>
    </Head>
    <>
      <Nav />
      <Header />
      <Footer />
    </>
  );
}

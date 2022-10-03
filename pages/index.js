import Head from "next/head";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Header from "./components/header";
import Download from "./components/Download";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Footer />
    </>
  );
}

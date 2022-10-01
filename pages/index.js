import Head from "next/head";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

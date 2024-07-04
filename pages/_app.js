import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

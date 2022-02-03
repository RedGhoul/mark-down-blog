import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Header>Somethings</Header>
          <main className="container">
              <Component {...pageProps} />
          </main>
          <Footer></Footer>
      </>
  );
}

export default MyApp

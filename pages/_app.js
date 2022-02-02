import '../styles/globals.css'
import Header from "../Components/Header";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Header></Header>
          <main className="container">
              <Component {...pageProps} />
          </main>
      </>
  );
}

export default MyApp

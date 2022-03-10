import "../styles/globals.css";
import "antd/dist/antd.css";
import Gnb from "./gnb";
import Footer from "./footer";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gnb />
      <div style={{ paddingTop: "80px" }}></div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

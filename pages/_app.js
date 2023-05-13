import "../public/Global.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import Nav from "../component/Nav";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import Topscroll from "../component/Topscroll";
import Footer from "../component/Footer";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  })

  return (
    <>
      {loading ? (
        <>
          <Nav />
          <div className="fixed z-[12] h-screen w-screen " >
            <div className=" m-auto mt-[50%] md:mt-[13%] flex  justify-around items-center h-[40%] w-[80%]  " >
              <BallTriangle color=" #5651e5 " />
            </div>
          </div>
        </>
      ) : (
        <>
          <Nav />
          
          <Component {...pageProps}></Component>
          {/* <Topscroll /> */}
          <Footer />
        </>
      )}
    </>
  )
}

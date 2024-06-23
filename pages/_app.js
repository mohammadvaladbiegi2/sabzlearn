import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { GlobalStateProvider } from "@/context/GlobalState";

import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </GlobalStateProvider>
  );
}

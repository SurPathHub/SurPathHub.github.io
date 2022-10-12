import SurPathLayout from "../components/layouts/SurPathLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // TODO: hide layout on homepage
  return (
    <SurPathLayout>
      <Component {...pageProps} />
    </SurPathLayout>
  );
}

export default MyApp;

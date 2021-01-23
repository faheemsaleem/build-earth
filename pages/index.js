import Head from "next/head";
import Navigation from "../components/navigation";
import HomePage from "../components/Home";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Build Earth</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./img/Fi-04.svg" type="image/x-icon" />
        <link rel="stylesheet" href="./css/style.css" />
        <link rel="stylesheet" href="./css/mainNav.css" />
        <link rel="stylesheet" href="./css/main.css" />
      </Head>
      <Navigation />
      <HomePage />
    </>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>blockchain daily</title>
        <meta
          name="description"
          content="blockchain daily"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;

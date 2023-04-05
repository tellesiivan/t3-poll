import { SignIn, SignOutButton, useUser } from "@clerk/nextjs";
import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "t3-poll/utils/api";
import { Button } from "@nextui-org/react";

import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Text } from "@nextui-org/react";

const Home: NextPage = () => {
  const { user, isSignedIn } = useUser();

  const { data } = api.listings.getAll.useQuery();

  const { isDark, type } = useTheme();
  const { setTheme } = useNextTheme();

  console.log("data", data);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isSignedIn ? <SignOutButton /> : <SignIn />}
        <Button
          color="primary"
          auto
          onPress={() => setTheme(isDark ? "light" : "dark")}
        >
          The current theme is: {isDark ? "light" : "dark"}
        </Button>
        <Text h1>{isSignedIn ? user.firstName : "signin"}</Text>
      </main>
    </>
  );
};

export default Home;

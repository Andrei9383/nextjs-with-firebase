import Head from "next/head";
//import styles from "../styles/Home.module.css";
import WriteToCloudFirestore from "@/components/cloudFirestore/Write";
import ReadDataFromCloudFirestore from "@/components/cloudFirestore/Read";
import { useUser } from "@/lib/firebase/useUser";
import Counter from "@/components/realtimeDatabase/Counter";
import UploadFile from "@/components/storage/UploadFile";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import { Button } from "@nextui-org/react";

import NavbarComponent from "@/components/navbar/Navbar";

import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

import Header from "@/components/header/Header";

export default function Home() {
  const { user, logout } = useUser();

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  if (user) {
    return (
      <>
        <NavbarComponent />
        <Header />
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </>
    );
  } else
    return (
      <div>
        <p>
          <a href="/auth">Log In!</a>
        </p>

        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    );
}

"use client";

import {
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import "./layoutApp.css";
import logo from "../public/anonimoporfavor.png";
import Image from "next/image";
import Head from "next/head";
import { Facebook, GitHub, Instagram } from "@mui/icons-material";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },

    typography: {
      allVariants: { color: "#121212" },
    },
  });

  return (
    <html lang="es">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <header>
            <a href="/1">
              <Image src={logo} alt="logo" height={50}></Image>
            </a>
          </header>

          {children}
        </ThemeProvider>

        <footer>
          <a href={process.env.FACEBOOK_LINK} target="_blank">
            <IconButton disabled>
              <Facebook />
            </IconButton>
          </a>

          <a href={process.env.INSTAGRAM_LINK} target="_blank">
            <IconButton disabled>
              <Instagram />
            </IconButton>
          </a>
          <a href={process.env.GITHUB_LINK} target="_blank">
            <IconButton disabled>
              <GitHub />
            </IconButton>
          </a>
        </footer>
      </body>
    </html>
  );
}

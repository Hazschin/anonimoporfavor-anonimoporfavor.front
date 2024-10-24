"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./layoutApp.css";
import logo from "../public/anonimoporfavor.png";
import Image from "next/image";
import Head from "next/head";
//Comment
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
      </body>
    </html>
  );
}

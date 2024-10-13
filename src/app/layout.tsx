"use client";

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./layoutApp.css";

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <header>
            <Typography variant="h6" textAlign={"center"}>
              <a href={"/1"}>Anónimo por favor</a>
            </Typography>
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

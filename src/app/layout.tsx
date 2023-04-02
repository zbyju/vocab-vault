"use client";
import "./globals.css";
import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider, DarkMode, ThemeProvider } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            <Box>{children}</Box>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

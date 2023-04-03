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
            <Box
              w="80vw"
              mx="auto"
              boxShadow="xl"
              px="10"
              py="5"
              borderRadius="xl"
              bg="gray.50"
              _dark={{
                bg: "gray.900",
              }}
            >
              {children}
            </Box>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

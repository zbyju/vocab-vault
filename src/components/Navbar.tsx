import { Box, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import DarkToggle from "./DarkToggle";

export default function Navbar() {
  const links = [
    {
      href: "/",
      text: "Home",
    },
  ];
  return (
    <Box
      w="100vw"
      bg="whiteAlpha.800"
      _dark={{
        bg: "blackAlpha.800",
      }}
      backdropFilter="auto"
      backdropBlur="3xl"
      pos="sticky"
      top="0"
    >
      <Flex
        h="100%"
        py="5"
        px="5"
        alignItems="center"
        justify="space-between"
        gap={5}
      >
        <Box>
          <Heading>Vocab Vault</Heading>
        </Box>
        <Flex alignItems="center" justify="end" gap="5" flexGrow={1}>
          {links.map((link) => (
            <Link as={NextLink} key={link.text} href={link.href}>
              {link.text}
            </Link>
          ))}
          <DarkToggle />
        </Flex>
      </Flex>
    </Box>
  );
}

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
      w="60vw"
      my="30px"
      mx="auto"
      borderRadius="3xl"
      bg="whiteAlpha.700"
      _dark={{
        bg: "blackAlpha.700",
        borderColor: "blue.900",
      }}
      backdropFilter="auto"
      backdropBlur="3xl"
      pos="sticky"
      top="15px"
      overflowX="hidden"
      style={{
        boxShadow:
          "0 10px 15px -3px rgb(43 108 176 / 0.1), 0 4px 6px -4px rgb(43 108 176 / 0.1);",
      }}
      border="1px"
      borderColor="blue.50"
    >
      <Flex
        w="100%"
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

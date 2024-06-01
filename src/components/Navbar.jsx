import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold" fontSize="xl">
            ElectroShop
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link as={RouterLink} to="/" color="white">
              Home
            </Link>
            <Link as={RouterLink} to="/products" color="white">
              Products
            </Link>
            <Link as={RouterLink} to="/about" color="white">
              About
            </Link>
            <Link as={RouterLink} to="/contact" color="white">
              Contact
            </Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
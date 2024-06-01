import { Box, Container, VStack, Heading, Text, Image, SimpleGrid, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop shop for the latest electronics
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.imageUrl} alt={product.name} />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>
                  {product.price}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
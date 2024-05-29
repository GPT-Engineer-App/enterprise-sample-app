import React from "react";
import { ChakraProvider, Container, VStack, Text, Button, Input, FormControl, FormLabel, Box, Heading, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      toast({
        title: "Login failed.",
        description: "Invalid username or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading>Login</Heading>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Container>
  );
};

const WelcomeScreen = ({ onLogout }) => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to the Dashboard</Heading>
        <Text fontSize="lg">You have successfully logged in.</Text>
        <Button colorScheme="teal" onClick={onLogout}>
          Logout
        </Button>
      </VStack>
    </Container>
  );
};

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return <ChakraProvider>{isAuthenticated ? <WelcomeScreen onLogout={handleLogout} /> : <LoginScreen onLogin={handleLogin} />}</ChakraProvider>;
};

export default Index;

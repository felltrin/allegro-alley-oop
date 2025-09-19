import { Box, Container, Flex, Text, Theme } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import Demo from "./components/Demo";
import Header from "./components/Header";
import { FaMagnifyingGlass } from "react-icons/fa6";

function App() {
  return (
    <Provider>
      <Theme appearance="light">
        <Container bg={"#fff"} maxW={"full"} py={2} px={6}>
          <Header />
        </Container>
        <Flex minH={"93.3dvh"}>
          {/* Sidebar */}
          <Container bg={"#fff"} maxW={"24vh"} px={2} pt={4}>
            {/* <Demo /> */}
            <Box
              bg={"gray.100"}
              w={"100%"}
              p={2}
              color={"gray.600"}
              rounded={"sm"}
            >
              <Flex alignItems={"center"} gap={2}>
                <FaMagnifyingGlass />
                Search anything
              </Flex>
            </Box>
          </Container>
          {/* Main */}
          <Container
            bg={"gray.100"}
            px={8}
            py={10}
            maxW={"100%"}
            border={"2px solid"}
            borderColor={"gray.200"}
          >
            <Text textStyle={"3xl"} fontWeight={"semibold"}>
              Overview
            </Text>
          </Container>
        </Flex>
        {/* <Demo /> */}
      </Theme>
    </Provider>
  );
}

export default App;

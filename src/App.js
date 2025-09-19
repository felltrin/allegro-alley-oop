import { Container, Flex, Text, Theme } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import Demo from "./components/Demo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Provider>
      <Theme appearance="light">
        <Container bg={"#fff"} maxW={"full"} py={2} px={6}>
          <Header />
        </Container>
        <Flex minH={"93.3dvh"}>
          {/* Sidebar */}
          <Sidebar />
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

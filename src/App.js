import { Container, Flex, Theme } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import Demo from "./components/Demo";
import Header from "./components/Header";

function App() {
  return (
    <Provider>
      <Theme appearance="light">
        <Container bg={"#fff"} maxW={"full"} py={2} px={6}>
          <Header />
        </Container>
        <Flex>
          <Container bg={"#fff"} minH={"95vh"} maxW={"10vh"}></Container>
          <Container
            bg={"gray.200"}
            pl={4}
            minH={"95vh"}
            border={"2px solid"}
            borderColor={"gray.200"}
          ></Container>
        </Flex>
      </Theme>
    </Provider>
  );
}

export default App;

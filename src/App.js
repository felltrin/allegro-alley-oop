import { Container, Flex, Text, Theme } from "@chakra-ui/react";
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
          <Container bg={"#fff"} minH={"95vh"} maxW={"24vh"}></Container>
          <Container
            bg={"gray.200"}
            pl={8}
            py={12}
            minH={"95vh"}
            maxW={"170vh"}
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

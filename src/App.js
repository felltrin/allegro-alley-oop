import { Container, Theme } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import Demo from "./components/Demo";
import Header from "./components/Header";

function App() {
  return (
    <Provider>
      <Theme appearance="light">
        <Container bg={"#fff"} maxW={"full"} py={6} px={6} minH={"100vh"}>
          <Header />
          <Container bg={"gray.200"} pl={4} minH={"90vh"}></Container>
        </Container>
      </Theme>
    </Provider>
  );
}

export default App;

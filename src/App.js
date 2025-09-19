import { Box, Container, Flex, Text, Theme } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import Demo from "./components/Demo";
import Header from "./components/Header";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegFileAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbDeviceProjector } from "react-icons/tb";
import { LuHouse, LuNotebookText } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { TiClipboard } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";

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
            <Container pt={6} px={2}>
              <Text color={"gray.400"} textStyle={"xs"}>
                MAIN MENU
              </Text>
            </Container>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <LuHouse />
                Dashboard
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <TiClipboard />
                Task
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <FiShoppingCart />
                E-Commerce
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <FaRegCalendarAlt />
                Calendar
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <SlEnvolope />
                Mail
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <IoChatbubbleEllipsesOutline />
                Chat
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <TbDeviceProjector />
                Projects
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <FaRegFileAlt />
                File Manager
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <LuNotebookText />
                Notes
              </Flex>
            </Box>
            <Box p={2}>
              <Flex alignItems={"center"} gap={2}>
                <RiContactsBook2Line />
                Contacts
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

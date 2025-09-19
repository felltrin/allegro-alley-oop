import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FaHouseChimney, FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegFileAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbDeviceProjector } from "react-icons/tb";
import { LuNotebookText } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { TiClipboard } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { BiChevronRight } from "react-icons/bi";

const Sidebar = () => {
  return (
    <Container bg={"#fff"} maxW={"26vh"} px={2} pt={4}>
      <Box bg={"gray.100"} w={"100%"} p={2} color={"gray.600"} rounded={"sm"}>
        <Flex alignItems={"center"} gap={2}>
          <FaMagnifyingGlass />
          Search anything
        </Flex>
      </Box>
      <Container pt={6} pb={2} px={2}>
        <Text color={"gray.400"} textStyle={"xs"}>
          MAIN MENU
        </Text>
      </Container>
      <Box bg={"#B9EB8E"} p={2} rounded={"lg"}>
        <Flex alignItems={"center"} gap={2}>
          <FaHouseChimney />
          <Text fontWeight={"semibold"} textStyle={"sm"}>
            Dashboard
          </Text>
        </Flex>
      </Box>

      <Box p={2}>
        <Flex alignItems={"center"} gap={2}>
          <TiClipboard />
          Task
        </Flex>
      </Box>
      <Box p={2}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"} gap={2}>
            <FiShoppingCart />
            E-Commerce
          </Flex>
          <Flex>
            <BiChevronRight />
          </Flex>
        </Flex>
      </Box>
      <Box p={2}>
        <Flex alignItems={"center"} gap={2}>
          <FaRegCalendarAlt />
          Calendar
        </Flex>
      </Box>
      <Box p={2}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"} gap={2}>
            <SlEnvolope />
            Mail
          </Flex>
          <Box
            bg={"red.500"}
            rounded={"md"}
            w={"18px"}
            h={"18px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"xs"}
          >
            6
          </Box>
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
  );
};

export default Sidebar;

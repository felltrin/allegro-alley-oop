import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuAlignLeft, LuBell } from "react-icons/lu";

const Header = () => {
  return (
    <Flex alignItems={"center"}>
      <Flex gap={2} minW={"20vh"}>
        <Image src="/logo-for-dashvibe.png" width={8} height={8} />
        <Text textStyle={"3xl"} fontWeight={"semibold"}>
          Dashvibe
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        minW={"155vh"}
        pr={6}
      >
        <Flex pl={14}>
          <Icon size={"md"}>
            <LuAlignLeft />
          </Icon>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Icon size={"md"}>
            <HiMagnifyingGlass />
          </Icon>

          <Icon size={"md"}>
            <LuBell />
          </Icon>

          <Text textStyle={"2xl"} color={"gray.200"}>
            |
          </Text>
          <Flex alignItems={"center"} gap={2}>
            <Image
              src="/circle-hs-one.jpg"
              alt="dash hs two"
              boxSize={"50px"}
              borderRadius={"full"}
              fit={"cover"}
            />
            <Text>Thresea Webb</Text>
            <Icon>
              <BiChevronDown />
            </Icon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

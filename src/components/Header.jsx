import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuAlignLeft, LuBell } from "react-icons/lu";

const Header = () => {
  return (
    <Flex alignItems={"center"} gap={2}>
      <Image src="/logo-for-dashvibe.png" width={8} height={8} />
      <Text textStyle={"3xl"} fontWeight={"semibold"}>
        Dashvibe
      </Text>
      <LuAlignLeft />
      <HiMagnifyingGlass />
      <LuBell />
      <Text textStyle={"2xl"} color={"gray.200"}>
        |
      </Text>
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
  );
};

export default Header;

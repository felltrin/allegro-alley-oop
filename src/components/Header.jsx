import { Flex, Image, Text } from "@chakra-ui/react";
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
    </Flex>
  );
};

export default Header;

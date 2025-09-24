import { Box, Button, Flex, Menu, Portal, Text } from "@chakra-ui/react";
import { GoDownload } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";

const OverviewHeader = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} pb={8}>
      <Flex>
        <Text textStyle={"3xl"} fontWeight={"semibold"}>
          Overview
        </Text>
      </Flex>
      <Flex alignItems={"center"} gap={4}>
        <Box
          bg={"#fff"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"32px"}
          height={"32px"}
          rounded={"md"}
        >
          <GoDownload />
        </Box>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant={"ghost"} bg={"#fff"} size="sm">
              Last 7 days
              <BiChevronDown />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt-a">
                  New Text File <Menu.ItemCommand>⌘E</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="new-file-a">
                  New File... <Menu.ItemCommand>⌘N</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="new-win-a">
                  New Window <Menu.ItemCommand>⌘W</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="open-file-a">
                  Open File... <Menu.ItemCommand>⌘O</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="export-a">
                  Export <Menu.ItemCommand>⌘S</Menu.ItemCommand>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>
    </Flex>
  );
};

export default OverviewHeader;

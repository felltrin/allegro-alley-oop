import { Container, Flex } from "@chakra-ui/react";
import OverviewHeader from "./Main/OverviewHeader";
import TotalProfitCard from "./Main/TotalProfitCard";
import TotalSalesCard from "./Main/TotalSalesCard";
import NewUsersCard from "./Main/NewUsersCard";
import StatisticsChartCard from "./Main/StatisticsChartCard";
import AnalyticsChardCard from "./Main/AnalyticsChardCard";
import MyCards from "./Main/MyCards";
import SalesCard from "./Main/SalesCard";

const Main = () => {
  return (
    <Container
      bg={"gray.100"}
      px={8}
      py={10}
      maxW={"100%"}
      border={"2px solid"}
      borderColor={"gray.200"}
    >
      <OverviewHeader />
      <Flex justifyContent={"space-between"} pb={8}>
        <TotalProfitCard />
        <TotalSalesCard />
        <NewUsersCard />
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"} pb={8}>
        <Flex>
          <StatisticsChartCard />
        </Flex>

        <Flex>
          <AnalyticsChardCard />
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Flex>
          <MyCards />
        </Flex>

        <Flex>
          <SalesCard />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Main;

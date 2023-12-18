import {
  Box,
  Grid,
  Image,
  GridItem,
  Text,
  HStack,
  Heading,
  VStack,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import pic2 from "../../../utility/assets/pic2.jpg";
import pic3 from "../../../utility/assets/logo.avif";
import CommomButton from "../../../utility/commonUI/button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={10} my={10} mx={3} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }

  function StackEx() {
    return (
      <Flex flexDirection="row" spacing={3}>
        <Feature
          onClick={() => navigate("/articles")}
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          bg="white"
          title="Javascript Fundamentals"
          desc="All the javascript, react, node fundamental concepts that are important"
        />
        <Feature
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          bg="white"
          title="Javascript algorithms and questions, dsa"
          desc="Commonly asked questions in interview questions"
        />
        <Feature
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          bg="white"
          title="Machine coding questions"
          desc="Practice machine coding questions"
        />
      </Flex>
    );
  }

  return (
    <Grid
      h="100vh"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={1}>
        <Image boxSize="155px" width="2000px" src={pic3} alt="Dan Abramov" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <Image boxSize="155px" width="2000px" src={pic2} alt="Dan Abramov" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <CommomButton buttonText="Practice More" />
      </GridItem>
      <GridItem rowSpan={3} colSpan={3}>
        {StackEx()}
      </GridItem>
      <GridItem rowSpan={3} colSpan={1}>
        <div>Recent Activities</div>
        <VStack
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          spacing={4}
          align="stretch"
        >
          <Box h="40px">recent 1 Activities</Box>
          <Box h="40px">recent 1 Activities</Box>
          <Box h="40px">recent 1 Activities</Box>
          <Box h="40px">recent 1 Activities</Box>
          <Box h="40px">recent 1 Activities</Box> <Box h="40px">more ...</Box>
        </VStack>
      </GridItem>
      <GridItem rowSpan={3} colSpan={1}>
        <div>Recent Activities</div>
        <VStack
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          spacing={4}
          align="stretch"
        >
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </VStack>
        <Box
          mt={4}
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          // display="flex"
          // justifyContent="space-between"
          // alignItems="center"
        >
          <div>Become a Contributor and Join Us</div>
          <CommomButton
            buttonText={"Become a Contributor"}
            onClick={() => navigate("/signup?admin=true")}
          />
        </Box>
      </GridItem>
      <GridItem rowSpan={1} colSpan={5} bg="blue">
        <Box as="footer" py={16} bg="gray.800" color="white" textAlign="center">
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </Box>
      </GridItem>
    </Grid>
  );
};
export default Home;

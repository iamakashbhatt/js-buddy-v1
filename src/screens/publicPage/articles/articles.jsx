import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Articles = () => {
  const articles = [
    {
      heading: "Article 1",
      description: "This is the first article",
      time: "10:00 AM",
      date: "July 25, 2023",
      author: "John Doe",
      tags: ["React", "JavaScript"],
    },
    {
      heading: "Article 2",
      description: "This is the second article",
      time: "2:30 PM",
      date: "July 26, 2023",
      author: "Jane Doe",
      tags: ["Node.js", "HTML", "CSS"],
    },
    // Add more articles here...
  ];
  const options = ["React", "JavaScript", "Node.js", "HTML", "CSS"];
  const navigate = useNavigate();
  return (
    <Box p={4}>
      <Center mb={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<i className="fa fa-search" />}
          />
          <Input size="sm" type="text" placeholder="Search" />{" "}
          {/* Set the size of the Input */}
          <Button ml={2}>Search</Button>
        </InputGroup>
      </Center>
      <Flex justifyContent="center" mb={4}>
        {options.map((option) => (
          <Box
            key={option}
            px={2}
            py={1}
            bg="teal.500"
            color="white"
            borderRadius="md"
            mr={2}
          >
            {option}
          </Box>
        ))}
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {[...Array(20)].map((_, index) => {
          return (
            <Box
              onClick={() => navigate(`/article/${index}`)}
              w="100%"
              borderRadius="md"
              boxShadow="dark-lg"
              p="6"
              rounded="md"
              bg="white"
              h="150px"
              position="relative"
            >
              <h2>{articles[0].heading}</h2>
              <p>{articles[0].description}</p>

              <VStack spacing={2} mt="auto" alignItems="flex-end">
                <div>
                  {articles[0].tags.map((tag, index) => (
                    <Tag
                      key={index}
                      size="sm"
                      variant="subtle"
                      colorScheme="teal"
                      mr={1}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
                <small>
                  {articles[0].time} | {articles[0].date} | {articles[0].author}
                </small>
              </VStack>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Articles;

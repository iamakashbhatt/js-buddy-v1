import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Code,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
} from "@chakra-ui/react";

const Article = () => {
  const recommendedPosts = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6",
    "Post 7",
  ];

  return (
    <Container maxW="container.lg" mt={8}>
      {/* Back button */}
      <Button mb={4} onClick={() => window.history.back()}>
        Back
      </Button>

      <Grid templateColumns="2fr 1fr" gap={8}>
        {/* Article content */}
        <VStack align="flex-start" spacing={4}>
          {/* Heading */}
          <Heading as="h1" size="xl" mb={4}>
            Sample Article Heading
          </Heading>

          {/* Date and Author */}
          <Text fontSize="sm" color="gray.600" mb={4}>
            Published on July 23, 2023 by John Doe
          </Text>

          {/* Explanation */}
          <Text fontSize="lg" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            mauris et sapien eleifend, at tempor metus feugiat. Duis vel
            fermentum nisi, sit amet faucibus orci. Phasellus luctus auctor
            augue, non mollis nunc scelerisque at. Sed nec lorem sed lorem
            congue euismod. Sed eu odio sit amet tellus varius elementum. Nullam
            eget enim in ligula blandit tincidunt sit amet et neque. Praesent
            tempus ex nec lacus bibendum, ut congue felis varius. Cras eget
            tellus fermentum, hendrerit velit in, tincidunt nulla. Etiam
            hendrerit ex ut tortor pharetra interdum. Nulla facilisi. Quisque
            nec justo at urna lacinia vestibulum. Suspendisse vitae facilisis
            libero.
          </Text>
          {/* Code Viewer */}
          <Box bg="gray.100" borderRadius="md" position="relative">
            <Code colorScheme="facebook">
              impsfsdfdsfsdfsdfsd fsdfsdfsdf sdfsdfasdasdasdasdasdasdasfort
              react from react
            </Code>

            {/* Copy Button with Tooltip */}
            {/* <Tooltip label={hasCopied ? 'Copied!' : 'Copy'}> */}
            <Button
              position="absolute"
              top={2}
              right={2}
              size="sm"
              // onClick={onCopy}
              variant="outline"
              // colorScheme={hasCopied ? 'green' : 'gray'}
            >
              {/* {hasCopied ? "Copied" : "Copy"} */}
            </Button>
            {/* </Tooltip> */}
          </Box>
          {/* Image */}
          <Box mb={4}>
            <Image src="https://via.placeholder.com/500" alt="Sample" />
          </Box>

          {/* Listing */}
          <UnorderedList mb={4}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Sed euismod mauris et sapien eleifend</ListItem>
            <ListItem>Phasellus luctus auctor augue</ListItem>
            <ListItem>Nullam eget enim in ligula blandit tincidunt</ListItem>
          </UnorderedList>
        </VStack>
        {/* Recommended Posts */}
        <Box mt={8}>
          <Tabs>
            <TabList>
              <Tab>Recommended Posts</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <UnorderedList>
                  {recommendedPosts.map((post) => (
                    <ListItem key={post}>{post}</ListItem>
                  ))}
                </UnorderedList>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Grid>
    </Container>
  );
};

export default Article;

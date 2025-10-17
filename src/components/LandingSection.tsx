import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { greeting, bio1, bio2 } from "../data/landing";

const LandingSection: React.FC = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src=" https://i.pravatar.cc/150?img=7" size="2xl" />
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { greeting, bio1, bio2 } from "../data/landing";
import { colors } from "../constants/theme";

const LandingSection: React.FC = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor={colors.landingBg}
  >
    <Avatar src={require("../images/profile_image.jpg")} size="2xl" />
    <VStack spacing={3} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1} style={{ lineHeight: 1.2 }}>
        {bio1}
      </Heading>
      <Heading as="h1" size="4xl" noOfLines={1} style={{ lineHeight: 1.2 }}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

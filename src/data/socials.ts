import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export type Social = { icon: IconDefinition; url: string };

export const socials: Social[] = [
  { icon: faEnvelope, url: "mailto: hello@example.com" },
  { icon: faGithub, url: "https://github.com/" },
  { icon: faLinkedin, url: "#" },
  { icon: faMedium, url: "https://medium.com" },
  { icon: faStackOverflow, url: "https://stackoverflow.com" },
];

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export type Social = { icon: IconDefinition; url: string };

export const socials: Social[] = [
  { icon: faEnvelope, url: "mailto: oli.andrea17@gmail.com" },
  { icon: faGithub, url: "https://github.com/AndreaOlivieri" },
  { icon: faLinkedin, url: "https://it.linkedin.com/in/andrea-olivieri" },
];

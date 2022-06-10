import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styles";

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com/nidhikumari_4">
          <FaTwitter />
        </a>
      </li>

      <li>
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
      </li>

      <li>
        <a href="www.linkedin.com/in/nidhikumari-4">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;

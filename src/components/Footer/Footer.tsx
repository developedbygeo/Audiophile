import { Link } from 'react-router-dom';

import { BsInstagram } from 'react-icons/bs';
import { ImFacebook2, ImTwitter } from 'react-icons/im';
import { ReactComponent as Logo } from 'assets/logo.svg';

import {
  StyledFooter,
  StyledLinks,
  FooterDescription,
  CopyAndLinks,
  Copyright,
  Social
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter as="footer">
      <Link to="/" aria-label="Return to Home">
        <Logo />
      </Link>
      <StyledLinks>
        <Link to="/">HOME</Link>
        <Link to="/headphones">HEADPHONES</Link>
        <Link to="/speakers">SPEAKERS</Link>
        <Link to="/earphones">EARPHONES</Link>
      </StyledLinks>
      <FooterDescription>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers
        and sound specialists who are devoted to helping you get the most out of personal audio. Come and
        visit our demo facility - we&apos;re open 7 days a week.
      </FooterDescription>
      <CopyAndLinks className="copy">
        <small>
          <Copyright>Copyright 2021. All Rights Reserved</Copyright>
        </small>
        <Social as="ul">
          <li>
            <a
              className="fb-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
            >
              <ImFacebook2 />
            </a>
          </li>
          <li>
            <a
              className="tw-link"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Page"
            >
              <ImTwitter />
            </a>
          </li>
          <li>
            <a
              className="ig-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Page"
            >
              <BsInstagram />
            </a>
          </li>
        </Social>
      </CopyAndLinks>
    </StyledFooter>
  );
};

export default Footer;

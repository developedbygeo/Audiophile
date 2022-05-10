import { Link } from 'react-router-dom';

import { BsInstagram } from 'react-icons/bs';
import { ImFacebook2, ImTwitter } from 'react-icons/im';
import { ReactComponent as Logo } from 'assets/logo.svg';

import { StyledFooter, StyledLinks, FooterDescription, FinePrint, Copyright, Social } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter as="footer">
      <Link to="/">
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
      <FinePrint>
        <div>
          <Copyright>Copyright 2021. All Rights Reserved</Copyright>
        </div>
        <Social as="div">
          <a className="fb-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <ImFacebook2 />
          </a>
          <a className="tw-link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <ImTwitter />
          </a>
          <a className="ig-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
        </Social>
      </FinePrint>
    </StyledFooter>
  );
};

export default Footer;

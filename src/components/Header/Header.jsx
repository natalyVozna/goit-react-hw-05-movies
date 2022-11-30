import { Container, HeaderStyled, NavItem, NavBox } from './Header.styled';
// import { Box } from 'components/Box/Box';
// import PropTypes from 'prop-types';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <HeaderStyled>
      <NavBox>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </NavBox>
    </HeaderStyled>
  );
};

export default Header;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: calc((100% - 130px) / 6);
  justify-content: center;
  height: auto;
  /* overflow: hidden; */

  border-radius: ${p => p.theme.space[2]}px;
`;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 225px;
  object-fit: cover;
  border-radius: ${p => p.theme.space[2]}px;
`;

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 160px;
  align-items: center;
  line-height: 1;
  text-decoration: none;
  transition: color 250ms ${props => props.theme.colors.timingFunction},
    transform 250ms ${props => props.theme.colors.timingFunction};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.05);
  }
`;
export const Title = styled.p`
  font-size: ${p => p.theme.fontSize.m}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  padding: 8px;
  /* margin-bottom: 20px; */
`;

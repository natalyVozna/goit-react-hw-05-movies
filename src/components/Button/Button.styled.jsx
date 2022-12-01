import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #2194f2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 0 auto;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #0a62aa;
  }
  svg {
    width: 22px;
    height: 22px;
    margin-right: 5px;
    position: relative;
    z-index: -1;
  }
`;

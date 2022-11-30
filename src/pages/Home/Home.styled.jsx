import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 26px;
`;

export const Title = styled.h1`
  font-size: 38px;
  line-height: 1.6;
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: 20px;
  text-align: center;
`;

import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Box, Content } from './Layout.styled';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Content>
        {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </Content>
    </Box>
  );
};

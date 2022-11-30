import { Container, NavItem, Cover, Title } from './HomeCard.styled';
import PropTypes from 'prop-types';

const HomeCard = ({ title, id, url }) => {
  return (
    <Container>
      <NavItem to={`/movies/${id}`}>
        <Cover src={`https://image.tmdb.org/t/p/original/${url}`} alt="img" />
        <Title>{title}</Title>
      </NavItem>
    </Container>
  );
};

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
export default HomeCard;

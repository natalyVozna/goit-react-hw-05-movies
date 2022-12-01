import { Container, NavItem, Cover, Title } from './MovieCard.styled';
import PropTypes from 'prop-types';
import defaultImg from '../../images/defaultImg.jpeg';

const MovieCard = ({ title, id, url }) => {
  return (
    <Container>
      <NavItem to={`/movies/${id}`}>
        <Cover
          src={
            url !== null
              ? `https://image.tmdb.org/t/p/original/${url}`
              : defaultImg
          }
          alt={title}
        />
      </NavItem>
      <Title>{title}</Title>
    </Container>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
};
export default MovieCard;

import { Outlet, useParams } from 'react-router-dom';
import {
  NavItem,
  SectionInfo,
  GoBack,
  Img,
  Cover,
  InfoBox,
  Title,
  SubTitle,
  Text,
  AdditionalSection,
} from './MovieDetails.styled';
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getFullInfoAboutMovie } from 'services/api';
import { useFetch } from 'components/hooks/useFetch';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const [fetchData, isLoading, isError] = useFetch(params => {
    getFullInfoAboutMovie(params).then(
      ({
        title,
        id,
        poster_path: url,
        vote_average,
        overview,
        genres,
        backdrop_path,
      }) => {
        const score = Math.round(vote_average * 10);
        const allGenres = genres.map(genre => genre.name).join(' ');
        setMovie({
          title,
          id,
          url,
          score,
          allGenres,
          overview,
          backdropUrl: backdrop_path,
        });
      }
    );
  });
  useEffect(() => {
    fetchData(movieId);
  }, [fetchData, movieId]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  if (!movie) {
    return <div>No match</div>;
  }

  console.log(' movieId', movie);

  return (
    <div className="container">
      {/* <button type="button">Go back</button> */}
      <SectionInfo
        url={`https://image.tmdb.org/t/p/original/${movie.backdropUrl}`}
      >
        <GoBack type="button">&#8592; Go back</GoBack>
        <Cover>
          <Img
            src={`https://image.tmdb.org/t/p/original/${movie.url}`}
            alt={movie.title}
            width="200"
          />
        </Cover>
        <InfoBox>
          <Title>{movie.title}</Title>
          <Text>
            <b>User Score:</b> {movie.score}%
          </Text>
          <SubTitle className="overview">Overview</SubTitle>
          <Text>{movie.overview}</Text>
          <SubTitle className="genres">Genres</SubTitle>
          <p>{movie.allGenres}</p>
        </InfoBox>
      </SectionInfo>
      <AdditionalSection className="additional">
        <Title>Additional information</Title>

        <ul>
          {navItems.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              &#10139; &nbsp;<span>{text}</span>
            </NavItem>
          ))}
        </ul>
      </AdditionalSection>
      {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default MovieDetails;

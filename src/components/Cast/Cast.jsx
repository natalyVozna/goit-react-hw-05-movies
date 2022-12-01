import { CastCard } from 'components/CastCard/CastCard';
import { NotFound } from 'components/NotFound/NotFound';
import { useFetch } from 'hooks/useFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/api';
import { Gallery } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  const [fetchData, isLoading, isError] = useFetch(params => {
    getActors(params).then(res => {
      setActors(res.cast);
    });
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

  if (!actors && !isLoading) {
    const text = "We don't have any actors";
    return <NotFound text={text} />;
  }

  return (
    <Gallery>
      {actors.map(({ profile_path, name, character, popularity, id }) => (
        <CastCard
          key={id}
          url={profile_path}
          name={name}
          character={character}
          popularity={popularity}
        />
      ))}
    </Gallery>
  );
};

export default Cast;

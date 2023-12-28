import useGenres from '../hooks/useGenres';

const GenreList = () => {
    const { items: genres, error } = useGenres();
    return (
        <>
            {error && <p>{error}</p>}
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GenreList;

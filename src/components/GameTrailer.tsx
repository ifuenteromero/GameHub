import useTrailers from '../hooks/useTrailers';

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data, isLoading, error } = useTrailers(gameId);

    if (isLoading) return null;
    if (error) throw error;
    const firstTrailer = data?.results?.[0];
    if (!firstTrailer) return null;
    return (
        <video
            src={firstTrailer.data[480]}
            poster={firstTrailer.preview}
            style={{ maxHeight: '480px', margin: '20px auto 0' }}
            controls
        />
    );
};

export default GameTrailer;

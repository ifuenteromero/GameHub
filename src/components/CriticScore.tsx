import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const getColorScheme = (score: number) => {
    if (score > 75) return 'green';
    if (score > 60) return 'yellow';
    return 'red';
};

const CriticScore = ({ score }: Props) => {
    return (
        <Badge
            colorScheme={getColorScheme(score)}
            paddingX={2}
            borderRadius={4}
            fontSize={14}
        >
            {score}
        </Badge>
    );
};

export default CriticScore;

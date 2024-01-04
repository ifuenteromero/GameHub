import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import bullsEye from '../assets/bulls-eye.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojisMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'Meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'Recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'Exceptional', boxSize: '35px' },
    };

    const emojiProps = emojisMap[rating];

    return <Image title={emojiProps.alt} marginTop="12px" {...emojiProps} />;
};

export default Emoji;

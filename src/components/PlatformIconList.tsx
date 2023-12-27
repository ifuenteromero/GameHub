import { HStack } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import Icon from './Icon';

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: string } = {
        pc: 'FaWindows',
        playstation: 'FaPlaystation',
        xbox: 'FaXbox',
        nintendo: 'SiNintendo',
        mac: 'FaApple',
        linux: 'FaLinux',
        ios: 'MdPhoneIphone',
        web: 'BsGlobe',
        android: 'FaAndroid',
    };

    return (
        <HStack marginTop={2}>
            {platforms.map((p) => (
                <Icon
                    key={p.id}
                    iconName={iconMap[p.slug]}
                    title={p.name}
                    color="gray.500"
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;

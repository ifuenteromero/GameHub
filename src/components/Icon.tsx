import {
    Icon as ChakraIcon,
    IconProps as ChakraIconProps,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsChevronDown, BsGlobe } from 'react-icons/bs';

interface Props extends ChakraIconProps {
    iconName: string;
    title?: string;
}

const iconComponents: { [key: string]: IconType } = {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
    MdPhoneIphone,
    SiNintendo,
    BsGlobe,
    BsChevronDown,
};

const Icon = ({ iconName, ...restProps }: Props) => {
    const IconComponent = iconComponents[iconName];
    return <ChakraIcon as={IconComponent} {...restProps} /> || null;
};

export default Icon;

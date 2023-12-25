import { Show, ShowProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends ShowProps {
    children: ReactNode;
}

const IsVisible = ({ children, ...restProps }: Props) => {
    return <Show {...restProps}>{children}</Show>;
};

export default IsVisible;

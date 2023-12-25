import { Grid as _Grid, GridProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends GridProps {
    children: ReactNode;
}

const Grid = ({ children, ...restProps }: Props) => {
    return <_Grid {...restProps}>{children}</_Grid>;
};

export default Grid;

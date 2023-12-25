import { GridItem as _GridItem, GridItemProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends GridItemProps {
    children: ReactNode;
}

const GridItem = ({ children, ...restProps }: Props) => {
    return <_GridItem {...restProps}>{children}</_GridItem>;
};

export default GridItem;

import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreSkeleton = () => {
    return (
        <HStack>
            <Skeleton height="32px" width="32px" />
            <SkeletonText height="32px" width="100%" overflow="hidden" />
        </HStack>
    );
};

export default GenreSkeleton;

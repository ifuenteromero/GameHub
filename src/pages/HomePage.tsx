import { HStack, VStack } from '@chakra-ui/react';
import Grid from '../LibraryComponents/Grid';
import GridItem from '../LibraryComponents/GridItem';
import IsVisible from '../LibraryComponents/IsVisible';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{ base: '1fr', lg: '200px 1fr' }}
            paddingX={8}
            gap="8px 32px"
        >
            <IsVisible above="lg">
                <GridItem area="aside">
                    <GenreList />
                </GridItem>
            </IsVisible>
            <GridItem area="main">
                <VStack
                    marginLeft="10px"
                    marginBottom="10px"
                    alignItems="flex-start"
                    gap={5}
                >
                    <GameHeading />
                    <HStack>
                        <PlatformSelector />
                        <SortSelector />
                    </HStack>
                </VStack>
                <GameGrid />
            </GridItem>
        </Grid>
    );
};

export default HomePage;

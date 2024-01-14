import { HStack, VStack } from '@chakra-ui/react';
import './App.scss';
import Grid from './LibraryComponents/Grid';
import GridItem from './LibraryComponents/GridItem';
import IsVisible from './LibraryComponents/IsVisible';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{ base: '1fr', lg: '200px 1fr' }}
            paddingX={8}
            gap="8px 32px"
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>
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
}

export default App;

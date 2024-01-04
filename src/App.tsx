import { useState } from 'react';
import './App.css';
import Grid from './LibraryComponents/Grid';
import GridItem from './LibraryComponents/GridItem';
import IsVisible from './LibraryComponents/IsVisible';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import { HStack } from '@chakra-ui/react';

export interface GameQuery {
    genre: Genre;
    platform: Platform;
    sortOrder: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
                        }
                    />
                </GridItem>
            </IsVisible>
            <GridItem area="main">
                <HStack marginLeft="10px" marginBottom="10px">
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={(platform) =>
                            setGameQuery({ ...gameQuery, platform })
                        }
                    />
                    <SortSelector
                        sortOrder={gameQuery.sortOrder}
                        onSelectSortOrder={(sortOrder) =>
                            setGameQuery({ ...gameQuery, sortOrder })
                        }
                    />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;

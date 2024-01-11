import { useState } from 'react';
import './App.scss';
import Grid from './LibraryComponents/Grid';
import GridItem from './LibraryComponents/GridItem';
import IsVisible from './LibraryComponents/IsVisible';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { HStack, VStack } from '@chakra-ui/react';
import GameHeading from './components/GameHeading';
import { Platform } from './services/platformsService';
import { Genre } from './services/genresServices';

export interface GameQuery {
    genreId?: number;
    platform: Platform;
    sortOrder: string;
    textSearch: string;
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
                <NavBar
                    onSearch={(textSearch) =>
                        setGameQuery({ ...gameQuery, textSearch })
                    }
                />
            </GridItem>
            <IsVisible above="lg">
                <GridItem area="aside">
                    <GenreList
                        selectedGenreId={gameQuery.genreId}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genreId: genre.id })
                        }
                    />
                </GridItem>
            </IsVisible>
            <GridItem area="main">
                <VStack
                    marginLeft="10px"
                    marginBottom="10px"
                    alignItems="flex-start"
                    gap={5}
                >
                    <GameHeading gameQuery={gameQuery} />
                    <HStack>
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
                </VStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;

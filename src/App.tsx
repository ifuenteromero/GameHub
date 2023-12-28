import './App.css';
import Grid from './LibraryComponents/Grid';
import GridItem from './LibraryComponents/GridItem';
import IsVisible from './LibraryComponents/IsVisible';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
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
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;

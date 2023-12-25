import './App.css';
import Grid from './LibraryComponents/Grid';
import GridItem from './LibraryComponents/GridItem';
import IsVisible from './LibraryComponents/IsVisible';
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
                <GridItem area="aside">Aside</GridItem>
            </IsVisible>
            <GridItem area="main">Main</GridItem>
        </Grid>
    );
}

export default App;

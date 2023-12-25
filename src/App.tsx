import './App.css';
import Grid from './LibraryComponents/Grid';
import GridItem from './LibraryComponents/GridItem';
import IsVisible from './LibraryComponents/IsVisible';

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
        >
            <GridItem area="nav" bgColor="coral">
                Nav
            </GridItem>
            <IsVisible above="lg">
                <GridItem area="aside" bgColor="yellow">
                    Aside
                </GridItem>
            </IsVisible>
            <GridItem area="main" bgColor="dodgerblue">
                Main
            </GridItem>
        </Grid>
    );
}

export default App;

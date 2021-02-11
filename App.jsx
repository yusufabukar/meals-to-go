import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme/theme.js';
import LocationContextProvider from './src/services/location/LocationContextProvider.jsx';
import RestaurantsContextProvider from './src/services/restaurants/mock/RestaurantsContextProvider.jsx';
import Navigation from './src/infrastructure/navigation/Navigation.jsx';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';

function App() {
	const [latoLoaded] = useLato({Lato_400Regular});
	const [oswaldLoaded] = useOswald({Oswald_400Regular});

	return (
		<>
			<StatusBar style='auto' />
			<ThemeProvider theme={theme}>
				<LocationContextProvider>
					<RestaurantsContextProvider>
						<Navigation />
					</RestaurantsContextProvider>
				</LocationContextProvider>
			</ThemeProvider>
		</>
	);
};

export default App;
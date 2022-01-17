import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

import ReduxSagaTodo from './redux-saga-todo';
import { Link } from '@material-ui/core';

const theme = createTheme({
    typography: {
        fontFamily: [
          'Muli',
          'sans-serif'
        ].join(','),
    }
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Link href="/" component={ReduxSagaTodo}> 
        
        </Link>
            
    </ThemeProvider>
);

export default App;

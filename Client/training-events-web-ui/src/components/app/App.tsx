import React from 'react';
import {AppStateRegistry,AppState} from "../../store/";
import {ThemeService} from "../../services/theme";
import { StylesProvider } from '@material-ui/core/styles';
import {theme} from "../../theme";
import Router from "../../routes";
import {Provider} from "react-redux";


AppStateRegistry.register(AppState);
new ThemeService().setupTheme(theme);


function App() {
  return (
      <StylesProvider injectFirst>
        <Provider store={AppState}>
            <Router/>
        </Provider>
      </StylesProvider>
  );
}

export default App;

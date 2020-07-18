import React from 'react';
import AppStateRegistry from "../../store/AppStateRegistry";
import AppState from "../../store/AppState";
import {ThemeService} from "../../services/theme";
import { StylesProvider } from '@material-ui/core/styles';
import {theme} from "../../theme";
import {Router} from "../../routes";
import {Provider} from "react-redux";

AppStateRegistry.register(AppState);
new ThemeService().setupTheme(theme);


function App() {
  return (
      <StylesProvider injectFirst>
        <Provider store={AppState}>
            <Router theme={theme} />
        </Provider>
      </StylesProvider>
  );
}

export default App;

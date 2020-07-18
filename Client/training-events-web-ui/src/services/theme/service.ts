import {setTheme} from "./actions"
import {AppStateRegistry} from "../../store";
import {createMuiTheme, ThemeOptions} from "@material-ui/core";

export interface IThemeService{
    setupTheme(themeOptions:ThemeOptions):void;
}

export class ThemeService implements IThemeService{

    public setupTheme(themeOptions:ThemeOptions):void {
        const uiTheme = createMuiTheme(themeOptions);
        const { store } = AppStateRegistry;
        store.dispatch(setTheme(uiTheme))
    }
}

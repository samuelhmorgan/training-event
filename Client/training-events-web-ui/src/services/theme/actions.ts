import {Theme} from "@material-ui/core";
import IAppAction from "../../store/iappaction";

export const themeActionConstants = {
    SET_THEME: 'SET_THEME'
}

export class SetThemeAction implements IAppAction{
    constructor(public type: typeof themeActionConstants.SET_THEME,
                public uiTheme:Partial<Theme>){
    }
}

export function setTheme(uiTheme:Partial<Theme>){
    return {
        type:themeActionConstants.SET_THEME,
        uiTheme
    };
}

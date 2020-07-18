import {Theme} from "@material-ui/core";
import IAppAction from "../../store/iappaction";
import {SetThemeAction, themeActionConstants} from "./actions";


type ThemeState = {
 theme:Partial<Theme>;
}

const initialState:ThemeState = {
    theme: {}
};

export function themeReducer(state:ThemeState= initialState, action:IAppAction){
    switch(action.type){
        case (themeActionConstants.SET_THEME):
            return {...state, theme:(action as SetThemeAction).uiTheme};
        default:
            return state;
    }
}

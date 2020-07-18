import * as React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import {EventsView} from "../views";

const mapStateToProps = (state:any) => ({
    theme: state.theme
})

type RouterProps = {
    theme:any;
}

export const Router:React.FC<RouterProps> = (props:RouterProps) => {
    const { theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="events" component={EventsView} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
        );
}

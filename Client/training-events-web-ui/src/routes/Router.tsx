import * as React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import {EventsView} from "../views";
import {connect} from "react-redux";
import ViewNotFound from "../components/view-not-found/PageNotFound";

const mapStateToProps = (state:any) => {
    return {
        theme: state.theme.theme
    }
};

type RouterProps = {
    theme?:any;
}

const Router:React.FC<RouterProps> = (props:RouterProps) => {
    const { theme } = props;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/events" component={EventsView} />
                    <Route path="*" component={ViewNotFound} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
        );
}


export default connect(mapStateToProps)(Router);

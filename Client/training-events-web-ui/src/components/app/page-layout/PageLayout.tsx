import React from 'react';
import {Container, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const sections = [
    { title: 'Events', url: '#' }
];


const useStyles = makeStyles((theme:any) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


function PageLayout(props: { children: any; }) {
    const { children } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <PageHeader title="Training Events" sections={sections} />
                <main>
                    {children}
                </main>
            </Container>
            <PageFooter title="Training Events" description="Training with Purpose"/>
        </React.Fragment>
    );
}

export default PageLayout;

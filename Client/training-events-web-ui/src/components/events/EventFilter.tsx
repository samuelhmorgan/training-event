import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Grid, Paper} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
                marginBottom: '40px'
            },
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }),
);

export default function EventFilter() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleStartDateChange = (date: Date | null) => {
        setSelectedStartDate(date);
    };

    const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleEndDateChange = (date: Date | null) => {
        setSelectedEndDate(date);
    };

    return (
        <Paper className={classes.root}>
        <form  noValidate autoComplete="off">
            <Grid container justify="space-around">
            <div>
                <TextField
                    id="txt-search-keyword"
                    label="Search"
                    placeholder="Enter Search Keyword"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="start-date-picker"
                        label="Start Date"
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        margin="normal"
                        id="end-date-picker"
                        label="End Date"
                        format="MM/dd/yyyy"
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                </MuiPickersUtilsProvider>
            </div>
            </Grid>
        </form>
        </Paper>
    );
}

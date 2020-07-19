import React from 'react';
import {TrainingEvent} from "../../services/event/models/TrainingEvent";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import moment from "moment";

type EventCardProps = {
    event : TrainingEvent;
}


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },

});

const EventCard:React.FC<EventCardProps> = (props:EventCardProps) => {

    const {event} = props;

    const classes = useStyles();

    return (
        <Card className={classes.root} key={event.id} style={{ marginTop: '10px', marginBottom:'10px', minWidth: '400px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={event.title}
                    height="140"
                    image={event.imageUrl}
                    title={event.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                        {event.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {event.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       <label>Start:</label> {moment(event.startTimeAsUtc).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    Sign Up
                </Button>
                <Button size="small" color="secondary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;

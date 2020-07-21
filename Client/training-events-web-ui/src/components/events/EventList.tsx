import React from 'react';
import {TrainingEvent} from "../../services/event/models/TrainingEvent";
import { makeStyles } from '@material-ui/core/styles';
import EventCard from "./EventCard";

type EventListProps = {
    events : Array<TrainingEvent>;
}


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },

});

const EventList:React.FC<EventListProps> = (props:EventListProps) => {

    const {events} = props;

    return (
        <React.Fragment>
        {events.map((event:TrainingEvent) => (
            <EventCard event={event} key={event.id}/>
            ))
        }
        </React.Fragment>
    );
}

export default EventList;

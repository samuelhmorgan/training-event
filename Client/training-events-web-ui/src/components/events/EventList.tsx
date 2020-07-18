import React from 'react';
import {TrainingEvent} from "../../services/event/models/TrainingEvent";

type EventListProps = {
    events : Array<TrainingEvent>;
}


const EventList:React.FC<EventListProps> = (props:EventListProps) => {
    return (
        <div/>
    );
}

export default EventList;

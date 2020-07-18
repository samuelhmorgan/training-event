import React, {Component} from "react";
import {TrainingEvent} from "../services/event/models/TrainingEvent";

type EventsViewProps = {
    isLoadingEvents: boolean;
    hasLoadingErrors:boolean;
    events : Array<TrainingEvent>;
}


export class EventsView extends Component<EventsViewProps>{
    componentDidMount() {

    }

    render(){
        return <div/>
    }
}

export default EventsView;



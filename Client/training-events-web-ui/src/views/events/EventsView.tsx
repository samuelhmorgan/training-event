import React, {Component} from "react";
import {TrainingEvent} from "../../services/event/models/TrainingEvent";
import {EventService} from "../../services/event";
import {connect} from "react-redux";
import {EventSearchCriteria} from "../../services/event/models/EventSearchCriteria";
import PageLayout from "../../components/app/page-layout/PageLayout";
import EventFilter from "../../components/events/EventFilter";
import LocationFilter from "../../components/events/LocationFilter";
import EventList from "../../components/events/EventList";

type EventsViewProps = {
    isLoadingEvents: boolean;
    hasLoadingErrors:boolean;
    events : Array<TrainingEvent>;
    error:string;
    search:( searchCriteria: EventSearchCriteria)=>any;
}

interface EventsViewState{
    searchCriteria:EventSearchCriteria
}

const mapStateToProps = (state:any) => ({
    isLoadingEvents: state.events.isLoadingEvents,
    events:state.events.events,
    error:state.events.error,
    hasLoadingErrors:state.events.hasLoadingError
});


const mapDispatchToProps = (dispatch:any) => ({
    search: (searchCriteria:EventSearchCriteria) => dispatch(new EventService().requestEvents(searchCriteria))
})

export class EventsView extends Component<EventsViewProps,EventsViewState>{

    constructor(props:EventsViewProps) {
        super(props);

        this.state = {
           searchCriteria : EventSearchCriteria.empty()
        };
    }

    componentDidMount() {
        const {search} = this.props;
        search(EventSearchCriteria.empty());
    }

    componentDidUpdate(prevProps: EventsViewProps) {

    }

    render(){
        const {isLoadingEvents,events,hasLoadingErrors,error} = this.props;

        if(isLoadingEvents){
            return <div><p>Loading</p></div>
        }
        if(hasLoadingErrors){
            return <div><p>error</p></div>
        }

        return (
            <PageLayout>
                <EventFilter/>
                <LocationFilter events={events}/>
                <EventList events={events}/>
            </PageLayout>
        )

    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(EventsView);


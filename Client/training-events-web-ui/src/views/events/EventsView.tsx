import React, {Component} from "react";
import {TrainingEvent} from "../../services/event/models/TrainingEvent";
import {EventService} from "../../services/event";
import {connect} from "react-redux";
import {EventSearchCriteria} from "../../services/event/models/EventSearchCriteria";

type EventsViewProps = {
    isLoadingEvents: boolean;
    hasLoadingErrors:boolean;
    events : Array<TrainingEvent>;
    error:string;
    search:( searchCriteria: EventSearchCriteria)=>any;
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

export class EventsView extends Component<EventsViewProps>{

    handleSearch = (searchCriteria: EventSearchCriteria) => {
        this.props.search(searchCriteria)
    }

    componentDidMount() {

    }

    render(){
        return <div>
            <p>Test</p>
        </div>
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(EventsView);


import React, {Component} from "react";
import {TrainingEvent} from "../../services/event/models/TrainingEvent";
import {EventService, MockEventService} from "../../services/event";
import {connect} from "react-redux";
import {EventSearchCriteria} from "../../services/event/models/EventSearchCriteria";
import PageLayout from "../../components/app/page-layout/PageLayout";
import EventFilter from "../../components/events/EventFilter";
import LocationFilter from "../../components/events/LocationFilter";
import EventList from "../../components/events/EventList";
import {CircularProgress, Grid} from "@material-ui/core";

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

const mapStateToProps = (state:any) => {
    return {
    isLoadingEvents: state.events.isLoadingEvents,
    events:state.events.events,
    error:state.events.error,
    hasLoadingErrors:state.events.hasLoadingError
    }
};


const mapDispatchToProps = (dispatch:any) => ({
    search: (searchCriteria:EventSearchCriteria) => dispatch(new MockEventService().requestEvents(searchCriteria))
})

class EventsView extends Component<EventsViewProps,EventsViewState>{

    constructor(props:EventsViewProps) {
        super(props);
        this.state = {
            searchCriteria : EventSearchCriteria.empty()
        };
    }

    componentDidMount() {
        const {search} = this.props;
        search(this.state.searchCriteria);
    }

    componentDidUpdate(prevProps: EventsViewProps) {

    }

    render(){
        const {isLoadingEvents,events,hasLoadingErrors,error} = this.props;

        if(isLoadingEvents){
            return (
                <PageLayout>
                    <div>
                        <Grid item xs={12} style={{textAlign: "center"}}>
                            <CircularProgress />
                        </Grid>
                    </div>
                </PageLayout>
            )
        }

        if(hasLoadingErrors){
            return (
                <PageLayout>
                    <div><p>{error}</p></div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <EventFilter/>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <LocationFilter events={events} center={{lat: 59.95, lng: 30.33}} zoom={11}/>
                    </Grid>
                    <Grid item>
                        <EventList events={events}/>
                    </Grid>

                </Grid>
            </PageLayout>
        )

    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(EventsView);


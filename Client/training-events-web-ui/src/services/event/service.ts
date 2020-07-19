import {receiveEvents,requestEvents,receiveEventsError} from "./actions"
import {EventSearchCriteria} from "./models/EventSearchCriteria";
import {IApiService, RestApiService} from "../rest/apiservice";
import {TrainingEvent} from "./models/TrainingEvent";
import {OperationResult} from "../shared/operationresult";

import mockevents from "../../assets/mockdata/events";

export interface IEventService{
    requestEvents(searchCriteria:EventSearchCriteria):(dispatch:any)=>Promise<void>;
}

export class EventService implements IEventService{

    private readonly apiService:IApiService;

    constructor() {
        this.apiService = new RestApiService();
    }

    requestEvents(searchCriteria: EventSearchCriteria): (dispatch:any)=>Promise<void> {
        const endpoint = 'events';
        return (dispatch) => {
            dispatch(requestEvents());

            return this.apiService.makeRequest<OperationResult<Array<TrainingEvent>>>(endpoint, 'POST',searchCriteria)
                .then((operationResult) => {
                    if(operationResult.isSuccess){
                        dispatch(receiveEvents(operationResult.data));
                    }else {
                        dispatch(receiveEventsError("An Error Occured while Processing Request"));
                    }
                })
                .catch((ex) => {
                    dispatch(receiveEventsError(ex));
                });
        };
    }
}


export class MockEventService implements IEventService{

    requestEvents(searchCriteria: EventSearchCriteria): (dispatch:any)=>Promise<void> {
        return (dispatch) => {
            dispatch(requestEvents());

            return Promise.resolve().then(()=>{
               setTimeout(()=> dispatch(receiveEvents(mockevents)),3000);
            });
        };
    }
}



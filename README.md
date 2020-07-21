Welcome to an Example App using the following stack 
 - ReactJS/Redux/ 
 - .Net Core
 - MongoDB

#Getting Started

*Run via Docker Compose*

- From the root directory - run `docker-compose up`
- Navigate to http://localhost:3001/events


*Run the UI Locally*
- run `npm install`
- run `npm start`

*Real Data instead of Mock* 

Note that the backend requires a DB connection to MongoDB / Cosmos etc/. As a result  - the UI is set to mock data using the `MockEventService`.
To replace this with the real REST Service - switch out the `MockEventService` in `EventView.tsx` 
with the `EventService` implementation

`
const mapDispatchToProps = (dispatch:any) => ({
    search: (searchCriteria:EventSearchCriteria) => dispatch(new MockEventService().requestEvents(searchCriteria))
})`

should become 
`
const mapDispatchToProps = (dispatch:any) => ({
    search: (searchCriteria:EventSearchCriteria) => dispatch(new EventService().requestEvents(searchCriteria))
})` 
 
*Plans for Future*
- Test Cases
- Improve CSS Work
- Render Locations on Google Map

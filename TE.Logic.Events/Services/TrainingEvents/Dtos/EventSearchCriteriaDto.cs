using System;

namespace TE.Logic.Events.Services.TrainingEvents.Dtos
{
    public class EventSearchCriteriaDto
    {
        public string Keyword { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public GeoLocationDto SouthWestCorner { get; set; }
        public GeoLocationDto NorthEastCorner { get; set; }
    }
}

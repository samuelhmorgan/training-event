using System;

namespace TrainingEvents.Web.Api.Models.Events
{
    public class SearchCriteriaViewModel
    {
        public string Keyword { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public GeoLocationViewModel NorthWestCorner { get; set; }
        public GeoLocationViewModel SouthEastCorner { get; set; }
    }

    public class GeoLocationViewModel
    {
        public long Latitude { get; set; }
        public long Longitude { get; set; }
    }
}

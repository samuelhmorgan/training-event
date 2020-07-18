using System;

namespace TrainingEvents.Web.Api.Models.Events
{
    public class SearchCriteriaViewModel
    {
        public string Keyword { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public GeoLocationViewModel SouthWestCorner { get; set; }
        public GeoLocationViewModel NorthEastCorner { get; set; }
    }

    public class GeoLocationViewModel
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}

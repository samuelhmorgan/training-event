using System;
using System.Collections.Generic;
using MongoDB.Driver.GeoJsonObjectModel;

namespace TE.Domain.Events.Entities
{
    public class TrainingEvent : TEEntity
    {
        public string Title { get; set; }
        public DateTime StartTimeAsUtc { get; set; }
        public string ImageUrl { get; set; }
        public TrainingEventLocation Location { get; set; }
        public ICollection<AvailableSeat> AvailableSeats { get; set; }

        public string Description { get; set; }
    }

    public class TrainingEventLocation
    {
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public GeoJsonPoint<GeoJson2DGeographicCoordinates> LatLon { get; set; }
    }

    public class AvailableSeat
    {
        public string SeatId { get; set; }
    }
}

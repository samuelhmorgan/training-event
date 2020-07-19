using System;
using System.Collections.Generic;

namespace TrainingEvents.Web.Api.Models.Events
{
    public class EventResponseDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public DateTime StartTimeAsUtc { get; set; }
        public string ImageUrl { get; set; }
        public EventResponseLocationDto Location { get; set; }
        public IEnumerable<AvailableSeatResponseDto> AvailableSeats { get; set; }
        public DateTime LastUpdated { get; set; }
        public DateTime CreatedOn { get; set; }

        public string Description { get; set; }
    }

    public class EventResponseLocationDto
    {
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        public GeoLocationResponseDto Location { get; set; }
    }

    public class GeoLocationResponseDto
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }

    public class AvailableSeatResponseDto
    {
        public string SeatId { get; set; }
    }
}

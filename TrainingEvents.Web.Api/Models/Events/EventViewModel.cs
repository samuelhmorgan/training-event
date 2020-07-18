using System;
using System.Collections.Generic;
using System.Linq;

namespace TrainingEvents.Web.Api.Models.Events
{
    public class EventViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public DateTime StartTimeAsUtc { get; set; }
        public string ImageUrl { get; set; }
        public EventResponseLocationViewModel Location { get; set; }
        public IEnumerable<AvailableSeatResponseViewModel> AvailableSeats { get; set; }
        public DateTime LastUpdated { get; set; }
        public DateTime CreatedOn { get; set; }

        public EventViewModel(EventResponseDto eventResponseDto)
        {
            Id = eventResponseDto.Id;
            Title = eventResponseDto.Title;
            StartTimeAsUtc = eventResponseDto.StartTimeAsUtc;
            ImageUrl = eventResponseDto.ImageUrl;
            Location = new EventResponseLocationViewModel(eventResponseDto.Location);
            AvailableSeats = eventResponseDto.AvailableSeats.Select(a => new AvailableSeatResponseViewModel(a));
            LastUpdated = eventResponseDto.LastUpdated;
            CreatedOn = eventResponseDto.CreatedOn;
        }
    }




    public class EventResponseLocationViewModel
    {
        public EventResponseLocationViewModel(EventResponseLocationDto location)
        {
            City = location.City;
            State = location.State;
            Country = location.Country;
            Location = new GeoLocationViewModel()
            {
                Latitude = location.Location.Latitude,
                Longitude = location.Location.Longitude
            };
        }

        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        public GeoLocationViewModel Location { get; set; }
    }

    public class AvailableSeatResponseViewModel
    {
        public AvailableSeatResponseViewModel(AvailableSeatResponseDto availableSeatResponseDto)
        {
            SeatId = availableSeatResponseDto.SeatId;
        }

        public string SeatId { get; set; }
    }
}

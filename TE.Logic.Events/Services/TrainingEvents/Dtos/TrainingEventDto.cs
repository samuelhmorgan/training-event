using System;
using System.Collections.Generic;
using System.Linq;
using TE.Domain.Events.Entities;

namespace TE.Logic.Events.Services.TrainingEvents.Dtos
{
    public class TrainingEventDto
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public DateTime StartTimeAsUtc { get; set; }
        public string ImageUrl { get; set; }
        public TrainingEventLocationDto Location { get; set; }
        public IEnumerable<AvailableSeatDto> AvailableSeats { get; set; }
        public DateTime LastUpdated { get; set; }
        public DateTime CreatedOn { get; set; }

        public string Description { get; set; }

        public TrainingEventDto(TrainingEvent trainingEvent)
        {

            Id = trainingEvent.Id;
            Title = trainingEvent.Title;
            StartTimeAsUtc = trainingEvent.StartTimeAsUtc;
            ImageUrl = trainingEvent.ImageUrl;
            Description = Description;
            Location = new TrainingEventLocationDto()
            {
                City = trainingEvent.Location.City,
                Country = trainingEvent.Location.Country,
                State = trainingEvent.Location.State,
                Location = new GeoLocationDto()
                {
                 Latitude  = trainingEvent.Location.LatLon.Coordinates.Latitude,
                 Longitude =  trainingEvent.Location.LatLon.Coordinates.Longitude
                }
            };
            AvailableSeats = trainingEvent.AvailableSeats.Select(a => new AvailableSeatDto()
            {
                SeatId = a.SeatId
            });
            LastUpdated = trainingEvent.LastModified;
            CreatedOn = trainingEvent.CreatedOn;
        }
    }
}

using System;
using System.Collections.Generic;

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
    }
}
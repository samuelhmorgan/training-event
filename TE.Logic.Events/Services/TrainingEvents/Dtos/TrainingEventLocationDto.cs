namespace TE.Logic.Events.Services.TrainingEvents.Dtos
{
    public class TrainingEventLocationDto
    {
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        public GeoLocationDto Location { get; set; }
    }
}

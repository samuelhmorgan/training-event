using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using TE.Domain.Events;
using TE.Domain.Events.Entities;
using TE.Logic.Events.Services.TrainingEvents.Dtos;
using TE.Shared;

namespace TE.Logic.Events.Services.TrainingEvents
{
    public class TrainingEventService : ITrainingEventService
    {
        private readonly IDbContext _dbContext;

        public TrainingEventService(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public OperationResult<IEnumerable<TrainingEventDto>> GetEvents(EventSearchCriteriaDto searchCriteria)
        {
            var withinDateRange = Builders<TrainingEvent>.Filter.And(
                Builders<TrainingEvent>.Filter.Gte(evt => evt.StartTimeAsUtc, searchCriteria.StartDate),
                Builders<TrainingEvent>.Filter.Lte(evt => evt.StartTimeAsUtc, searchCriteria.EndDate)
            );

            var withinLocationBox = Builders<TrainingEvent>.Filter.GeoWithinBox(evt => evt.Location.LatLon,
                searchCriteria.SouthWestCorner.Longitude, searchCriteria.SouthWestCorner.Latitude,
                searchCriteria.NorthEastCorner.Longitude, searchCriteria.NorthEastCorner.Latitude);

            var otherFilters = Builders<TrainingEvent>.Filter.And(withinDateRange, withinLocationBox);

            var filter  = Builders<TrainingEvent>.Filter.And(Builders<TrainingEvent>.Filter.Text(searchCriteria.Keyword),
                otherFilters);


            var foundEvents = _dbContext.TrainingEvents.Find(filter);

            var results = foundEvents.ToList().Select(a => new TrainingEventDto(a));
            return new OperationResult<IEnumerable<TrainingEventDto>>(results);
        }
    }
}

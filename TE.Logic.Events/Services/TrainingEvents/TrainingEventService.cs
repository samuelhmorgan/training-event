using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task<OperationResult<IEnumerable<TrainingEventDto>>> GetEvents(EventSearchCriteriaDto searchCriteria)
        {
            var filter = Builders<TrainingEvent>.Filter.Empty;

            if (!string.IsNullOrEmpty(searchCriteria.Keyword))
            {
                filter  = Builders<TrainingEvent>.Filter.And(Builders<TrainingEvent>.Filter.Text(searchCriteria.Keyword),
                    filter);
            }

            if (searchCriteria.StartDate != DateTime.MinValue && searchCriteria.EndDate != DateTime.MinValue)
            {
                var withinDateRange = Builders<TrainingEvent>.Filter.And(
                    Builders<TrainingEvent>.Filter.Gte(evt => evt.StartTimeAsUtc, searchCriteria.StartDate),
                    Builders<TrainingEvent>.Filter.Lte(evt => evt.StartTimeAsUtc, searchCriteria.EndDate)
                );

                filter  = Builders<TrainingEvent>.Filter.And(withinDateRange,
                    filter);
            }


            if (searchCriteria.NorthEastCorner != null && searchCriteria.SouthWestCorner != null)
            {
                var withinLocationBox = Builders<TrainingEvent>.Filter.GeoWithinBox(evt => evt.Location.LatLon,
                    searchCriteria.SouthWestCorner.Longitude, searchCriteria.SouthWestCorner.Latitude,
                    searchCriteria.NorthEastCorner.Longitude, searchCriteria.NorthEastCorner.Latitude);

                filter  = Builders<TrainingEvent>.Filter.And(withinLocationBox,
                    filter);
            }
            
            var foundEvents = await _dbContext.TrainingEvents.FindAsync(filter);

            var results = foundEvents.ToList().Select(a => new TrainingEventDto(a));
            return new OperationResult<IEnumerable<TrainingEventDto>>(results);
        }
    }
}

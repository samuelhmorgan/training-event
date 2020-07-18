using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using TE.Domain.Events;
using TE.Logic.Events.Services.TrainingEvents.Dtos;
using TE.Logic.Events.Shared;

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
            throw new NotImplementedException();
        }
    }
}

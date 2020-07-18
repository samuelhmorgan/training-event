using System.Collections.Generic;
using TE.Logic.Events.Services.TrainingEvents.Dtos;
using TE.Shared;

namespace TE.Logic.Events.Services.TrainingEvents
{
    public interface ITrainingEventService
    {
        OperationResult<IEnumerable<TrainingEventDto>> GetEvents(EventSearchCriteriaDto searchCriteria);
    }
}

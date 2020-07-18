using System.Collections.Generic;
using System.Threading.Tasks;
using TE.Logic.Events.Services.TrainingEvents.Dtos;
using TE.Shared;

namespace TE.Logic.Events.Services.TrainingEvents
{
    public interface ITrainingEventService
    {
        Task<OperationResult<IEnumerable<TrainingEventDto>>> GetEvents(EventSearchCriteriaDto searchCriteria);
    }
}

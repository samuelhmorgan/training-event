using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TE.Logic.Events.Services.TrainingEvents;
using TE.Logic.Events.Services.TrainingEvents.Dtos;
using TE.Shared;

namespace TE.Server.Events.Controllers
{
    [ApiController]
    [Route("training-events")]
    public class TrainingEventController : ControllerBase
    {
        private readonly ITrainingEventService _trainingEventService;

        public TrainingEventController(ITrainingEventService trainingEventService)
        {
            _trainingEventService = trainingEventService;
        }

        [HttpGet]
        public Task<OperationResult<IEnumerable<TrainingEventDto>>> Get(EventSearchCriteriaDto searchCriteriaDto)
        {
            var results = _trainingEventService.GetEvents(searchCriteriaDto);
            return results;
        }
    }
}

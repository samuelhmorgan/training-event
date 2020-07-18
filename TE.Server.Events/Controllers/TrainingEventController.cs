using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TE.Logic.Events.Services.TrainingEvents;
using TE.Logic.Events.Services.TrainingEvents.Dtos;
using TE.Logic.Events.Shared;

namespace TE.Server.Events.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TrainingEventController : ControllerBase
    {
        private readonly ITrainingEventService _trainingEventService;

        public TrainingEventController(ITrainingEventService trainingEventService)
        {
            _trainingEventService = trainingEventService;
        }

        [HttpGet]
        public OperationResult<IEnumerable<TrainingEventDto>> Get(EventSearchCriteriaDto searchCriteriaDto)
        {
            var results = _trainingEventService.GetEvents(searchCriteriaDto);
            return results;
        }
    }
}

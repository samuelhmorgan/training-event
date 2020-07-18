using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using TE.Shared;
using TrainingEvents.Web.Api.Models.Events;
using TrainingEvents.Web.Api.Services;

namespace TrainingEvents.Web.Api.Controllers
{
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly MicroservicesSetting _microservicesSetting;
        private readonly HttpClient _client;

        public EventsController(IOptionsSnapshot<MicroservicesSetting> microservicesSetting)
        {
            _microservicesSetting = microservicesSetting.Value;
            _client = new HttpClient();
        }

        [HttpPost]
        public async Task<IActionResult> GetEvents([FromBody] SearchCriteriaViewModel searchCriteria)
        {
            var url = $"{_microservicesSetting.TrainingEventsBaseUrl}/training-events";

            var requestMessage = new HttpRequestMessage(HttpMethod.Post, url)
            {
                Content = new StringContent(JsonConvert.SerializeObject(searchCriteria), System.Text.Encoding.UTF8,
                    "application/json")
            };

            var response = await _client.SendAsync(requestMessage);

            var dataString = await response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject<OperationResult<List<EventResponseDto>>>(dataString);

            if (!result.IsSuccess) {return new JsonResult(result);}

            var eventResults = new OperationResult<IEnumerable<EventViewModel>>(result.Data.Select(a=>new EventViewModel(a)));
            return new JsonResult(eventResults);

        }
    }
}

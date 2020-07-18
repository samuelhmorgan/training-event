using MongoDB.Driver;
using TE.Domain.Events.Entities;

namespace TE.Domain.Events
{
    public interface IDbContext
    {
        public IMongoCollection<TrainingEvent> TrainingEvents { get; }
    }
}

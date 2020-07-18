using System;
using MongoDB.Driver;
using TE.Domain.Events.Entities;

namespace TE.Domain.Events
{
    public class DbContext : IDbContext
    {
        public IMongoCollection<TrainingEvent> TrainingEvents { get; }

        public DbContext(IMongoDatabase database)
        {
            TrainingEvents = database.GetCollection<TrainingEvent>("TrainingEvents");
        }
    }
}

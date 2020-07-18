using System;
using MongoDB.Driver;

namespace TE.Domain.Events
{
    public class DbContext : IDbContext
    {
        public DbContext(IMongoDatabase database)
        {
        }
    }
}

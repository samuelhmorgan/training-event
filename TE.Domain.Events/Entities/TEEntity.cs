using System;
using MongoDB.Bson.Serialization.Attributes;

namespace TE.Domain.Events.Entities
{
    public class TEEntity
    {
        [BsonId]
        public string Id { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }
    }
}

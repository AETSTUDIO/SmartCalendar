using System.Collections.Generic;

namespace Smart_Calendar.Domain.Entities
{
    public class Position
    {
        public int PositionId { get; set; }
        public string Name { get; set; }

        public ICollection<User> Users { get; set; }

    }
}

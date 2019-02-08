using System;
using System.Collections.Generic;
using System.Text;

namespace Smart_Calendar.Domain.Entities
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string Name { get; set; }

        public ICollection<User> Users { get; set; }
    }
}

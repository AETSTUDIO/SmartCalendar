using System.Collections.Generic;

namespace Smart_Calendar.Domain.Entities
{

    public class LeaveCategory
    {
        public int LeaveCategoryId { get; set; }

        public string LeaveType { get; set; }

        public ICollection<LeaveRequest> LeaveRequest { get; set; }
    }

}

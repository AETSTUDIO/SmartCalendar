using System.Collections.Generic;

namespace Smart_Calendar.Domain.Entities
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public ICollection<Account> Accounts { get; set; }
    }
}

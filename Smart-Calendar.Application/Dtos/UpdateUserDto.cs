using System;
using System.Collections.Generic;
using System.Text;
using Smart_Calendar.Domain.Entities;

namespace Smart_Calendar.Application.Dtos
{
    public class UpdateUserDto
    {
        public User User { get; set; }
        public UserShift UserShift { get; set; }
    }
}

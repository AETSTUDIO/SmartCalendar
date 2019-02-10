using System;
using System.Collections.Generic;
using System.Text;

namespace Smart_Calendar.Application.Helper.JWT
{
    public interface IJWTHelper
    {
        string GenerateToken(string email);
    }
}

using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace Smart_Calendar.Application.Dtos
{
    public class TokenResponseDto
    {
        public string Token { get; set; }
        public HttpStatusCode Code { get; set; }
    }
}

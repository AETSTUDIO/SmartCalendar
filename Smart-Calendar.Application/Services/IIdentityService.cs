using Smart_Calendar.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Smart_Calendar.Application.Services
{
    public interface IIdentityService
    {
        Task<TokenResponseDto> CreateAccountAsync(RegisterDto registerDto);
        Task<TokenResponseDto> LoginAsync(LoginDto credential);
    }
}

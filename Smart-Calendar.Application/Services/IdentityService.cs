using Smart_Calendar.Application.Dtos;
using Smart_Calendar.Application.Repositories;
using Smart_Calendar.Domain.Entities;
using System.Threading.Tasks;

namespace Smart_Calendar.Application.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly IBaseRepo<Account> _accountRepo;

        public IdentityService(IBaseRepo<Account> accountRepo)
        {
            _accountRepo = accountRepo;
        }
        public async Task<TokenResponseDto> CreateAccountAsync(RegisterDto registerDto)
        {
            var token = "work";
            byte[] hash, salt;
            PasswordHashing(out hash, out salt, registerDto.Password);
            Account account = new Account
            {
                Email = registerDto.Email,
                RoleId = registerDto.RoleId,
                PasswordHash = hash,
                PasswordSalt = salt
            };
            await _accountRepo.CreateAsync(account);
            return new TokenResponseDto
            {
                Token = token
            };
        }
        private void PasswordHashing(out byte[] hash, out byte[] salt, string password)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                hash = hmac.Key;
                salt = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}

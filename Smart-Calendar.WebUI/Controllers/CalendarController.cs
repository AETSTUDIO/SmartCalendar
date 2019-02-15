using Microsoft.AspNetCore.Mvc;
using Smart_Calendar.Application.Repositories;
using Smart_Calendar.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace Smart_Calendar.WebUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalendarController : ControllerBase
    {
        private readonly IBaseRepo<User> _userRepo;

        public CalendarController(IBaseRepo<User> userRepo)
        {
            _userRepo = userRepo;
        }
        // GET api/values
        [HttpGet("User")]
        public async Task<IActionResult> GetUserList()
        {
            var results = await _userRepo.GetAllAsync(c => c.Department, c => c.Account);
            var list = new List<UserVM>();
            foreach (var user in results)
            {
                list.Add(new UserVM { Id = user.UserId, Department = user.Department.Name });
            }
            return Ok(list);
        }
        // GET api/values
        [HttpGet("User/{id}")]
        public async Task<IActionResult> GetUserListById(Guid id)
        {
            return Ok( _userRepo.Get(d => d.UserId == new Guid("c45d233c-a3b4-42b1-a91a-0d044a35c0f2")));
        }
    }

    internal class UserVM
    {
        public Guid Id { get; set; }
        public string Department { get; set; }
    }
}
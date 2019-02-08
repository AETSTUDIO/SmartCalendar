using Microsoft.EntityFrameworkCore;
using Smart_Calendar.Domain.Entities;
using Smart_Calendar.Persistence.Extensions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Smart_Calendar.Persistence
{
    public class SmartCalendarDbContext : DbContext
    {
        public SmartCalendarDbContext(DbContextOptions options) : base (options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyAllConfigurations();
        }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<LeaveCategory> LeaveCategories { get; set; }
        public DbSet<LeaveRequest> LeaveRequests { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Shift> Shifts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserShift> UserShifts { get; set; }
    }
}

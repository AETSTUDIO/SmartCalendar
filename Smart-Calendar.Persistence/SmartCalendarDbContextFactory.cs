using Microsoft.EntityFrameworkCore;
using Smart_Calendar.Persistence.Infrastruture;
using System;
using System.Collections.Generic;
using System.Text;

namespace Smart_Calendar.Persistence
{
    public class SmartCalendarDbContextFactory : DesignTimeDbContextFactoryBase<SmartCalendarDbContext>
    {
        protected override SmartCalendarDbContext CreateNewInstance(DbContextOptions<SmartCalendarDbContext> options)
        {
            return new SmartCalendarDbContext(options);
        }
    }
}

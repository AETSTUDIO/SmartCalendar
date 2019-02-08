using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Calendar.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Smart_Calendar.Persistence.Configurations
{
    class ShiftConfiguration : IEntityTypeConfiguration<Shift>
    {
        public void Configure(EntityTypeBuilder<Shift> builder)
        {
            //builder.HasMany(u => u.UserShift).WithOne(s => s.Shift).HasForeignKey(fk => fk.UserShiftId);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Calendar.Domain.Entities;

namespace Smart_Calendar.Persistence.Configurations
{
    internal class LeaveCategoryConfiguration : IEntityTypeConfiguration<LeaveCategory>
    {
        public void Configure(EntityTypeBuilder<LeaveCategory> builder)
        {
            builder.HasMany(l => l.LeaveRequest).WithOne(l => l.LeaveCategory).HasForeignKey(fk => fk.LeaveCategoryId);
            builder.Property(l => l.LeaveType).IsRequired().HasMaxLength(1000);
        }
    }
}

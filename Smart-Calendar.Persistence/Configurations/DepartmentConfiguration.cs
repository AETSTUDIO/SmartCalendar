using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Calendar.Domain.Entities;

namespace Smart_Calendar.Persistence.Configurations
{
    internal class DepartmentConfiguration : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.HasMany(u => u.Users).WithOne(d => d.Department).HasForeignKey(fk => fk.DepartmentId);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Calendar.Domain.Entities;

namespace Smart_Calendar.Persistence.Configurations
{
    internal class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasMany(a => a.Accounts).WithOne(r => r.Role).HasForeignKey(fk => fk.RoleId);
        }
    }
}

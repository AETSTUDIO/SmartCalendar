using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smart_Calendar.Domain.Entities;

namespace Smart_Calendar.Persistence.Configurations
{
    internal class PositionConfiguration : IEntityTypeConfiguration<Position>
    {
        public void Configure(EntityTypeBuilder<Position> builder)
        {
            builder.HasMany(u => u.Users).WithOne(p => p.Position).HasForeignKey(fk => fk.PositionId);
            builder.Property(p => p.Name).IsRequired();
        }
    }
}

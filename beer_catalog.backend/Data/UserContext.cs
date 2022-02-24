using Microsoft.EntityFrameworkCore;

namespace beer_catalog.backend;

public class UserContext : DbContext
{
    public DbSet<User> Users { get; set; } = null!;
    public UserContext(DbContextOptions<UserContext> options)
        : base(options)
    {
        Database.EnsureCreated();
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); });
    }

}
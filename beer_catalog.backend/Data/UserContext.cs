using Microsoft.EntityFrameworkCore;
using System.Text;

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
        // modelBuilder.Entity<User>().HasData(
        //     new User { Id = 1, Name = "Tom", Email = "example@com", BirthDate = new DateTime(1999, 2, 27), Image =  Encoding.ASCII.GetBytes("image.jpg"), Password="123456" }
        // );
        modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); });
    }

}
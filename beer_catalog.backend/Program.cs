using beer_catalog.backend.Helpers;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

string connection = builder.Configuration.GetConnectionString("DefaultConnection");

// Add services to the container.
builder.Services.AddCors();

builder.Services.AddDbContext<UserContext>(options => options.UseSqlServer(connection));
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<JwtService>();

var app = builder.Build();

app.MapGet("/api/users", async (UserContext db) => await db.Users.ToListAsync());

app.MapGet("/api/users/{id:int}", async (int id, UserContext db) =>
{
    User? user = await db.Users.FirstOrDefaultAsync(u => u.Id == id);
    if (user == null) return Results.NotFound(new { message = "User is not found" });

    return Results.Json(user);
});

app.MapDelete("/api/users/{id:int}", async (int id, UserContext db) =>
{
    User? user = await db.Users.FirstOrDefaultAsync(u => u.Id == id);
    if (user == null) return Results.NotFound(new { message = "User is not found" });

    db.Users.Remove(user);
    await db.SaveChangesAsync();

    return Results.Json(user);
});

app.MapPost("/api/users", async (User user, UserContext db) =>
{
    await db.Users.AddAsync(user);
    await db.SaveChangesAsync();

    return user;
});

app.MapPut("api/users", async (User userData, UserContext db) =>
{
    User? user = await db.Users.FirstOrDefaultAsync(u => u.Id == userData.Id);
    if (user == null) return Results.NotFound(new { message = "User is not found" });

    user.Name = userData.Name;
    user.Email = userData.Email;
    user.BirthDate = userData.BirthDate;
    user.Image = userData.Image;

    await db.SaveChangesAsync();

    return Results.Json(user);
});
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();

app.UseCors(options => options
    .WithOrigins(new[] { "http://localhost:3000", "http://localhost:7192" })
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()
);

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

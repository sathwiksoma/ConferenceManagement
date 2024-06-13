using ConferenceManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace ConferenceManagement.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Conference> Conferences { get; set; }
    }
}

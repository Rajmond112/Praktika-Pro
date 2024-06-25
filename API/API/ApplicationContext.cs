
using API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.HasDefaultSchema("dbo");


            builder.Entity<User>(entity =>
            {
                entity.ToTable("User");
            });

            builder.Entity<ActivityLog>(entity =>
            {
                entity.ToTable("ActivityLog");
            });


            builder.Entity<Friends>(entity =>
            {
                entity.ToTable("Friends");
                entity.HasNoKey();
            });

            builder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("Vehicle");
                entity.HasNoKey();
            });


            foreach (var relationship in builder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.NoAction;
            }
        }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<ActivityLog> ActLog { get; set; }
        public virtual DbSet<Friends> FriendsNumb { get; set; }

        public virtual DbSet<Vehicle> Vehicles { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Wizzer.Data.Entities;
using Wizzer.Data.Identities;

namespace Wizzer.Data
{
    public class WizzerContext : IdentityDbContext<User>
    {
        public WizzerContext(DbContextOptions<WizzerContext> options) : base(options)
        {
  
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }



    }
}

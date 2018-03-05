using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Wizzer.Data.Entities;

namespace Wizzer.Data
{
    public class WizzerContext : DbContext
    {
        public WizzerContext(DbContextOptions<WizzerContext> options) : base(options)
        {
            
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

    }
}

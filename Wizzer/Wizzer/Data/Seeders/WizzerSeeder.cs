using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Seeders
{
    public class WizzerSeeder
    {
        private readonly WizzerContext _context;
        private readonly IHostingEnvironment _hosting;

        public WizzerSeeder(WizzerContext context, IHostingEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public void Seed()
        {
            _context.Database.EnsureCreated();

            //If there is nothing in Product
            if (_context.Products.Any())
                return;
            var filepath = Path.Combine(_hosting.ContentRootPath, "Data/testdata.json");
            var json = File.ReadAllText(filepath);
            var products = JsonConvert.DeserializeObject<List<Product>>(json);
            _context.Products.AddRange(products);

            var order = new Order()
            {
                OrderDate = DateTime.Now,
                OrderNumber = "1235",
                Items = new List<OrderItem>() {
                    new OrderItem() {
                        Product = products.First(),
                        Quantity = 5,
                        UnitPrice = products.First().Price
                    }
                }
            };

            _context.Add(order);
            _context.SaveChanges();
        }
    }
}

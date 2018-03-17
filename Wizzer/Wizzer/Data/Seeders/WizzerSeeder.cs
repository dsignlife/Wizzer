using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Wizzer.Data.Entities;
using Wizzer.Data.Identities;

namespace Wizzer.Data.Seeders
{
    public class WizzerSeeder
    {
        private readonly WizzerContext _context;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<User> _userManager;

        public WizzerSeeder(WizzerContext context, IHostingEnvironment hosting, UserManager<User> userManager)
        {
            _context = context;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task Seed()
        {
            _context.Database.EnsureCreated();


            var user = await _userManager.FindByEmailAsync("eva.odin@wizzer.se");
            if (user == null)
            {
                user = new User()
                {
                    FirstName = "Eva",
                    LastName = "Odin",
                    UserName = "eva.odin@wizzer.se",
                    Email = "eva.odin@wizzer.se"
                };

                var result = await _userManager.CreateAsync(user, "EvaOdin10");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create default Login");
                }
            }

            //If there is something in Product
            if (_context.Products.Any())
                return;
            var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/testdata.json");
            var json = File.ReadAllText(filepath);
            var products = JsonConvert.DeserializeObject<List<Product>>(json);
            _context.Products.AddRange(products);

            var order = new Order()
            {
                OrderDate = DateTime.Now,
                OrderNumber = "1235",
                User = user,
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

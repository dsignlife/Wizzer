using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly WizzerContext _context;
        private readonly ILogger<ProductRepository> _logger;

        public ProductRepository(WizzerContext context, ILogger<ProductRepository> logger)
        {
            _context = context;
            _logger = logger;
        }
        public List<Product> GetAllProducts()
        {

            try
            {
                _logger.LogInformation("GetAllProducts called");
                return _context.Products.OrderBy(t => t.Title).Include(c => c.Category).Take(10).ToList();
            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllProducts failed : {e}");
                return null;
            }


        }

        public List<Product> GetAllProductsByCategory(string category)
        {
            return _context.Products.Where(c => category == c.Category.CategoryName).ToList();
        }
    }
}

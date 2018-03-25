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
        public Task<List<Product>> GetAllProductsAsync()
        {

            try
            {

                return _context.Products.OrderBy(t => t.Title).Include(c => c.Category).ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllProductsAsync failed : {e}");
                return null;
            }

        }

    }
}

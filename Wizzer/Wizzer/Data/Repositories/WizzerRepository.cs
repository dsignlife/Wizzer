using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public class WizzerRepository : IWizzerRepository
    {
        private readonly WizzerContext _context;
        private readonly ILogger<WizzerRepository> _logger;

        public WizzerRepository(WizzerContext context, ILogger<WizzerRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public List<Product> GetAllProducts()
        {

            try
            {
                _logger.LogInformation("GetAllProducts called");
                return _context.Products.OrderBy(t => t.Title).ToList();
            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllProducts failed : {e}");
                return null;
            }


        }

        public List<Product> GetAllProductsByCategory(string category)
        {
            return _context.Products.Where(c => c.Category == category).ToList();
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }

    }
}

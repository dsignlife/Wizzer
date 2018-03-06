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

        public void AddEntity(object model)
        {
            _context.Add(model);
        }

        public List<Order> GetAllOrders(bool includeItems)
        {
            return includeItems ? _context.Orders
                                          .Include(i => i.Items)
                                          .ThenInclude(p => p.Product)
                                          .ToList() : _context.Orders
                                                              .Include(i => i.Items)
                                                              .ToList();
        }

        public Order GetOrderById(int id)
        {
            return _context.Orders
                           .Include(i => i.Items)
                           .ThenInclude(p => p.Product)
                           .FirstOrDefault(d => d.Id == id);
        }
    }
}

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
    public class OrderRepository : IOrderRepository
    {
        private readonly WizzerContext _context;
        private readonly ILogger<OrderRepository> _logger;

        public OrderRepository(WizzerContext context, ILogger<OrderRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public void AddEntity(object model)
        {
            _context.Add(model);
        }

        public void AddOrder(Order newOrder)
        {
            foreach (var item in newOrder.Items)
            {
                item.Product = _context.Products.Find(item.Product.Id);
            }

            AddEntity(newOrder);
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }


        public List<Order> GetAllOrders(bool includeItems)
        {
            _logger.LogInformation("GetAllOrders called");
            return includeItems ? _context.Orders
                                          .Include(i => i.Items)
                                          .ThenInclude(p => p.Product)
                                          .ToList() : _context.Orders
                                                              .Include(i => i.Items)
                                                              .ToList();
        }

        public Order GetOrderById(string username, int id)
        {
            _logger.LogInformation("GetOrderById called");
            return _context.Orders
                           .Include(i => i.Items)
                           .ThenInclude(p => p.Product)
                           .Where(o => o.OrderId == id && o.User.UserName == username)
                           .FirstOrDefault(d => d.OrderId == id);
        }

        public List<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            _logger.LogInformation("GetAllOrdersByUser called");
            return includeItems ? _context.Orders
                                          .Where(u => u.User.UserName == username)
                                          .Include(i => i.Items)
                                          .ThenInclude(p => p.Product)
                                          .ToList() : _context.Orders
                                                              .Where(u => u.User.UserName == username)
                                                              .Include(i => i.Items)
                                                              .ToList();

        }

    }
}

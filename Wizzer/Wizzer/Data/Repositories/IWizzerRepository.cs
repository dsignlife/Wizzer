using System.Collections.Generic;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public interface IWizzerRepository
    {
        List<Product> GetAllProducts();
        List<Product> GetAllProductsByCategory(string category);

        List<Order> GetAllOrders(bool includeItems);
        List<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);
        void AddOrder(Order newOrder);

        bool SaveAll();
        void AddEntity(object model);
    }
}
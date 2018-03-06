using System.Collections.Generic;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public interface IWizzerRepository
    {
        List<Product> GetAllProducts();
        List<Product> GetAllProductsByCategory(string category);
        bool SaveAll();
        void AddEntity(object model);
        List<Order> GetAllOrders(bool includeItems);
        Order GetOrderById(int id);
    }
}
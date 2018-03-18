using System.Collections.Generic;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories {
    public interface IOrderRepository {
        void AddEntity(object model);
        void AddOrder(Order newOrder);
        bool SaveAll();
        List<Order> GetAllOrders(bool includeItems);
        Order GetOrderById(string username, int id);
        List<Order> GetAllOrdersByUser(string username, bool includeItems);
    }
}
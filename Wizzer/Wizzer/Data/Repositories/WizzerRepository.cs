//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.Logging;
//using Wizzer.Data.Entities;

//namespace Wizzer.Data.Repositories
//{
//    public class WizzerRepository : IWizzerRepository
//    {

//        public static IWizzerRepository wizzerRepository;


//        public List<Category> GetAllCategories()
//        {
//            return wizzerRepository.GetAllCategories();
//        }

//        public void AddEntity(object model)
//        {
//            wizzerRepository.AddEntity(model);
//        }

//        public void AddOrder(Order newOrder)
//        {
//            wizzerRepository.AddOrder(newOrder);
//        }

//        public bool SaveAll()
//        {
//            return wizzerRepository.SaveAll();
//        }

//        public List<Order> GetAllOrders(bool includeItems)
//        {
//            return wizzerRepository.GetAllOrders(includeItems);
//        }

//        public Order GetOrderById(string username, int id)
//        {
//            return wizzerRepository.GetOrderById(username, id);
//        }

//        public List<Order> GetAllOrdersByUser(string username, bool includeItems)
//        {
//            return wizzerRepository.GetAllOrdersByUser(username, includeItems);
//        }

//        public List<Product> GetAllProducts()
//        {
//            return wizzerRepository.GetAllProducts();
//        }

//        public List<Product> GetAllProductsByCategory(string category)
//        {
//            return wizzerRepository.GetAllProductsByCategory(category);
//        }
//    }
//}

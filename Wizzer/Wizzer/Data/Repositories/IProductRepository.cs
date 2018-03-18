using System.Collections.Generic;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories {
    public interface IProductRepository {
        List<Product> GetAllProducts();
        List<Product> GetAllProductsByCategory(string category);
    }
}
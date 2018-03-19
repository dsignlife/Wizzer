using System.Collections.Generic;
using System.Threading.Tasks;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories {
    public interface IProductRepository {
        Task<List<Product>> GetAllProductsAsync();
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetAllCategoriesAsync();
        Task<List<Product>> GetAllProductsByCategoryIdAsync(int id);
        Task<List<Product>> GetProductsByNameAsync(string name);
        Task<List<Product>> GetAllProductsByProductNameAndCategoryIdAsync(string category, int id);

    }
}
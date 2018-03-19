using System.Collections.Generic;
using System.Threading.Tasks;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCategories();
        Task<List<Product>> GetAllProductsByCategoryIdAsync(int id);
        List<Product> GetAllProductsByCategoryName(string category);

    }
}
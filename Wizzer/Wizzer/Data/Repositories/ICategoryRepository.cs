using System.Collections.Generic;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCategories();
        List<Product> GetAllProductsByCategoryId(int id);
        List<Product> GetAllProductsByCategoryName(string category);

    }
}
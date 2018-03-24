using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {

        private readonly WizzerContext _context;
        private readonly ILogger<CategoryRepository> _logger;

        public CategoryRepository(WizzerContext context, ILogger<CategoryRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public Task<List<Category>> GetAllCategoriesAsync()
        {
            try
            {
                _logger.LogInformation("GetAllCategories called");
                return _context.Categories.OrderBy(t => t.CategoryName).ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllCategories failed : {e}");
                return null;
            }


        }

        public Task<List<Product>> GetAllProductsByCategoryIdAsync(int id)
        {
            try
            {
                _logger.LogInformation("GetAllProductsByCategoryId called");
                var products = id > 0 ? _context.Products.Include(cat => cat.Category).Where(c => c.CategoryId == id)
                                                .OrderBy(a => a.CategoryId).ToListAsync() : null;

                return products;
            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllProductsByCategoryId failed : {e}");
                return null;
            }


        }

        public Task<List<Product>> GetProductsByNameAsync(string name)
        {
            try
            {

                _logger.LogInformation("GetProductsByNameAsync called");
                var products = _context.Products.Include(cat => cat.Category).Where(n => n.Title.Contains(name))
                                                                                .OrderBy(a => a.CategoryId).ToListAsync();

                return products;

            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllProductsByCategoryName failed : {e}");
                return null;

            }

        }


        public Task<List<Product>> GetAllProductsByProductNameAndCategoryIdAsync(string name, int id)
        {
            try
            {

                if (id < 0)
                    id = 0;

                _logger.LogInformation("GetAllProductsByProductNameAndCategoryIdAsync called");
                var products = id > 0 ?
                _context.Products.Include(cat => cat.Category)
                        .Where(n => n.CategoryId == id && n.Title.Contains(name))
                        .OrderBy(a => a.CategoryId).ToListAsync() : _context.Products.Include(cat => cat.Category)
                                                                            .Where(n => n.Title.Contains(name))
                                                                            .OrderBy(a => a.CategoryId).ToListAsync();

                return products;

            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllProductsByCategoryName failed : {e}");
                return null;

            }

        }


    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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

        public List<Category> GetAllCategories()
        {
            try
            {
                _logger.LogInformation("GetAllCategories called");
                return _context.Categories.OrderBy(t => t.CategoryName).ToList();
            }
            catch (Exception e)
            {
                _logger.LogError($"GetAllCategories failed : {e}");
                return null;
            }


        }
    }
}

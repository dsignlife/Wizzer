using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wizzer.Data.Identities;
using Wizzer.Data.Repositories;
using Wizzer.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Wizzer.Controllers
{
    [Route("api/[Controller]")]
    public class CategoryController : Controller
    {

        private readonly ICategoryRepository _repository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;



        public CategoryController(ICategoryRepository repository, ILogger<OrdersController> logger, IMapper mapper, UserManager<User> userManager)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                _logger.LogInformation("GetAllCategories called");
                return Ok(_repository.GetAllCategories());
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to : GetAllCategories {e}");
                return BadRequest("Failed to GetAllCategories");
            }
        }

        [HttpPost("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            try {
                _logger.LogInformation("GetAllProductsByCategoryIdAsync called");
                var searchProducts = await _repository.GetAllProductsByCategoryIdAsync(id);
                return Ok(searchProducts);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to GetAllProductsByCategoryIdAsync: {e} ");
                return BadRequest("Failed to GetAllProductsByCategoryIdAsync");
            }
        }

        [HttpGet("{id}/{name}")]
        public async Task<IActionResult> Get(string name, int id)
        {
            try
            {
                _logger.LogInformation("GetAllProductsByProductNameAndCategoryIdAsync called");
                var searchProducts = await _repository.GetAllProductsByProductNameAndCategoryIdAsync(name, id);
                return Ok(searchProducts);

            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to GetAllProductsByProductNameAndCategoryIdAsync: {e} ");
                return BadRequest("Failed to GetAllProductsByProductNameAndCategoryIdAsync");
            }
        }



    }
}

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

namespace Wizzer.Controllers.API
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
        public IActionResult GetSearchCategories()
        {
            try
            {
                Ok(_repository.GetAllCategories());

                return null;
                
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to GetSearchCategory: {e} ");
                return BadRequest("Failed to GetSearchCategory");
            }
        }



    }
}

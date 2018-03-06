using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wizzer.Data.Entities;
using Wizzer.Data.Repositories;
using Wizzer.ViewModels;

namespace Wizzer.Controllers
{
    [Route("api/[Controller]")]
    public class OrdersController : Controller
    {
        private readonly IWizzerRepository _repository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;

        public OrdersController(IWizzerRepository repository, ILogger<OrdersController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true)
        {
            try {
                var results = _repository.GetAllOrders(includeItems);
                return Ok(_mapper.Map<List<Order>, List<OrderViewModel>>(results));
            }
            catch (Exception e) {
                _logger.LogError($"Failed to GetAllOrders: {e} ");
                return BadRequest("Failed to GetAllOrders");

            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try {
                var order = _repository.GetOrderById(id);
                if (order != null)
                return Ok(_mapper.Map<Order, OrderViewModel>(order));
                else {
                   return NotFound();
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to GetOrderById: {e} ");
                return BadRequest("Failed to GetOrderById");

            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderViewModel model)
        {

            try {

                var newOrder = _mapper.Map<OrderViewModel, Order>(model);

                if (newOrder.OrderDate == DateTime.MinValue) {
                    newOrder.OrderDate = DateTime.Now;
                }

                if (ModelState.IsValid) {
                    _repository.AddEntity(model);
                    if (_repository.SaveAll()) {

                        var vm = new OrderViewModel() {
                            OrderId = newOrder.Id,
                            OrderDate = newOrder.OrderDate,
                            OrderNumber = newOrder.OrderNumber
                        };

                        return Created($"api/orders/{newOrder.Id}", _mapper.Map<Order, OrderViewModel>(newOrder));

                    }
                }
                else {
                    return BadRequest(ModelState);
                }
               
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to SaveOrder: {e} ");
            }
            return BadRequest("Failed to SaveOrder");

        }


    }
}

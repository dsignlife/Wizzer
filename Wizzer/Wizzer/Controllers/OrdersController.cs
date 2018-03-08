﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wizzer.Data.Entities;
using Wizzer.Data.Identities;
using Wizzer.Data.Repositories;
using Wizzer.ViewModels;

namespace Wizzer.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrdersController : Controller
    {
        private readonly IWizzerRepository _repository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public OrdersController(IWizzerRepository repository, ILogger<OrdersController> logger, IMapper mapper, UserManager<User> userManager)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true)
        {
            try
            {
                var username = User.Identity.Name;

                var results = _repository.GetAllOrdersByUser(username, includeItems);
                return Ok(_mapper.Map<List<Order>, List<OrderViewModel>>(results));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to GetAllOrders: {e} ");
                return BadRequest("Failed to GetAllOrders");

            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var order = _repository.GetOrderById(User.Identity.Name, id);
                if (order != null)
                {
                    return Ok(_mapper.Map<Order, OrderViewModel>(order));
                }
                return NotFound();
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to GetOrderById: {e} ");
                return BadRequest("Failed to GetOrderById");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]OrderViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newOrder = _mapper.Map<OrderViewModel, Order>(model);

                    if (newOrder.OrderDate == DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }

                    var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);
                    newOrder.User = currentUser;

                    _repository.AddEntity(newOrder);
                    if (_repository.SaveAll())
                    {
                        return Created($"api/orders/{newOrder.Id}", _mapper.Map<Order, OrderViewModel>(newOrder));
                    }

                }
                else
                    return BadRequest(ModelState);
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to SaveOrder: {e} ");
            }
            return BadRequest("Failed to SaveOrder");

        }


    }
}

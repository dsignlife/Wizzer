using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Wizzer.Data.Entities;
using Wizzer.ViewModels;

namespace Wizzer.Data.Mappings
{
    public class WizzerMapping : Profile
    {
        public WizzerMapping() 
        {
            CreateMap<Order, OrderViewModel>().ForMember(o => o.OrderId, m => m.MapFrom(d => d.Id)).ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>().ReverseMap();
        }
    }
}

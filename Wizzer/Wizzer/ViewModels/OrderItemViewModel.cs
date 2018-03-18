﻿using System.ComponentModel.DataAnnotations;

namespace Wizzer.ViewModels
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
        [Required]
        public int ProductId { get; set; }

        public int ProductCategoryId { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductTitle { get; set; }
        public string ProductDescription { get; set; }

        public string ProductImageId { get; set; }


    }
}
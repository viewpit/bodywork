using System;
using System.Collections.Generic;
using System.Text;

namespace Bodywork.Entities
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string CustomerMobile { get; set; }
        public string CustomerEmail { get; set; }
        public bool IsDeleted { get; set; }
    }
}

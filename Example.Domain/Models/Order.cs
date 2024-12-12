using Example.Domain.Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example.Domain.Models
{
	public class Order : BaseEntity
	{
		public string TableNumber { get; set; }
		public double Amount { get; set; }
		public List<Dish> Dishes { get; set; }
	}
}

using Example.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Example.API.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class OrderController : ControllerBase
	{
		private List<Order> orders = new List<Order>
		{
			new Order { Id = 1, TableNumber = "101", Amount = 1100},
			new Order { Id = 2, TableNumber = "203", Amount = 2500},
			new Order { Id = 3, TableNumber = "111", Amount = 900},
			new Order { Id = 4, TableNumber = "207", Amount = 3200},
			new Order { Id = 5, TableNumber = "201", Amount = 7200},
			new Order { Id = 6, TableNumber = "103", Amount = 10500},
			new Order { Id = 7, TableNumber = "210", Amount = 1700},
		};

		[HttpGet]
		public async Task<ActionResult<ICollection<Order>>> GetOrders()
		{
			return Ok(orders);
		}

		[HttpPost]
		public async Task<ActionResult> Create(Order order)
		{
			orders.Add(order);

			return Ok(order);
		}
	}
}

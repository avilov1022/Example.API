using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Example.Domain.Models;
using System.Reflection.Metadata.Ecma335;

namespace Example.API.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private string GetRoleName(Roles role)
		{
			switch (role)
			{
				case Roles.Waiter:
					return "Официант";
				case Roles.Manager:
					return "Менеджер";
				case Roles.Director:
					return "Директор";
				case Roles.Admin:
					return "Админ";
				default:
					return "Гость";
			}
		}
		
		private static List<User> users = new List<User>
		{
			new User { Id = 1, Name = "Иван Иванович", Email = "john.doe@example.com", Role = Roles.Guest },
			new User { Id = 2, Name = "Вася Пупыч", Email = "jane.smith@example.com", Role = Roles.Director },
			new User { Id = 3, Name = "Коля Комар", Email = "john.doe@example.com", Role = Roles.Admin },
			new User { Id = 4, Name = "Данил Авилов", Email = "john.doe@example.com", Role = Roles.Waiter },
			new User { Id = 5, Name = "Андрюха Леха", Email = "jane.smith@example.com", Role = Roles.Manager },
			new User { Id = 6, Name = "Нюнич", Email = "jane.smith@example.com", Role = Roles.Waiter },
		};

		[HttpGet]
		public ActionResult<ICollection<User>> GetUsers()
		{
			return Ok(users);
		}

		[HttpGet]
		[Route("{id}")]
		public ActionResult<ICollection<User>> GetUsersById(int id)
		{
			return Ok(users[id]);
		}
	}
}
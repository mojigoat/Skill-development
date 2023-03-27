using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLibrary.Models
{
	public class PlayerModel
	{
		public int PlayerId { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string GamerTag { get; set; }
		public string CountryOfResidence { get; set; }
		public string GameTitle { get; set; }
		public string TeamRole { get; set; }
		public string GameRole { get; set; }
		public string OPGGLink { get; set; }
		public string? Discord { get; set; }
		public string? Email { get; set; }
		public string? ContactNumber { get; set; }
		public int? TeamId { get; set; }
		public string? DOB { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLibrary.Models
{
	public class TeamModel
	{
		public int TeamId { get; set; }
		public string TeamName { get; set; }
		public Blob TeamLogo { get; set; }
		public string? Organisation { get; set; }
		public string GameTitle { get; set; }
		public string RepresentingCountry { get; set; }
		public string TeamManager { get; set; }
		public string ManagerDiscord { get; set; }
		public string ManagerEmail { get; set; }
		public string OPGGLink { get; set; }
		public string? Twitter { get; set; }
		public string? Website { get; set; }
		public bool Active { get; set; }
		public string TeamTag { get; set; }
        public string GamerTag { get; set; } //Captain
        public string Discord { get; set; } //Captain
        public int Players { get; set; } //Number of Players
    }
}


using DataAccessLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLibrary
{
	public class TeamData : ITeamData
	{
		private readonly ISQLDataAccess _database;

		public TeamData(ISQLDataAccess database)
		{
			_database = database;
		}

		public Task<List<TeamModel>> GetTeams()
		{
			string sql = "SELECT t.TeamID, t.Organisation, t.TeamName, t.RepresentingCountry, p.GamerTag , p.Discord, t.TeamManager, t.ManagerDiscord, t.OPGGLink, t.Active, (SELECT COUNT(p.TeamID) FROM LeagueOfLegendsPlayers p JOIN LeagueOfLegendsTeams t ON p.TeamID = t.TeamID) AS Players FROM LeagueOfLegendsTeams t JOIN dbo.LeagueOfLegendsPlayers p ON t.TeamID = p.TeamID WHERE p.TeamRole = 'captain'";


            return _database.LoadData<TeamModel, dynamic>(sql, new { });
		}

		public Task InsertTeam(TeamModel team)
		{
			string sql = @"INSERT into dbo.leagueoflegendsTeams (TeamName, TeamLogo, Organisation, GameTitle, RepresentingCountry, TeamManager, ManagerDiscord, OPGGLink, TwitterLink, WebsiteLink, Active, TeamTag) 
						VALUES ( @TeamName, @TeamLogo, @Organisation, @GameTitle, @RepresentingCountry, @TeamManager, @ManagerDiscord, @OPGGLink, @TwitterLink, @WebsiteLink, @Active, @TeamTag)";

			return _database.SaveData(sql, team);
		}
	}
}

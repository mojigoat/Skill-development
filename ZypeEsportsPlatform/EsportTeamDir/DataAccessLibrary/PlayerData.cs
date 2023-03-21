using DataAccessLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLibrary
{
	public class PlayerData : IPlayerData
	{
		private readonly ISQLDataAccess _database;

		public PlayerData(ISQLDataAccess database)
		{
			_database = database;
		}

		public Task<List<PlayerModel>> GetPlayers()
		{
			string sql = "SELECT * FROM DBO.LeagueOfLegendsPlayers WHERE TeamID = 1";

			return _database.LoadData<PlayerModel, dynamic>(sql, new { });
		}

		public Task InsertPlayer(PlayerModel player)
		{
			string sql = @"INSERT into DBO.LeagueOfLegendsPlayers (FirstName, LastName, GamerTag, CountryOfResidence, GameTitle, TeamRole, GameRole, OPGGLink, DISCORD, Email, ContactNumber, TeamID, DOB) 
						VALUES ( @FirstName, @LastName, @GamerTag, @CountryOfResidence, @GameTitle, @TeamRole, @GameRole, @OPGGLink, @DISCORD, @Email, @ContactNumber, @TeamID, @DOB)";

			return _database.SaveData(sql, player);
		}
	}
}

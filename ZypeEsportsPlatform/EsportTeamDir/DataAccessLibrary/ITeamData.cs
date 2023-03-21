using DataAccessLibrary.Models;

namespace DataAccessLibrary
{
	public interface ITeamData
	{
		Task<List<TeamModel>> GetTeams();
		Task InsertTeam(TeamModel team);
	}
}
using DataAccessLibrary.Models;

namespace DataAccessLibrary
{
	public interface IPlayerData
	{
		Task<List<PlayerModel>> GetPlayers();
		Task InsertPlayer(PlayerModel player);
	}
}
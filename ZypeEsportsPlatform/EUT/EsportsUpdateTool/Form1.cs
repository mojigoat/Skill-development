using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics.Metrics;
using static System.Runtime.InteropServices.JavaScript.JSType;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using System.DirectoryServices.ActiveDirectory;
using System.Data;
using System;
using System.Windows.Forms;

namespace EsportsUpdateTool
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void label11_Click(object sender, EventArgs e)
        {

        }

        private void TeamCreateButton_Click(object sender, EventArgs e)
        {
            CreateTeam();
        }

        private void PlayerCreateButton_Click(object sender, EventArgs e)
        {
            var playerOPGGUrl = "https://www.op.gg/summoners/euw/" + PlayerGTagBox.Text;

            var teamText = PlayerTeamComboBox.Text;
            var teamID = GetTeamID(teamText);

            CreatePlayer(playerOPGGUrl, teamID);
            ClearPlayerForm();
        }

        private void CreateTeam()
        {
            SqlConnection con = new SqlConnection("Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            con.Open();

            string InsertTeamQuery = "INSERT into DBO.LeagueOfLegendsTeams (Organisation, TeamName, GameTitle, RepresentingCountry, TeamManager, ManagerDiscord, ManagerEmailAddress, OPGGLink, TwitterLink, WebsiteLink, Active, TeamTag) VALUES (@Organisation, @TeamName, 'League of Legends', @Country, @TeamManager, @ManagerDiscord, @ManagerEmail, @OPGG, @Twitter, @Website, 1, @TeamTag );";
            SqlCommand cmd = new SqlCommand(InsertTeamQuery);

            cmd.Parameters.AddWithValue("@Organisation", TeamOrgBox.Text);
            cmd.Parameters.AddWithValue("@TeamName", TeamNameBox.Text);
            cmd.Parameters.AddWithValue("@Country", TeamCountryBox.Text);
            cmd.Parameters.AddWithValue("@TeamManager", TeamManagerTagBox.Text);
            cmd.Parameters.AddWithValue("@ManagerDiscord", TeamManagerDiscordBox.Text);
            cmd.Parameters.AddWithValue("@ManagerEmail", TeamManagerEmailBox.Text);
            cmd.Parameters.AddWithValue("@OPGG", TeamopggBox.Text);
            cmd.Parameters.AddWithValue("@Twitter", TeamTwitterBox.Text);
            cmd.Parameters.AddWithValue("@Website", TeamWebsiteBox.Text);
            cmd.Parameters.AddWithValue("@TeamTag", TeamTagBox.Text);
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            con.Close();
            MessageBox.Show("Successfully Saved");
            ClearTeamForm();
        }

        private void CreatePlayer(string opggurl, int teamId)
        {
            SqlConnection con = new SqlConnection("Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            con.Open();

            string InsertPlayerQuery = "INSERT into DBO.LeagueOfLegendsPlayers (FirstName, LastName, GamerTag, CountryOfResidence, GameTitle, TeamRole, GameRole, OPGGLink, Discord, Email, ContactNumber, TeamID) VALUES(@FirstName, @LastName, @GamerTag, @Country, 'League of Legends', @TeamRole, @GameRole, @OPGG, @Discord, @Email, @Contact, @TeamID);";
            SqlCommand cmd = new SqlCommand(InsertPlayerQuery);

            cmd.Parameters.AddWithValue("@FirstName", PlayerFNameBox.Text);
            cmd.Parameters.AddWithValue("@LastName", PlayerLNameBox.Text);
            cmd.Parameters.AddWithValue("@GamerTag", PlayerGTagBox.Text);
            cmd.Parameters.AddWithValue("@Country", PlayerCountryBox.Text);
            cmd.Parameters.AddWithValue("@TeamRole", PlayerTeamRoleBox.Text);
            cmd.Parameters.AddWithValue("@GameRole", PlayerGameRoleBox.Text);
            cmd.Parameters.AddWithValue("@OPGG", opggurl);
            cmd.Parameters.AddWithValue("@Discord", PlayerDiscordBox.Text);
            cmd.Parameters.AddWithValue("@Email", PlayerEmailBox.Text);
            cmd.Parameters.AddWithValue("@Contact", PlayerContactBox.Text);
            cmd.Parameters.AddWithValue("@TeamID", teamId);
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            con.Close();
            MessageBox.Show("Successfully Saved");
        }

        private static int GetTeamID(string TeamText)
        {
            string connectionString = "Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            string query = "SELECT TeamID FROM dbo.LeagueOfLegendsTeams where TeamName = @TeamName;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@TeamName", TeamText);

                connection.Open();

                object result = command.ExecuteScalar();
                connection.Close();
                if (result != null)
                {
                    int teamID = (int)result;
                    return teamID;
                }
                else
                {
                    MessageBox.Show("Team Selected does not match any TeamID in the Databas.");
                    return 0;
                }
            }
        }

        private void ClearTeamForm()
        {
            TeamOrgBox.Text = "";
            TeamNameBox.Text = "";
            TeamCountryBox.Text = "";
            TeamManagerTagBox.Text = "";
            TeamManagerDiscordBox.Text = "";
            TeamManagerEmailBox.Text = "";
            TeamopggBox.Text = "";
            TeamTwitterBox.Text = "";
            TeamWebsiteBox.Text = "";
            TeamTagBox.Text = "";
        }

        private void ClearPlayerForm()
        {
            PlayerFNameBox.Text = "";
            PlayerLNameBox.Text = "";
            PlayerGTagBox.Text = "";
            PlayerCountryBox.Text = "";
            PlayerTeamRoleBox.Text = "";
            PlayerGameRoleBox.Text = "";
            PlayerDiscordBox.Text = "";
            PlayerEmailBox.Text = "";
            TeamWebsiteBox.Text = "";
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            LoadTeamCheckBoxData();
            LoadPlayers();
            LoadTeams();
        }

        private void LoadPlayers()
        {
            SqlConnection con = new SqlConnection("Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            con.Open();

            SqlCommand cmd = new SqlCommand("SELECT * From dbo.LeagueOfLegendsPlayers;", con);

            SqlDataAdapter dataAdapter = new SqlDataAdapter(cmd);
            DataTable dataTable = new DataTable();
            dataAdapter.Fill(dataTable);
            PlayerDataGrid.DataSource = dataTable;
        }

        private void LoadTeams()
        {
            SqlConnection con = new SqlConnection("Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            con.Open();

            SqlCommand cmd = new SqlCommand("SELECT * From dbo.LeagueOfLegendsTeams;", con);

            SqlDataAdapter dataAdapter = new SqlDataAdapter(cmd);
            DataTable dataTable = new DataTable();
            dataAdapter.Fill(dataTable);
            TeamDataGrid.DataSource = dataTable;
        }

        private void LoadTeamCheckBoxData()
        {
            string connectionString = "Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            string query = "SELECT TeamName FROM dbo.LeagueOfLegendsTeams;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    PlayerTeamComboBox.Items.Add(reader.GetString(0));
                }

                reader.Close();
            }
        }

        private void PlayerEditButton_Click(object sender, EventArgs e)
        {
            var playerOPGGUrl = "https://www.op.gg/summoners/euw/" + PlayerGTagBox.Text;

            var teamText = PlayerTeamComboBox.Text;
            var teamID = GetTeamID(teamText);
            UpdatePlayer(playerOPGGUrl, teamID);
        }

        private void UpdatePlayer(string opggurl, int teamId)
        {
            SqlConnection con = new SqlConnection("Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            con.Open();

            SqlCommand cmd = new SqlCommand("UPDATE dbo.LeagueOfLegendsPlayers SET FirstName = @FirstName, LastName = @LastName, GamerTag = @GamerTag, CountryOfResidence = @Country, TeamRole = @TeamRole, GameRole = @GameRole, OPGGLink = @OPGG, Discord = @Discord, Email = @Email, ContactNumber = @Contact, TeamID = @TeamID WHERE PlayerID = @PlayerID;", con);


            cmd.Parameters.AddWithValue("@FirstName", PlayerFNameBox.Text);
            cmd.Parameters.AddWithValue("@LastName", PlayerLNameBox.Text);
            cmd.Parameters.AddWithValue("@GamerTag", PlayerGTagBox.Text);
            cmd.Parameters.AddWithValue("@Country", PlayerCountryBox.Text);
            cmd.Parameters.AddWithValue("@TeamRole", PlayerTeamRoleBox.Text);
            cmd.Parameters.AddWithValue("@GameRole", PlayerGameRoleBox.Text);
            cmd.Parameters.AddWithValue("@OPGG", opggurl);
            cmd.Parameters.AddWithValue("@Discord", PlayerDiscordBox.Text);
            cmd.Parameters.AddWithValue("@Email", PlayerEmailBox.Text);
            cmd.Parameters.AddWithValue("@Contact", PlayerContactBox.Text);
            cmd.Parameters.AddWithValue("@TeamID", teamId);
            cmd.Parameters.AddWithValue("@PlayerID", (int)PlayerDataGrid.SelectedRows[0].Cells[0].Value);

            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            con.Close();
            MessageBox.Show("Successfully Updated");
        }

        private void UpdateTeam()
        {
            SqlConnection con = new SqlConnection("Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            con.Open();

            SqlCommand cmd = new SqlCommand("UPDATE dbo.LeagueOfLegendsTeams SET Organisation = @Organisation, TeamName = @TeamName, RepresentingCountry = @Country, TeamManager = @TeamManager, ManagerDiscord = @ManagerDiscord, ManagerEmailAddress = @ManagerEmailAddress, OPGGLink = @OPGGLink, TwitterLink = @TwitterLink, WebsiteLink = @WebsiteLink, TeamTag = @TeamTag WHERE TeamID = @TeamID;", con);

            cmd.Parameters.AddWithValue("@Organisation", TeamOrgBox.Text);
            cmd.Parameters.AddWithValue("@TeamName", TeamNameBox.Text);
            cmd.Parameters.AddWithValue("@Country", TeamCountryBox.Text);
            cmd.Parameters.AddWithValue("@TeamManager", TeamManagerTagBox.Text);
            cmd.Parameters.AddWithValue("@ManagerDiscord", TeamManagerDiscordBox.Text);
            cmd.Parameters.AddWithValue("@ManagerEmailAddress", TeamManagerEmailBox.Text);
            cmd.Parameters.AddWithValue("@OPGGLink", TeamopggBox.Text);
            cmd.Parameters.AddWithValue("@TwitterLink", TeamTwitterBox.Text);
            cmd.Parameters.AddWithValue("@WebsiteLink", TeamWebsiteBox.Text);
            cmd.Parameters.AddWithValue("@TeamTag", TeamTagBox.Text);
            cmd.Parameters.AddWithValue("@TeamID", (int)TeamDataGrid.SelectedRows[0].Cells[0].Value);

            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            con.Close();
            MessageBox.Show("Successfully Updated");
        }

        private void PlayerDataGrid_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            int teamID = (int)PlayerDataGrid.SelectedRows[0].Cells[12].Value;
            var teamName = GetTeamName(teamID);

            PlayerFNameBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[1].Value;
            PlayerLNameBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[2].Value;
            PlayerGTagBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[3].Value;
            PlayerCountryBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[4].Value;
            PlayerTeamRoleBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[6].Value;
            PlayerGameRoleBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[7].Value;
            PlayerDiscordBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[9].Value;
            PlayerEmailBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[10].Value;
            PlayerContactBox.Text = (string)PlayerDataGrid.SelectedRows[0].Cells[11].Value;
            PlayerTeamComboBox.SelectedIndex = PlayerTeamComboBox.Items.IndexOf(teamName);
        }

        private static string GetTeamName(int teamID)
        {
            string connectionString = "Server=tcp:zypherrbox.database.windows.net,1433;Initial Catalog=ZypherrBoxDB;Persist Security Info=False;User ID=CloudSA0732f4ff;Password=Scooby123doo!@#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            string query = "SELECT TeamName FROM dbo.LeagueOfLegendsTeams where TeamID = @TeamId;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@TeamId", teamID);

                connection.Open();

                object result = command.ExecuteScalar();
                connection.Close();
                if (result != null)
                {
                    var teamName = (string)result;
                    return teamName;
                }
                else
                {
                    MessageBox.Show("TeamID Selected does not match any Team name in the Database.");
                    return "";
                }
            }
        }

        private void TeamDataGrid_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            TeamOrgBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[1].Value;
            TeamNameBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[3].Value;
            TeamCountryBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[5].Value;
            TeamTwitterBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[10].Value;
            TeamManagerTagBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[6].Value;
            TeamManagerDiscordBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[7].Value;
            TeamManagerEmailBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[8].Value;
            TeamWebsiteBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[11].Value;
            TeamopggBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[9].Value;
            TeamTagBox.Text = (string)TeamDataGrid.SelectedRows[0].Cells[13].Value;
        }

        private void PlayerClearFormButton_Click(object sender, EventArgs e)
        {
            ClearPlayerForm();
        }

        private void TeamCLearFormButton_Click(object sender, EventArgs e)
        {
            ClearTeamForm();
        }

        private void TeamEditButton_Click(object sender, EventArgs e)
        {
            UpdateTeam();
        }

        private void TeamRefreshDataButton_Click(object sender, EventArgs e)
        {
            TeamDataGrid.DataSource = null;
            LoadTeams();
        }

        private void PlayerRefreshDataButton_Click(object sender, EventArgs e)
        {
            PlayerDataGrid.DataSource = null;
            LoadPlayers();
        }
    }
}
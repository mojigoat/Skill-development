namespace EsportsUpdateTool
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            TeamsPlayersTab = new TabControl();
            TeamTab = new TabPage();
            TeamRefreshDataButton = new Button();
            TeamopggBox = new TextBox();
            label22 = new Label();
            label21 = new Label();
            TeamTagBox = new TextBox();
            RetiredCheckbox = new CheckBox();
            label20 = new Label();
            TeamWebsiteBox = new TextBox();
            label19 = new Label();
            TeamTwitterBox = new TextBox();
            TeamManagerEmailBox = new TextBox();
            label18 = new Label();
            label17 = new Label();
            TeamManagerDiscordBox = new TextBox();
            label16 = new Label();
            TeamManagerTagBox = new TextBox();
            label15 = new Label();
            TeamCountryBox = new TextBox();
            label14 = new Label();
            TeamLogoBox = new TextBox();
            TeamLogoUploadButton = new Button();
            label13 = new Label();
            TeamNameBox = new TextBox();
            label12 = new Label();
            TeamOrgBox = new TextBox();
            TeamDataGrid = new DataGridView();
            TeamCreateButton = new Button();
            TeamEditButton = new Button();
            TeamCLearFormButton = new Button();
            tabPage2 = new TabPage();
            PlayerRefreshDataButton = new Button();
            PlayerTeamComboBox = new ComboBox();
            PlayerDOBCalender = new MonthCalendar();
            label11 = new Label();
            label10 = new Label();
            label9 = new Label();
            PlayerContactBox = new TextBox();
            label8 = new Label();
            label7 = new Label();
            PlayerEmailBox = new TextBox();
            PlayerDiscordBox = new TextBox();
            label6 = new Label();
            PlayerGameRoleBox = new ComboBox();
            PlayerTeamRoleBox = new ComboBox();
            label5 = new Label();
            label4 = new Label();
            PlayerCountryBox = new TextBox();
            label3 = new Label();
            PlayerGTagBox = new TextBox();
            label2 = new Label();
            PlayerLNameBox = new TextBox();
            label1 = new Label();
            PlayerFNameBox = new TextBox();
            PlayerDataGrid = new DataGridView();
            PlayerCreateButton = new Button();
            PlayerEditButton = new Button();
            PlayerClearFormButton = new Button();
            TeamsPlayersTab.SuspendLayout();
            TeamTab.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)TeamDataGrid).BeginInit();
            tabPage2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)PlayerDataGrid).BeginInit();
            SuspendLayout();
            // 
            // TeamsPlayersTab
            // 
            TeamsPlayersTab.AccessibleName = "TeamsPlayersTab";
            TeamsPlayersTab.Controls.Add(TeamTab);
            TeamsPlayersTab.Controls.Add(tabPage2);
            TeamsPlayersTab.Location = new Point(12, 12);
            TeamsPlayersTab.Name = "TeamsPlayersTab";
            TeamsPlayersTab.SelectedIndex = 0;
            TeamsPlayersTab.Size = new Size(1533, 973);
            TeamsPlayersTab.TabIndex = 0;
            // 
            // TeamTab
            // 
            TeamTab.Controls.Add(TeamRefreshDataButton);
            TeamTab.Controls.Add(TeamopggBox);
            TeamTab.Controls.Add(label22);
            TeamTab.Controls.Add(label21);
            TeamTab.Controls.Add(TeamTagBox);
            TeamTab.Controls.Add(RetiredCheckbox);
            TeamTab.Controls.Add(label20);
            TeamTab.Controls.Add(TeamWebsiteBox);
            TeamTab.Controls.Add(label19);
            TeamTab.Controls.Add(TeamTwitterBox);
            TeamTab.Controls.Add(TeamManagerEmailBox);
            TeamTab.Controls.Add(label18);
            TeamTab.Controls.Add(label17);
            TeamTab.Controls.Add(TeamManagerDiscordBox);
            TeamTab.Controls.Add(label16);
            TeamTab.Controls.Add(TeamManagerTagBox);
            TeamTab.Controls.Add(label15);
            TeamTab.Controls.Add(TeamCountryBox);
            TeamTab.Controls.Add(label14);
            TeamTab.Controls.Add(TeamLogoBox);
            TeamTab.Controls.Add(TeamLogoUploadButton);
            TeamTab.Controls.Add(label13);
            TeamTab.Controls.Add(TeamNameBox);
            TeamTab.Controls.Add(label12);
            TeamTab.Controls.Add(TeamOrgBox);
            TeamTab.Controls.Add(TeamDataGrid);
            TeamTab.Controls.Add(TeamCreateButton);
            TeamTab.Controls.Add(TeamEditButton);
            TeamTab.Controls.Add(TeamCLearFormButton);
            TeamTab.Location = new Point(4, 24);
            TeamTab.Name = "TeamTab";
            TeamTab.Padding = new Padding(3);
            TeamTab.Size = new Size(1525, 945);
            TeamTab.TabIndex = 0;
            TeamTab.Text = "Teams";
            TeamTab.UseVisualStyleBackColor = true;
            // 
            // TeamRefreshDataButton
            // 
            TeamRefreshDataButton.Location = new Point(6, 897);
            TeamRefreshDataButton.Name = "TeamRefreshDataButton";
            TeamRefreshDataButton.Size = new Size(247, 42);
            TeamRefreshDataButton.TabIndex = 28;
            TeamRefreshDataButton.Text = "Refresh Data";
            TeamRefreshDataButton.UseVisualStyleBackColor = true;
            TeamRefreshDataButton.Click += TeamRefreshDataButton_Click;
            // 
            // TeamopggBox
            // 
            TeamopggBox.BorderStyle = BorderStyle.FixedSingle;
            TeamopggBox.Location = new Point(104, 128);
            TeamopggBox.Name = "TeamopggBox";
            TeamopggBox.Size = new Size(1312, 23);
            TeamopggBox.TabIndex = 27;
            // 
            // label22
            // 
            label22.AutoSize = true;
            label22.Location = new Point(3, 131);
            label22.Name = "label22";
            label22.Size = new Size(70, 15);
            label22.TabIndex = 26;
            label22.Text = "Team OPGG";
            // 
            // label21
            // 
            label21.AutoSize = true;
            label21.Location = new Point(990, 66);
            label21.Name = "label21";
            label21.Size = new Size(25, 15);
            label21.TabIndex = 25;
            label21.Text = "Tag";
            // 
            // TeamTagBox
            // 
            TeamTagBox.BorderStyle = BorderStyle.FixedSingle;
            TeamTagBox.Location = new Point(990, 83);
            TeamTagBox.Name = "TeamTagBox";
            TeamTagBox.Size = new Size(126, 23);
            TeamTagBox.TabIndex = 24;
            // 
            // RetiredCheckbox
            // 
            RetiredCheckbox.AutoSize = true;
            RetiredCheckbox.Location = new Point(1444, 130);
            RetiredCheckbox.Name = "RetiredCheckbox";
            RetiredCheckbox.Size = new Size(63, 19);
            RetiredCheckbox.TabIndex = 23;
            RetiredCheckbox.Text = "Retired";
            RetiredCheckbox.UseVisualStyleBackColor = true;
            // 
            // label20
            // 
            label20.AutoSize = true;
            label20.Location = new Point(1136, 65);
            label20.Name = "label20";
            label20.Size = new Size(49, 15);
            label20.TabIndex = 22;
            label20.Text = "Website";
            // 
            // TeamWebsiteBox
            // 
            TeamWebsiteBox.BorderStyle = BorderStyle.FixedSingle;
            TeamWebsiteBox.Location = new Point(1136, 83);
            TeamWebsiteBox.Name = "TeamWebsiteBox";
            TeamWebsiteBox.Size = new Size(383, 23);
            TeamWebsiteBox.TabIndex = 21;
            // 
            // label19
            // 
            label19.AutoSize = true;
            label19.Location = new Point(990, 16);
            label19.Name = "label19";
            label19.Size = new Size(42, 15);
            label19.TabIndex = 20;
            label19.Text = "Twitter";
            // 
            // TeamTwitterBox
            // 
            TeamTwitterBox.BorderStyle = BorderStyle.FixedSingle;
            TeamTwitterBox.Location = new Point(990, 34);
            TeamTwitterBox.Name = "TeamTwitterBox";
            TeamTwitterBox.Size = new Size(529, 23);
            TeamTwitterBox.TabIndex = 19;
            // 
            // TeamManagerEmailBox
            // 
            TeamManagerEmailBox.BorderStyle = BorderStyle.FixedSingle;
            TeamManagerEmailBox.Location = new Point(653, 83);
            TeamManagerEmailBox.Name = "TeamManagerEmailBox";
            TeamManagerEmailBox.Size = new Size(311, 23);
            TeamManagerEmailBox.TabIndex = 18;
            // 
            // label18
            // 
            label18.AutoSize = true;
            label18.Location = new Point(653, 65);
            label18.Name = "label18";
            label18.Size = new Size(86, 15);
            label18.TabIndex = 17;
            label18.Text = "Manager Email";
            // 
            // label17
            // 
            label17.AutoSize = true;
            label17.Location = new Point(347, 65);
            label17.Name = "label17";
            label17.Size = new Size(107, 15);
            label17.TabIndex = 16;
            label17.Text = "Manager Discord #";
            // 
            // TeamManagerDiscordBox
            // 
            TeamManagerDiscordBox.BorderStyle = BorderStyle.FixedSingle;
            TeamManagerDiscordBox.Location = new Point(347, 83);
            TeamManagerDiscordBox.Name = "TeamManagerDiscordBox";
            TeamManagerDiscordBox.Size = new Size(283, 23);
            TeamManagerDiscordBox.TabIndex = 15;
            // 
            // label16
            // 
            label16.AutoSize = true;
            label16.Location = new Point(6, 65);
            label16.Name = "label16";
            label16.Size = new Size(113, 15);
            label16.TabIndex = 14;
            label16.Text = "Manager Gamer Tag";
            // 
            // TeamManagerTagBox
            // 
            TeamManagerTagBox.BorderStyle = BorderStyle.FixedSingle;
            TeamManagerTagBox.Location = new Point(6, 83);
            TeamManagerTagBox.Name = "TeamManagerTagBox";
            TeamManagerTagBox.Size = new Size(315, 23);
            TeamManagerTagBox.TabIndex = 13;
            // 
            // label15
            // 
            label15.AutoSize = true;
            label15.Location = new Point(653, 16);
            label15.Name = "label15";
            label15.Size = new Size(50, 15);
            label15.TabIndex = 12;
            label15.Text = "Country";
            // 
            // TeamCountryBox
            // 
            TeamCountryBox.BorderStyle = BorderStyle.FixedSingle;
            TeamCountryBox.Location = new Point(653, 34);
            TeamCountryBox.Name = "TeamCountryBox";
            TeamCountryBox.Size = new Size(311, 23);
            TeamCountryBox.TabIndex = 11;
            // 
            // label14
            // 
            label14.AutoSize = true;
            label14.Location = new Point(6, 173);
            label14.Name = "label14";
            label14.Size = new Size(75, 15);
            label14.TabIndex = 10;
            label14.Text = "Upload Logo";
            // 
            // TeamLogoBox
            // 
            TeamLogoBox.BorderStyle = BorderStyle.FixedSingle;
            TeamLogoBox.Location = new Point(104, 171);
            TeamLogoBox.Name = "TeamLogoBox";
            TeamLogoBox.Size = new Size(1312, 23);
            TeamLogoBox.TabIndex = 9;
            // 
            // TeamLogoUploadButton
            // 
            TeamLogoUploadButton.Location = new Point(1444, 171);
            TeamLogoUploadButton.Name = "TeamLogoUploadButton";
            TeamLogoUploadButton.Size = new Size(75, 23);
            TeamLogoUploadButton.TabIndex = 8;
            TeamLogoUploadButton.Text = "Upload";
            TeamLogoUploadButton.UseVisualStyleBackColor = true;
            // 
            // label13
            // 
            label13.AutoSize = true;
            label13.Location = new Point(347, 16);
            label13.Name = "label13";
            label13.Size = new Size(70, 15);
            label13.TabIndex = 7;
            label13.Text = "Team Name";
            // 
            // TeamNameBox
            // 
            TeamNameBox.BorderStyle = BorderStyle.FixedSingle;
            TeamNameBox.Location = new Point(347, 34);
            TeamNameBox.Name = "TeamNameBox";
            TeamNameBox.Size = new Size(283, 23);
            TeamNameBox.TabIndex = 6;
            // 
            // label12
            // 
            label12.AutoSize = true;
            label12.Location = new Point(6, 16);
            label12.Name = "label12";
            label12.Size = new Size(75, 15);
            label12.TabIndex = 5;
            label12.Text = "Organisation";
            // 
            // TeamOrgBox
            // 
            TeamOrgBox.BorderStyle = BorderStyle.FixedSingle;
            TeamOrgBox.Location = new Point(6, 34);
            TeamOrgBox.Name = "TeamOrgBox";
            TeamOrgBox.Size = new Size(315, 23);
            TeamOrgBox.TabIndex = 4;
            // 
            // TeamDataGrid
            // 
            TeamDataGrid.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            TeamDataGrid.Location = new Point(6, 209);
            TeamDataGrid.Name = "TeamDataGrid";
            TeamDataGrid.RowTemplate.Height = 25;
            TeamDataGrid.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            TeamDataGrid.Size = new Size(1513, 682);
            TeamDataGrid.TabIndex = 3;
            TeamDataGrid.MouseDoubleClick += TeamDataGrid_MouseDoubleClick;
            // 
            // TeamCreateButton
            // 
            TeamCreateButton.Location = new Point(1162, 897);
            TeamCreateButton.Name = "TeamCreateButton";
            TeamCreateButton.Size = new Size(115, 42);
            TeamCreateButton.TabIndex = 2;
            TeamCreateButton.Text = "Create";
            TeamCreateButton.UseVisualStyleBackColor = true;
            TeamCreateButton.Click += TeamCreateButton_Click;
            // 
            // TeamEditButton
            // 
            TeamEditButton.Location = new Point(1283, 897);
            TeamEditButton.Name = "TeamEditButton";
            TeamEditButton.Size = new Size(115, 42);
            TeamEditButton.TabIndex = 1;
            TeamEditButton.Text = "Edit";
            TeamEditButton.UseVisualStyleBackColor = true;
            TeamEditButton.Click += TeamEditButton_Click;
            // 
            // TeamCLearFormButton
            // 
            TeamCLearFormButton.Location = new Point(1404, 897);
            TeamCLearFormButton.Name = "TeamCLearFormButton";
            TeamCLearFormButton.Size = new Size(115, 42);
            TeamCLearFormButton.TabIndex = 0;
            TeamCLearFormButton.Text = "Clear";
            TeamCLearFormButton.UseVisualStyleBackColor = true;
            TeamCLearFormButton.Click += TeamCLearFormButton_Click;
            // 
            // tabPage2
            // 
            tabPage2.Controls.Add(PlayerRefreshDataButton);
            tabPage2.Controls.Add(PlayerTeamComboBox);
            tabPage2.Controls.Add(PlayerDOBCalender);
            tabPage2.Controls.Add(label11);
            tabPage2.Controls.Add(label10);
            tabPage2.Controls.Add(label9);
            tabPage2.Controls.Add(PlayerContactBox);
            tabPage2.Controls.Add(label8);
            tabPage2.Controls.Add(label7);
            tabPage2.Controls.Add(PlayerEmailBox);
            tabPage2.Controls.Add(PlayerDiscordBox);
            tabPage2.Controls.Add(label6);
            tabPage2.Controls.Add(PlayerGameRoleBox);
            tabPage2.Controls.Add(PlayerTeamRoleBox);
            tabPage2.Controls.Add(label5);
            tabPage2.Controls.Add(label4);
            tabPage2.Controls.Add(PlayerCountryBox);
            tabPage2.Controls.Add(label3);
            tabPage2.Controls.Add(PlayerGTagBox);
            tabPage2.Controls.Add(label2);
            tabPage2.Controls.Add(PlayerLNameBox);
            tabPage2.Controls.Add(label1);
            tabPage2.Controls.Add(PlayerFNameBox);
            tabPage2.Controls.Add(PlayerDataGrid);
            tabPage2.Controls.Add(PlayerCreateButton);
            tabPage2.Controls.Add(PlayerEditButton);
            tabPage2.Controls.Add(PlayerClearFormButton);
            tabPage2.Location = new Point(4, 24);
            tabPage2.Name = "tabPage2";
            tabPage2.Padding = new Padding(3);
            tabPage2.Size = new Size(1525, 945);
            tabPage2.TabIndex = 1;
            tabPage2.Text = "Players";
            tabPage2.UseVisualStyleBackColor = true;
            // 
            // PlayerRefreshDataButton
            // 
            PlayerRefreshDataButton.Location = new Point(8, 897);
            PlayerRefreshDataButton.Name = "PlayerRefreshDataButton";
            PlayerRefreshDataButton.Size = new Size(247, 42);
            PlayerRefreshDataButton.TabIndex = 29;
            PlayerRefreshDataButton.Text = "Refresh Data";
            PlayerRefreshDataButton.UseVisualStyleBackColor = true;
            PlayerRefreshDataButton.Click += PlayerRefreshDataButton_Click;
            // 
            // PlayerTeamComboBox
            // 
            PlayerTeamComboBox.FormattingEnabled = true;
            PlayerTeamComboBox.Location = new Point(7, 31);
            PlayerTeamComboBox.Name = "PlayerTeamComboBox";
            PlayerTeamComboBox.Size = new Size(473, 23);
            PlayerTeamComboBox.TabIndex = 28;
            // 
            // PlayerDOBCalender
            // 
            PlayerDOBCalender.Location = new Point(1283, 31);
            PlayerDOBCalender.Name = "PlayerDOBCalender";
            PlayerDOBCalender.TabIndex = 27;
            // 
            // label11
            // 
            label11.AutoSize = true;
            label11.Location = new Point(1283, 11);
            label11.Name = "label11";
            label11.Size = new Size(73, 15);
            label11.TabIndex = 26;
            label11.Text = "Date of Birth";
            label11.Click += label11_Click;
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.Location = new Point(7, 13);
            label10.Name = "label10";
            label10.Size = new Size(35, 15);
            label10.TabIndex = 25;
            label10.Text = "Team";
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(941, 153);
            label9.Name = "label9";
            label9.Size = new Size(96, 15);
            label9.TabIndex = 22;
            label9.Text = "Contact Number";
            // 
            // PlayerContactBox
            // 
            PlayerContactBox.BorderStyle = BorderStyle.FixedSingle;
            PlayerContactBox.Location = new Point(941, 171);
            PlayerContactBox.Name = "PlayerContactBox";
            PlayerContactBox.Size = new Size(310, 23);
            PlayerContactBox.TabIndex = 21;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(500, 153);
            label8.Name = "label8";
            label8.Size = new Size(81, 15);
            label8.TabIndex = 20;
            label8.Text = "Email Address";
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.Location = new Point(8, 153);
            label7.Name = "label7";
            label7.Size = new Size(57, 15);
            label7.TabIndex = 19;
            label7.Text = "Discord #";
            // 
            // PlayerEmailBox
            // 
            PlayerEmailBox.BorderStyle = BorderStyle.FixedSingle;
            PlayerEmailBox.Location = new Point(500, 171);
            PlayerEmailBox.Name = "PlayerEmailBox";
            PlayerEmailBox.Size = new Size(422, 23);
            PlayerEmailBox.TabIndex = 18;
            // 
            // PlayerDiscordBox
            // 
            PlayerDiscordBox.BorderStyle = BorderStyle.FixedSingle;
            PlayerDiscordBox.Location = new Point(8, 171);
            PlayerDiscordBox.Name = "PlayerDiscordBox";
            PlayerDiscordBox.Size = new Size(472, 23);
            PlayerDiscordBox.TabIndex = 17;
            PlayerDiscordBox.TextChanged += textBox2_TextChanged;
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(500, 106);
            label6.Name = "label6";
            label6.Size = new Size(61, 15);
            label6.TabIndex = 16;
            label6.Text = "Team Role";
            // 
            // PlayerGameRoleBox
            // 
            PlayerGameRoleBox.FormattingEnabled = true;
            PlayerGameRoleBox.Items.AddRange(new object[] { "Top", "Jungle", "Mid", "ADC", "Support" });
            PlayerGameRoleBox.Location = new Point(941, 124);
            PlayerGameRoleBox.Name = "PlayerGameRoleBox";
            PlayerGameRoleBox.Size = new Size(310, 23);
            PlayerGameRoleBox.TabIndex = 15;
            // 
            // PlayerTeamRoleBox
            // 
            PlayerTeamRoleBox.FormattingEnabled = true;
            PlayerTeamRoleBox.Items.AddRange(new object[] { "Player", "Captain", "Substitute" });
            PlayerTeamRoleBox.Location = new Point(500, 124);
            PlayerTeamRoleBox.Name = "PlayerTeamRoleBox";
            PlayerTeamRoleBox.Size = new Size(422, 23);
            PlayerTeamRoleBox.TabIndex = 14;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(940, 106);
            label5.Name = "label5";
            label5.Size = new Size(64, 15);
            label5.TabIndex = 13;
            label5.Text = "Game Role";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(7, 106);
            label4.Name = "label4";
            label4.Size = new Size(50, 15);
            label4.TabIndex = 11;
            label4.Text = "Country";
            // 
            // PlayerCountryBox
            // 
            PlayerCountryBox.BorderStyle = BorderStyle.FixedSingle;
            PlayerCountryBox.Location = new Point(7, 124);
            PlayerCountryBox.Name = "PlayerCountryBox";
            PlayerCountryBox.Size = new Size(473, 23);
            PlayerCountryBox.TabIndex = 10;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(941, 59);
            label3.Name = "label3";
            label3.Size = new Size(63, 15);
            label3.TabIndex = 9;
            label3.Text = "Gamer Tag";
            // 
            // PlayerGTagBox
            // 
            PlayerGTagBox.BorderStyle = BorderStyle.FixedSingle;
            PlayerGTagBox.Location = new Point(941, 77);
            PlayerGTagBox.Name = "PlayerGTagBox";
            PlayerGTagBox.Size = new Size(310, 23);
            PlayerGTagBox.TabIndex = 8;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(500, 59);
            label2.Name = "label2";
            label2.Size = new Size(63, 15);
            label2.TabIndex = 7;
            label2.Text = "Last Name";
            // 
            // PlayerLNameBox
            // 
            PlayerLNameBox.BorderStyle = BorderStyle.FixedSingle;
            PlayerLNameBox.Location = new Point(500, 77);
            PlayerLNameBox.Name = "PlayerLNameBox";
            PlayerLNameBox.Size = new Size(422, 23);
            PlayerLNameBox.TabIndex = 6;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(7, 59);
            label1.Name = "label1";
            label1.Size = new Size(64, 15);
            label1.TabIndex = 5;
            label1.Text = "First Name";
            // 
            // PlayerFNameBox
            // 
            PlayerFNameBox.BorderStyle = BorderStyle.FixedSingle;
            PlayerFNameBox.Location = new Point(7, 77);
            PlayerFNameBox.Name = "PlayerFNameBox";
            PlayerFNameBox.Size = new Size(473, 23);
            PlayerFNameBox.TabIndex = 4;
            // 
            // PlayerDataGrid
            // 
            PlayerDataGrid.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            PlayerDataGrid.Location = new Point(6, 209);
            PlayerDataGrid.Name = "PlayerDataGrid";
            PlayerDataGrid.RowTemplate.Height = 25;
            PlayerDataGrid.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            PlayerDataGrid.Size = new Size(1513, 682);
            PlayerDataGrid.TabIndex = 3;
            PlayerDataGrid.MouseDoubleClick += PlayerDataGrid_MouseDoubleClick;
            // 
            // PlayerCreateButton
            // 
            PlayerCreateButton.Location = new Point(1162, 897);
            PlayerCreateButton.Name = "PlayerCreateButton";
            PlayerCreateButton.Size = new Size(115, 42);
            PlayerCreateButton.TabIndex = 2;
            PlayerCreateButton.Text = "Create";
            PlayerCreateButton.UseVisualStyleBackColor = true;
            PlayerCreateButton.Click += PlayerCreateButton_Click;
            // 
            // PlayerEditButton
            // 
            PlayerEditButton.Location = new Point(1283, 897);
            PlayerEditButton.Name = "PlayerEditButton";
            PlayerEditButton.Size = new Size(115, 42);
            PlayerEditButton.TabIndex = 1;
            PlayerEditButton.Text = "Edit";
            PlayerEditButton.UseVisualStyleBackColor = true;
            PlayerEditButton.Click += PlayerEditButton_Click;
            // 
            // PlayerClearFormButton
            // 
            PlayerClearFormButton.Location = new Point(1404, 897);
            PlayerClearFormButton.Name = "PlayerClearFormButton";
            PlayerClearFormButton.Size = new Size(115, 42);
            PlayerClearFormButton.TabIndex = 0;
            PlayerClearFormButton.Text = "Clear";
            PlayerClearFormButton.UseVisualStyleBackColor = true;
            PlayerClearFormButton.Click += PlayerClearFormButton_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1557, 997);
            Controls.Add(TeamsPlayersTab);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            TeamsPlayersTab.ResumeLayout(false);
            TeamTab.ResumeLayout(false);
            TeamTab.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)TeamDataGrid).EndInit();
            tabPage2.ResumeLayout(false);
            tabPage2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)PlayerDataGrid).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private TabControl TeamsPlayersTab;
        private TabPage TeamTab;
        private Button TeamCreateButton;
        private Button TeamEditButton;
        private Button TeamCLearFormButton;
        private TabPage tabPage2;
        private Button PlayerCreateButton;
        private Button PlayerEditButton;
        private Button PlayerClearFormButton;
        private DataGridView TeamDataGrid;
        private DataGridView PlayerDataGrid;
        private Label label7;
        private TextBox PlayerEmailBox;
        private TextBox PlayerDiscordBox;
        private Label label6;
        private ComboBox PlayerGameRoleBox;
        private ComboBox PlayerTeamRoleBox;
        private Label label5;
        private Label label4;
        private TextBox PlayerCountryBox;
        private Label label3;
        private TextBox PlayerGTagBox;
        private Label label2;
        private TextBox PlayerLNameBox;
        private Label label1;
        private TextBox PlayerFNameBox;
        private MonthCalendar PlayerDOBCalender;
        private Label label11;
        private Label label10;
        private Label label9;
        private TextBox PlayerContactBox;
        private Label label8;
        private ComboBox PlayerTeamComboBox;
        private TextBox TeamOrgBox;
        private TextBox TeamopggBox;
        private Label label22;
        private Label label21;
        private TextBox TeamTagBox;
        private CheckBox RetiredCheckbox;
        private Label label20;
        private TextBox TeamWebsiteBox;
        private Label label19;
        private TextBox TeamTwitterBox;
        private TextBox TeamManagerEmailBox;
        private Label label18;
        private Label label17;
        private TextBox TeamManagerDiscordBox;
        private Label label16;
        private TextBox TeamManagerTagBox;
        private Label label15;
        private TextBox TeamCountryBox;
        private Label label14;
        private TextBox TeamLogoBox;
        private Button TeamLogoUploadButton;
        private Label label13;
        private TextBox TeamNameBox;
        private Label label12;
        private Button TeamRefreshDataButton;
        private Button PlayerRefreshDataButton;
    }
}
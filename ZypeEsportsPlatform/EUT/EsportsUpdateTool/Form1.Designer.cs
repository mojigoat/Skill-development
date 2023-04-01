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
            tabPage1 = new TabPage();
            dataGridView2 = new DataGridView();
            button3 = new Button();
            button2 = new Button();
            button1 = new Button();
            tabPage2 = new TabPage();
            dataGridView1 = new DataGridView();
            button6 = new Button();
            button5 = new Button();
            button4 = new Button();
            FName = new TextBox();
            label1 = new Label();
            LName = new TextBox();
            label2 = new Label();
            GTag = new TextBox();
            label3 = new Label();
            textBox1 = new TextBox();
            label4 = new Label();
            label5 = new Label();
            TeamRole = new ComboBox();
            GameRole = new ComboBox();
            label6 = new Label();
            textBox2 = new TextBox();
            textBox3 = new TextBox();
            label7 = new Label();
            label8 = new Label();
            textBox4 = new TextBox();
            label9 = new Label();
            label10 = new Label();
            label11 = new Label();
            monthCalendar1 = new MonthCalendar();
            comboBox1 = new ComboBox();
            TeamsPlayersTab.SuspendLayout();
            tabPage1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView2).BeginInit();
            tabPage2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).BeginInit();
            SuspendLayout();
            // 
            // TeamsPlayersTab
            // 
            TeamsPlayersTab.AccessibleName = "TeamsPlayersTab";
            TeamsPlayersTab.Controls.Add(tabPage1);
            TeamsPlayersTab.Controls.Add(tabPage2);
            TeamsPlayersTab.Location = new Point(12, 12);
            TeamsPlayersTab.Name = "TeamsPlayersTab";
            TeamsPlayersTab.SelectedIndex = 0;
            TeamsPlayersTab.Size = new Size(831, 541);
            TeamsPlayersTab.TabIndex = 0;
            // 
            // tabPage1
            // 
            tabPage1.Controls.Add(dataGridView2);
            tabPage1.Controls.Add(button3);
            tabPage1.Controls.Add(button2);
            tabPage1.Controls.Add(button1);
            tabPage1.Location = new Point(4, 24);
            tabPage1.Name = "tabPage1";
            tabPage1.Padding = new Padding(3);
            tabPage1.Size = new Size(823, 513);
            tabPage1.TabIndex = 0;
            tabPage1.Text = "Teams";
            tabPage1.UseVisualStyleBackColor = true;
            // 
            // dataGridView2
            // 
            dataGridView2.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView2.Location = new Point(6, 199);
            dataGridView2.Name = "dataGridView2";
            dataGridView2.RowTemplate.Height = 25;
            dataGridView2.Size = new Size(811, 279);
            dataGridView2.TabIndex = 3;
            // 
            // button3
            // 
            button3.Location = new Point(580, 484);
            button3.Name = "button3";
            button3.Size = new Size(75, 23);
            button3.TabIndex = 2;
            button3.Text = "Create";
            button3.UseVisualStyleBackColor = true;
            // 
            // button2
            // 
            button2.Location = new Point(661, 484);
            button2.Name = "button2";
            button2.Size = new Size(75, 23);
            button2.TabIndex = 1;
            button2.Text = "Edit";
            button2.UseVisualStyleBackColor = true;
            // 
            // button1
            // 
            button1.Location = new Point(742, 484);
            button1.Name = "button1";
            button1.Size = new Size(75, 23);
            button1.TabIndex = 0;
            button1.Text = "Delete";
            button1.UseVisualStyleBackColor = true;
            // 
            // tabPage2
            // 
            tabPage2.Controls.Add(comboBox1);
            tabPage2.Controls.Add(monthCalendar1);
            tabPage2.Controls.Add(label11);
            tabPage2.Controls.Add(label10);
            tabPage2.Controls.Add(label9);
            tabPage2.Controls.Add(textBox4);
            tabPage2.Controls.Add(label8);
            tabPage2.Controls.Add(label7);
            tabPage2.Controls.Add(textBox3);
            tabPage2.Controls.Add(textBox2);
            tabPage2.Controls.Add(label6);
            tabPage2.Controls.Add(GameRole);
            tabPage2.Controls.Add(TeamRole);
            tabPage2.Controls.Add(label5);
            tabPage2.Controls.Add(label4);
            tabPage2.Controls.Add(textBox1);
            tabPage2.Controls.Add(label3);
            tabPage2.Controls.Add(GTag);
            tabPage2.Controls.Add(label2);
            tabPage2.Controls.Add(LName);
            tabPage2.Controls.Add(label1);
            tabPage2.Controls.Add(FName);
            tabPage2.Controls.Add(dataGridView1);
            tabPage2.Controls.Add(button6);
            tabPage2.Controls.Add(button5);
            tabPage2.Controls.Add(button4);
            tabPage2.Location = new Point(4, 24);
            tabPage2.Name = "tabPage2";
            tabPage2.Padding = new Padding(3);
            tabPage2.Size = new Size(823, 513);
            tabPage2.TabIndex = 1;
            tabPage2.Text = "Players";
            tabPage2.UseVisualStyleBackColor = true;
            // 
            // dataGridView1
            // 
            dataGridView1.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView1.Location = new Point(6, 209);
            dataGridView1.Name = "dataGridView1";
            dataGridView1.RowTemplate.Height = 25;
            dataGridView1.Size = new Size(811, 269);
            dataGridView1.TabIndex = 3;
            // 
            // button6
            // 
            button6.Location = new Point(580, 484);
            button6.Name = "button6";
            button6.Size = new Size(75, 23);
            button6.TabIndex = 2;
            button6.Text = "Create";
            button6.UseVisualStyleBackColor = true;
            // 
            // button5
            // 
            button5.Location = new Point(661, 484);
            button5.Name = "button5";
            button5.Size = new Size(75, 23);
            button5.TabIndex = 1;
            button5.Text = "Edit";
            button5.UseVisualStyleBackColor = true;
            // 
            // button4
            // 
            button4.Location = new Point(742, 484);
            button4.Name = "button4";
            button4.Size = new Size(75, 23);
            button4.TabIndex = 0;
            button4.Text = "Delete";
            button4.UseVisualStyleBackColor = true;
            // 
            // FName
            // 
            FName.BorderStyle = BorderStyle.FixedSingle;
            FName.Location = new Point(7, 77);
            FName.Name = "FName";
            FName.Size = new Size(154, 23);
            FName.TabIndex = 4;
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
            // LName
            // 
            LName.BorderStyle = BorderStyle.FixedSingle;
            LName.Location = new Point(186, 76);
            LName.Name = "LName";
            LName.Size = new Size(174, 23);
            LName.TabIndex = 6;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(186, 58);
            label2.Name = "label2";
            label2.Size = new Size(63, 15);
            label2.TabIndex = 7;
            label2.Text = "Last Name";
            // 
            // GTag
            // 
            GTag.BorderStyle = BorderStyle.FixedSingle;
            GTag.Location = new Point(386, 76);
            GTag.Name = "GTag";
            GTag.Size = new Size(165, 23);
            GTag.TabIndex = 8;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(386, 58);
            label3.Name = "label3";
            label3.Size = new Size(63, 15);
            label3.TabIndex = 9;
            label3.Text = "Gamer Tag";
            // 
            // textBox1
            // 
            textBox1.BorderStyle = BorderStyle.FixedSingle;
            textBox1.Location = new Point(7, 124);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(154, 23);
            textBox1.TabIndex = 10;
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
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(385, 105);
            label5.Name = "label5";
            label5.Size = new Size(64, 15);
            label5.TabIndex = 13;
            label5.Text = "Game Role";
            // 
            // TeamRole
            // 
            TeamRole.FormattingEnabled = true;
            TeamRole.Location = new Point(186, 123);
            TeamRole.Name = "TeamRole";
            TeamRole.Size = new Size(174, 23);
            TeamRole.TabIndex = 14;
            // 
            // GameRole
            // 
            GameRole.FormattingEnabled = true;
            GameRole.Location = new Point(386, 123);
            GameRole.Name = "GameRole";
            GameRole.Size = new Size(165, 23);
            GameRole.TabIndex = 15;
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(186, 105);
            label6.Name = "label6";
            label6.Size = new Size(61, 15);
            label6.TabIndex = 16;
            label6.Text = "Team Role";
            // 
            // textBox2
            // 
            textBox2.BorderStyle = BorderStyle.FixedSingle;
            textBox2.Location = new Point(8, 171);
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(153, 23);
            textBox2.TabIndex = 17;
            textBox2.TextChanged += textBox2_TextChanged;
            // 
            // textBox3
            // 
            textBox3.BorderStyle = BorderStyle.FixedSingle;
            textBox3.Location = new Point(186, 170);
            textBox3.Name = "textBox3";
            textBox3.Size = new Size(174, 23);
            textBox3.TabIndex = 18;
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
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(186, 152);
            label8.Name = "label8";
            label8.Size = new Size(81, 15);
            label8.TabIndex = 20;
            label8.Text = "Email Address";
            // 
            // textBox4
            // 
            textBox4.BorderStyle = BorderStyle.FixedSingle;
            textBox4.Location = new Point(386, 170);
            textBox4.Name = "textBox4";
            textBox4.Size = new Size(165, 23);
            textBox4.TabIndex = 21;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(386, 152);
            label9.Name = "label9";
            label9.Size = new Size(96, 15);
            label9.TabIndex = 22;
            label9.Text = "Contact Number";
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
            // label11
            // 
            label11.AutoSize = true;
            label11.Location = new Point(591, 15);
            label11.Name = "label11";
            label11.Size = new Size(73, 15);
            label11.TabIndex = 26;
            label11.Text = "Date of Birth";
            label11.Click += label11_Click;
            // 
            // monthCalendar1
            // 
            monthCalendar1.Location = new Point(591, 35);
            monthCalendar1.Name = "monthCalendar1";
            monthCalendar1.TabIndex = 27;
            // 
            // comboBox1
            // 
            comboBox1.FormattingEnabled = true;
            comboBox1.Location = new Point(7, 31);
            comboBox1.Name = "comboBox1";
            comboBox1.Size = new Size(353, 23);
            comboBox1.TabIndex = 28;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(855, 565);
            Controls.Add(TeamsPlayersTab);
            Name = "Form1";
            Text = "Form1";
            TeamsPlayersTab.ResumeLayout(false);
            tabPage1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)dataGridView2).EndInit();
            tabPage2.ResumeLayout(false);
            tabPage2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private TabControl TeamsPlayersTab;
        private TabPage tabPage1;
        private Button button3;
        private Button button2;
        private Button button1;
        private TabPage tabPage2;
        private Button button6;
        private Button button5;
        private Button button4;
        private DataGridView dataGridView2;
        private DataGridView dataGridView1;
        private Label label7;
        private TextBox textBox3;
        private TextBox textBox2;
        private Label label6;
        private ComboBox GameRole;
        private ComboBox TeamRole;
        private Label label5;
        private Label label4;
        private TextBox textBox1;
        private Label label3;
        private TextBox GTag;
        private Label label2;
        private TextBox LName;
        private Label label1;
        private TextBox FName;
        private MonthCalendar monthCalendar1;
        private Label label11;
        private Label label10;
        private Label label9;
        private TextBox textBox4;
        private Label label8;
        private ComboBox comboBox1;
    }
}
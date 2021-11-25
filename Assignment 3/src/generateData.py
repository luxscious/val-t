# 3309 Assignment 3 Data Generator
# Generates data for the User/Player, Matches and Tournaments
# Written by: Rohan Kamra Lyons
# Credits: jeanphorn on GitHub for username and password lists

# TODO #1 Rank (and wins based off that), matches (and match comments), fix tournament based off the fact that you need 6/14 teams per tournament, add excel links in match cells to tournament cells/match to players/tournament to player
# 60 IN SILVER, 40 IN GOLD therefore 20 teams each reagular rank (500) + extras (60 * 5 = 300, 40 * 5 = 200)

# Needed libraries
from random import randint
import datetime

# "pip intall xlsxwriter", needed for outputting to spreadsheet
import xlsxwriter

# Name lists
lastNameList = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"]
firstNameList = ["James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Micheal", "Linda", "Will", "Elizabeth", "David", "Richard", "Susan", "Josh", "Jessica", "Tom", "Sarah", "Charles", "Chris", "Daniel", "Lisa", "Matt", "Tony", "Mark", "Sandra", "Ashley", "Steven", "Kim", "Paul", "Emily", "Andrew", "Michelle", "Ken", "Kevin", "Brian", "Amanda", "George", "Melissa", "Edward", "Stephanie", "Tim", "Rebecca", "Jason", "Sharon", "Jeff", "Laura", "Ryan", "Gary", "Amy", "Nick"]
fullNameList = []

# Email lists
emailEnd = ["outlook.com", "gmail.com", "yahoo.com", "rogers.ca", "inbox.com", "mail.com"]
emailList = []

# Win and loss lists
winList = []
lossList = []

# Password, username, and rank lists
userList = []
passList = []
rankList = []

# Tournament vars
regionChoice = ["North America", "Europe", "South America", "Oceania", "Korea", "China", "South East Asia"]
leagueChoice = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Immortal"]
regionList = []
leagueList = []
startDateList = []
endDateList = []
buyIn = []
payOut = []

# Match vars
winnerList = []
tournamentIdList = []
tournamentId = 1
maxBracketList = []
bracketList = []

# Bracket vars
bracketMax = []
bracketTournament = []

# Team vars
teamList = []
teamWins = []
teamLoss = []

# Number for checking whether more data is needed
listNum = 0
userNum = 0

# Boolean to check whether name can be added
canAdd = True

# Grabbing usernames and passwords
f = open('Assignment 3\\src\\usernames.txt', 'r')
rawUsername = f.read()
rawUsername = [rawUsername]

f = open('Assignment 3\\src\\passlist.txt', 'r')
rawPassword = f.read()
rawPassword = [rawPassword]

# Grabbing team names
f = open('Assignment 3\\src\\tempteamlist.txt', 'r')
rawTeams = f.read()
rawTeams = [rawTeams]

# Converting usernames, passwords and teams
def convert(lst):
    return '\n'.join(lst).split()
 
usernames = list( convert(rawUsername))
passwords = list( convert(rawPassword))
teams = list( convert(rawTeams))

for i in range(50):
    for i in range(3):
        bracketMax.append(3)
        bracketTournament.append(tournamentId)
    for i in range(2):
        bracketMax.append(2)
        bracketTournament.append(tournamentId + 1)
    tournamentId += 2

tournamentId = 1

# Assigning tournament values
while len(regionList) < 100:

    # Adding region and league values
    regionList.append(regionChoice[randint(0, len(regionChoice) - 1)])
    leagueList.append(leagueChoice[randint(0, len(leagueChoice) - 1)])

    # Adding date values
    tempDate = randint(1, 20)
    tempMonth = randint(1, 12)
    startDateList.append(datetime.datetime(2021, tempMonth, tempDate))
    endDateList.append(datetime.datetime(2021, tempMonth, tempDate + randint(6, 8)))

    # Adding money values
    buyIn.append(randint(0, 10))
    payOut.append(randint(15, 100))

for i in range(200):
    teamList.append(teams[i])
    teamWins.append(randint(0, 5))
    teamLoss.append(randint(0, 5))

# 
for i in range(50):
        
    for j in range(15):
        tournamentIdList.append(tournamentId)
        maxBracketList.append(3)
        if(j < 4):
            bracketList.append(1)
        elif(j > 3 and j < 10):
            bracketList.append(2)
        else: 
            bracketList.append(3)

        winnerList.append(teamList[randint(0, 199)])

    for j in range(5):
        tournamentIdList.append(tournamentId + 1)
        maxBracketList.append(2)
        if(j < 2):
            bracketList.append(1)
        else:
            bracketList.append(2)

        winnerList.append(teamList[randint(0, 199)])

    tournamentId += 2


# Checks whether there are 1000 names yet
while listNum < 1000: 

    for i in firstNameList:

        # Makes the temp name a random name
        tempName = i + " " + lastNameList[randint(0, 49)]

        # Checks whether than random name already exists
        for j in fullNameList:
            if(tempName == j):
                canAdd = False

        # If it doesn't, start changing the arrays
        if(canAdd):

            # Names
            fullNameList.append(tempName)

            #Email
            tempEmail = tempName.replace(" ", "").lower() + "@" + emailEnd[randint(0, 5)]
            emailList.append(tempEmail)

            # Wins and losses
            tempMatch = randint(0, 20)
            winList.append(tempMatch)
            lossList.append(20 - tempMatch)

            listNum += 1

        canAdd = True

# Adding user and pass with buffer
for i in range(listNum + 1000):

    # Setting the temp user and pass to a random user/pass
    tempUser = usernames[randint(0, len(usernames))]
    tempPass = passwords[randint(0, len(passwords))]

    # Checks whether the username exists
    for j in userList:
        if(tempUser == j):
            canAdd = False

    # Checks whether the password exists
    for j in passList:
        if(tempPass == j):
            canAdd = False
    
    # Adds the user and pass to lists
    if(canAdd):
        userList.append(tempUser)
        passList.append(tempPass)

    canAdd = True

# Adds the ranks to user lists
for i in range(1000):
    rankList.append(leagueList[int(i / 10)])

# Create excel sheet
workbook = xlsxwriter.Workbook('data.xlsx')
userSheet = workbook.add_worksheet()
tournamentSheet = workbook.add_worksheet()
bracketSheet = workbook.add_worksheet()
matchSheet = workbook.add_worksheet()
teamSheet = workbook.add_worksheet()
currency = workbook.add_format({'num_format': '[$$-409]#,##0.00'})
date = workbook.add_format({'num_format': 'MMM DD'})

# Title and format User sheet
userSheet.write("A1", "User ID")
userSheet.write("B1", "Username")
userSheet.set_column("B:B", 20)
userSheet.write("C1", "Email")
userSheet.set_column("C:C", 30)
userSheet.write("D1", "Password")
userSheet.set_column("D:D", 20)
userSheet.write("E1", "Rank")
userSheet.set_column("E:E", 10)
userSheet.write("F1", "Wins")
userSheet.write("G1", "Losses")

# Writing User data to sheet
for i in range(1000):
    userSheet.write('A' + str(i + 2), str(i + 1))
    userSheet.write('B' + str(i + 2), userList[i])
    userSheet.write('C' + str(i + 2), emailList[i])
    userSheet.write('D' + str(i + 2), passList[i])
    userSheet.write('E' + str(i + 2), rankList[i])
    userSheet.write('F' + str(i + 2), str(winList[i]))
    userSheet.write('G' + str(i + 2), str(lossList[i]))

# Title and format Tournament sheet
tournamentSheet.write("A1", "Tournament ID")
tournamentSheet.set_column("A:A", 15)
tournamentSheet.write("B1", "Region")
tournamentSheet.set_column("B:B", 15)
tournamentSheet.write("C1", "League")
tournamentSheet.set_column("C:C", 10)
tournamentSheet.write("D1", "Start Date")
tournamentSheet.set_column("D:D", 10)
tournamentSheet.write("E1", "End Date")
tournamentSheet.set_column("E:E", 10)
tournamentSheet.write("F1", "Buy In")
tournamentSheet.write("G1", "Pay Out")

# Writing Tournament data to sheet
for i in range(100):
    tournamentSheet.write('A' + str(i + 2), i + 1)
    tournamentSheet.write('B' + str(i + 2), regionList[i])
    tournamentSheet.write('C' + str(i + 2), leagueList[i])
    tournamentSheet.write('D' + str(i + 2), startDateList[i], date)
    tournamentSheet.write('E' + str(i + 2), endDateList[i], date)
    tournamentSheet.write('F' + str(i + 2), buyIn[i], currency)
    tournamentSheet.write('G' + str(i + 2), payOut[i], currency)

# Title and format Bracket sheet
bracketSheet.write("A1", "Max Bracket Level")
bracketSheet.set_column("A:A", 15)
bracketSheet.write("B1", "Tournament ID")
bracketSheet.set_column("B:B", 15)

# Writing Bracket data to sheet
for i in range(250):
    bracketSheet.write('A' + str(i + 2), bracketMax[i])
    bracketSheet.write('B' + str(i + 2), bracketTournament[i])

# Title and format Match sheet
matchSheet.write("A1", "Match ID")
matchSheet.write("B1", "Match Winner")
matchSheet.set_column("B:B", 30)
matchSheet.write("C1", "Bracket Level")
matchSheet.set_column("C:C", 15)
matchSheet.write("D1", "Max Bracket Level")
matchSheet.set_column("D:D", 15)
matchSheet.write("E1", "Tournament ID")
matchSheet.set_column("E:E", 15)

# Writing Match data to sheet
for i in range(1000):
    matchSheet.write('A' + str(i + 2), i + 1)
    matchSheet.write('B' + str(i + 2), winnerList[i])
    matchSheet.write('C' + str(i + 2), bracketList[i])
    matchSheet.write('D' + str(i + 2), maxBracketList[i])
    matchSheet.write('E' + str(i + 2), tournamentIdList[i])

# Title and format Team sheet
teamSheet.write("A1", "Team ID")
teamSheet.write("B1", "Team Name")
teamSheet.set_column("B:B", 30)
teamSheet.write("C1", "Team Wins")
teamSheet.write("D1", "Team Losses")

# Writing Team data to sheet
for i in range(200):
    teamSheet.write('A' + str(i + 2), i + 1)
    teamSheet.write('B' + str(i + 2), teamList[i])
    teamSheet.write('C' + str(i + 2), teamWins[i])
    teamSheet.write('D' + str(i + 2), teamLoss[i])

workbook.close()
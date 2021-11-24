# 3309 Assignment 3 Data Generator
# Generates data for the User/Player, Matches and Tournaments
# Written by: Rohan Kamra Lyons
# Credits: jeanphorn on GitHub for username and password lists

# TODO Rank (and wins based off that), matches and tournaments

# Needed libraries
from random import randint

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

# Password and username lists
userList = []
passList = []

# Tournament vars
regionChoice = ["North America", "Europe", "South America", "Oceania", "Korea", "China", "South East Asia"]
leagueChoice = ["Iron", "Bronze", "Silver", "Gold", "Platnium", "Diamond", "Immortal"]
regionList = []
leagueList = []
startDateList = []
endDateList = []
buyIn = []
payOut = []

# Temp vars
tempName = ""
tempEmail = ""
tempMatch = 0

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

def convert(lst):
    return '\n'.join(lst).split()
 
usernames = list( convert(rawUsername))
passwords = list( convert(rawPassword))

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

while len(regionList) < 99:
    regionList.append(regionChoice[randint(0, len(regionChoice) - 1)])
    leagueList.append(leagueChoice[randint(0, len(leagueChoice) - 1)])

    buyIn.append(randint(0, 10))
    payOut.append(randint(15, 100))

# Create excel sheet
workbook = xlsxwriter.Workbook('data.xlsx')
userSheet = workbook.add_worksheet()
tournamentSheet = workbook.add_worksheet()
matchSheet = workbook.add_worksheet()
currency = workbook.add_format({'num_format': '[$$-409]#,##0.00'})

# Title User sheet
userSheet.write("A1", "User ID")
userSheet.write("B1", "Username")
userSheet.set_column("B:B", 20)
userSheet.write("C1", "Email")
userSheet.set_column("C:C", 30)
userSheet.write("D1", "Password")
userSheet.set_column("D:D", 20)
userSheet.write("E1", "Wins")
userSheet.write("F1", "Losses")

# Writing User data to sheet
for i in range(listNum):
    userSheet.write('A' + str(userNum + 2), str(userNum + 1))
    userSheet.write('B' + str(userNum + 2), userList[userNum])
    userSheet.write('C' + str(userNum + 2), emailList[userNum])
    userSheet.write('D' + str(userNum + 2), passList[userNum])
    userSheet.write('E' + str(userNum + 2), str(winList[userNum]))
    userSheet.write('F' + str(userNum + 2), str(lossList[userNum]))
    userNum += 1

tournamentSheet.write("A1", "Region")
tournamentSheet.set_column("A:A", 15)
tournamentSheet.write("B1", "League")
tournamentSheet.set_column("B:B", 10)
tournamentSheet.write("C1", "Start Date")
tournamentSheet.write("D1", "End Date")
tournamentSheet.write("E1", "Buy In")
tournamentSheet.write("F1", "Pay Out")

for i in range(99):
    tournamentSheet.write('A' + str(i + 2), regionList[i])
    tournamentSheet.write('B' + str(i + 2), leagueList[i])
    tournamentSheet.write('E' + str(i + 2), buyIn[i], currency)
    tournamentSheet.write('F' + str(i + 2), payOut[i], currency)

workbook.close()
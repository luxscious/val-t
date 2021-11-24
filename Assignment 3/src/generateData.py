# 3309 Assignment 3 Data Generator
# Generates data for the User/Player, Matches and Tournaments
# Written by: Rohan Kamra Lyons
# Credits: jeanphorn on GitHub for username and password lists

# TODO Rank (and wins based off that), matches and tournaments

# Needed libraries
from random import randint
import base64

# "pip install requests"
import requests

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

# Temp vars
tempName = ""
tempEmail = ""
tempMatch = 0

# Number for checking whether more data is needed
listNum = 0
newNum = 0

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

# Create excel sheet
workbook = xlsxwriter.Workbook('data.xlsx')
userSheet = workbook.add_worksheet()
matchSheet = workbook.add_worksheet()
tournamentSheet = workbook.add_worksheet()

# Title User sheet
userSheet.write("A1", "Actual Name")
userSheet.write("B1", "Username")
userSheet.write("C1", "Email")
userSheet.write("D1", "Password")
userSheet.write("E1", "Wins")
userSheet.write("F1", "Losses")

# Writing User data to sheet
for i in range(listNum):
    userSheet.write('A' + str(newNum + 2), fullNameList[newNum])
    userSheet.write('B' + str(newNum + 2), userList[newNum])
    userSheet.write('C' + str(newNum + 2), emailList[newNum])
    userSheet.write('D' + str(newNum + 2), passList[newNum])
    userSheet.write('E' + str(newNum + 2), str(winList[newNum]))
    userSheet.write('F' + str(newNum + 2), str(lossList[newNum]))
    newNum += 1
workbook.close()
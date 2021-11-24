# 3309 Assignment 3 Data Generator
# Generates Names and Emails

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

# Temp vars
tempName = ""
tempEmail = ""
tempMatch = 0

# Number for checking whether more data is needed
listNum = 0
newNum = 0

# Boolean to check whether name can be added
canAdd = True

# Does it a max of 30 times
for x in range(30): 

    # Checks whether there are 1000 names yet
    if(listNum < 1000):
        for i in firstNameList:

            # Makes the temp name a random name
            tempName = i + " " + lastNameList[randint(0, 49)]

            # Checks whether than random name already exists
            for j in fullNameList:
                if(tempName == j):
                    canAdd = False

            # If it doesn't, add it ot the name list
            if(canAdd):
                fullNameList.append(tempName)
                listNum += 1
                tempMatch = randint(0, 20)
                winList.append(tempMatch)
                lossList.append(20 - tempMatch)
            canAdd = True

# Changes the names into emails, then adds them to the email list
for y in fullNameList:
    tempEmail = y.replace(" ", "").lower() + "@" + emailEnd[randint(0, 5)]
    emailList.append(tempEmail)

# Create excel sheet
workbook = xlsxwriter.Workbook('data.xlsx')
userSheet = workbook.add_worksheet()
matchSheet = workbook.add_worksheet()
tournamentSheet = workbook.add_worksheet()

# Title User sheet
userSheet.write("A1", "Actual Name")
userSheet.write("B1", "Email")
userSheet.write("C1", "Wins")
userSheet.write("D1", "Losses")

# Writing User data to sheet
for z in range(listNum):
    userSheet.write('A' + str(newNum + 2), fullNameList[newNum])
    userSheet.write('B' + str(newNum + 2), emailList[newNum])
    userSheet.write('C' + str(newNum + 2), str(winList[newNum]))
    userSheet.write('D' + str(newNum + 2), str(lossList[newNum]))
    newNum += 1
workbook.close()
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UNICOMbankMyOwnCreation
{
    internal class BankAccount
    {
public string AccountHolderName { get; private set; }
public int AccountNumber { get; private set; }
public decimal AccountBalance { get; private set; }
public string AccountType { get; private set; }
public string AccountBranch { get; private set; }

public BankAccount(string accountHolderName,
                   int accountNumber, 
                   decimal accountBalance, 
                   string accountType,
                   string accountBranch)
        {
            AccountHolderName = accountHolderName;
            AccountNumber = accountNumber;
            AccountBalance = accountBalance;
            AccountType = accountType;
            AccountBranch = accountBranch;
        }
    public void PrintAllDetails()
        {
            Console.WriteLine($"AccountHolderName is : {AccountHolderName}");
            Console.WriteLine($"AccountNumber  is : {AccountNumber}");
            Console.WriteLine($"AccountBalance is : {AccountBalance:F2}");
            Console.WriteLine($"AccountType is : {AccountType}");
            Console.WriteLine($"AccountBranch is : {AccountBranch}");
        }
        public decimal Deposit(decimal amount)
        {
            if (amount >=1000m)
            {
                return amount = 1000m; ;
            }
            else
            {
                return AccountBalance += amount;
            }
        }
        
        public bool Withdrawal(decimal amount)
        {
            if (amount >= AccountBalance)
            {
                Console.WriteLine();
                return false;
            }
            else { 
                Console.WriteLine(AccountBalance -= amount);
                return true;
            }
        }
        
    }
}

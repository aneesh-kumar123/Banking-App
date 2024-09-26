//creating bank class 
class Bank{
  //having persons array and personId
  static #persons=[]
  static personId = 0;
  constructor(persons){
    
    
  }
  static CreateBankAccount(firstName,lastName,age)
  {
    //checking if age is greater than 18
    if(age>=18)
    {
      //creating person object
      let personObj=person.createCustomerAccount(Bank.personId++,firstName,lastName,age)
    }
    else
    {
      return "Age should be greater than 18"
    }

  }
  
}
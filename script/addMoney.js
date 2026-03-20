document.getElementById("add-money-btn").addEventListener("click", function() {
//    bank account get
    const bankAccount =getValueFromInput("add-money-bank");
    if(bankAccount=="Pick a Bank"){
        alert("Please select a bank");
        return;
    }
    // get bank account number
    const bankAccountNumber=getValueFromInput("add-money-number");
    if(bankAccountNumber.length!=11){
        alert("Invalid Bank Account Number");
        return;
    }
// get amount
    const addMoneyAmount=getValueFromInput("add-money-amount");
    const currentBalance=getBalance();
    const newBalance= currentBalance+Number(addMoneyAmount);
    const pin=getValueFromInput("add-money-pin");
    if(pin!="1234"){
        alert("Invalid PIN");
        return;
    }
    console.log(newBalance);
    setBalance(newBalance);
    alert(`Money added successfully from
         ${bankAccount} at ${new Date()}`);
    //   1-history container dhore anbo
    const historyContainer=document.getElementById("history-container");
    // 2 new div create korbo
    const newTransaction=document.createElement("div");
    

    // 3 new div innerHTML set korbo
    newTransaction.innerHTML=`
    <div class="transaction-card p-5 bg-base-100 ">
      Money added successfully from
         ${bankAccount} ,acc-no(${bankAccountNumber}) at ${new Date()}
    </div>
    `
    // 4 history container a newDv append korbo 
    historyContainer.append(newTransaction);

});
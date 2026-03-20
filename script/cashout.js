document.getElementById("cashout-btn").addEventListener("click", function() {

  const cashoutNumberInput = getValueFromInput("cashout-number");

  if (cashoutNumberInput.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }

  const cashoutAmount = getValueFromInput("cashout-amount");

  if (cashoutAmount <= 0 || isNaN(cashoutAmount)) {
    alert("Invalid Amount");
    return;
  }

  const amount = Number(cashoutAmount);
  const currentBalance = getBalance();
  const newBalance = currentBalance - amount;

  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }

  const cashoutPinInput = getValueFromInput("cashout-pin");

  if (cashoutPinInput === "1234") {

    const bankAccount = "Agent Account"; // FIXED

    alert("Cashout successful");
    setBalance(newBalance);

    const historyContainer = document.getElementById("history-container");

    const newTransaction = document.createElement("div");

    newTransaction.innerHTML = `
      <div class="transaction-card p-5 bg-base-100">
        Cashout ${amount} successful from 
        ${bankAccount} (${cashoutNumberInput}) 
        at  ${new Date() } Thank you for using My Salami Apps!
      </div>
    `;

    historyContainer.append(newTransaction);

  } else {
    alert("Invalid PIN. Cashout failed.");
  }

});
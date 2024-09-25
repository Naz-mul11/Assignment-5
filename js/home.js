function donationCalculation(donatedId, inputAmount){
    const mainBalanceElement = document.getElementById('main-balance');
    const mainAccountBalance = parseFloat(mainBalanceElement.innerText);
  
    const donatedFundElement = document.getElementById(donatedId);
    const donatedFund = parseFloat(donatedFundElement.innerText);
  
    
    const totalDonatedFund = donatedFund + inputAmount;
    donatedFundElement.innerText = totalDonatedFund;
  
    const remainingBalance = mainAccountBalance - inputAmount;
    mainBalanceElement.innerText = remainingBalance;
  }
document.getElementById('add-money-1')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMonyInput = document.getElementById('input-add-money-1').value;
    

    if (addMonyInput || number <= 0) {
        alert('add money sucessfully')
        const account = document.getElementById('balance-1').innerText;
        console.log(account)


        const addMoneyNumber = parseFloat(addMonyInput);
        const balanceNumber = parseFloat(account);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        document.getElementById('balance-1').innerText = newBalance;
        
    } else {
        alert("invalid number.please enter the positive number");
    }

});

document.getElementById('add-money-2')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMonyInput = document.getElementById('input-add-money-2').value;
    

    if (addMonyInput || number <= 0) {
        alert('add money sucessfully')
        const account = document.getElementById('balance-2').innerText;
        console.log(account)


        const addMoneyNumber = parseFloat(addMonyInput);
        const balanceNumber = parseFloat(account);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        document.getElementById('balance-2').innerText = newBalance;
        
    } else {
        alert("invalid number.please enter the positive number");
    }

});

// document.getElementById('add-money-3')
// .addEventListener('click', function(event){
//     event.preventDefault();

//     const addMonyInput = document.getElementById('input-add-money-3').value;
    

//     if (addMonyInput || number <= 0) {
//         alert('add money sucessfully')
//         const account = document.getElementById('balance-3').innerText;
//         console.log(account)


//         const addMoneyNumber = parseFloat(addMonyInput);
//         const balanceNumber = parseFloat(account);
//         const newBalance = addMoneyNumber + balanceNumber;
//         console.log(newBalance)

//         document.getElementById('balance-3').innerText = newBalance;
        
//     } else {
//         alert("invalid number.please enter the positive number");
//     }

// });
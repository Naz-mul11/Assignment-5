document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMonyInput = document.getElementById('input-add-money').value;
    

    if (addMonyInput || number <= 0) {
        alert('add money sucessfully')
        const account = document.getElementById('balance').innerText;
        console.log(account)

        const addMoneyNumber = parseFloat(addMonyInput);
        const balanceNumber = parseFloat(account);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        document.getElementById('balance').innerText = newBalance;
        
    } else {
        alert("invalid number.please enter the positive number");
    }

});
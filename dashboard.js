// btn

const depositBtn = document.querySelector('#deposit-btn1');
const withdrawBtn = document.querySelector('#withdraw-btn2');
// input field
const depositField = document.querySelector('#deposit-field');
const withdrawField = document.querySelector('#withdraw-field');
// amount
const depositAmount = document.querySelector('#deposit-amount');
const withdrawAmount = document.querySelector('#withdraw-amount');
const balanceAmount = document.querySelector('#balance-amount');

depositBtn.addEventListener('click', function(){
        const depositFieldValue = depositField.value;
        // console.log(depositFieldValue);
        const depositConvertAmount = parseFloat(depositFieldValue)

        const previousDeposit = depositAmount.innerText;
        const previousDepositConvert = parseFloat(previousDeposit);
        // console.log(previousDepositConvert);

        const totalDeposit = depositConvertAmount + previousDepositConvert;
        // console.log(totalDeposit);
        const previousBalance = balanceAmount.innerText;
        const previousBalanceConvert = parseFloat(previousBalance)

        const totalBalance = depositConvertAmount + previousBalanceConvert;

        
       let mm= depositAmount.innerHTML = totalDeposit;
    //    console.log(mm);
        balanceAmount.innerHTML = totalBalance;

        depositField.value = "";

})
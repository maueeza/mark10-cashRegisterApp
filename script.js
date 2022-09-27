const inpBillAmount = document.getElementById("bill-amt");

//console.log(billAmount);
var inpCash = document.querySelector("#cash-note");

//console.log(cashAmt);

var chk_Btn = document.querySelector("#check-btn");
const next_Btn = document.querySelector("#next-btn");
next_Btn.style.display = "none";
const lbl_cash = document.querySelector("#lbl-cash-note");
lbl_cash.style.display = "none";
inpCash.style.display = "none";
chk_Btn.style.display = "none";


const currenciesPresent = [2000, 500, 100, 20, 10, 5, 1];
var DenominationsToBeGiven = [];
//console.log(next_Btn);
function calculateChange(amtToBeReturned)
{
    for(var i=0; i<currenciesPresent.length; i++)
    {
        console.log("amountToBeReturned :", amtToBeReturned );
        console.log("currenciesPresent[i] :", currenciesPresent[i] );
        noOfNotesForCurrDenomination = Math.trunc(amtToBeReturned/currenciesPresent[i]);
        console.log("noOfNotesForCurrDenomination : "+noOfNotesForCurrDenomination+"for Denomination of "+currenciesPresent[i]);
        amtToBeReturned = amtToBeReturned%currenciesPresent[i];
        console.log(i+ " iteration value of amtToBeReturned: "+amtToBeReturned);
        DenominationsToBeGiven[i] = noOfNotesForCurrDenomination;

    }
    console.log(DenominationsToBeGiven);
}



function validateInputs()
{
    const billAmount = Number(inpBillAmount.value);
    console.log("Bill Amount is : "+billAmount);
    var cashAmt = Number(inpCash.value);
    console.log("Cash Amount is : " +cashAmt);
    if(billAmount>0)
    {
       if(cashAmt>=billAmount)
       {
         console.log("Valid code");
         var amtToBeReturned = cashAmt-billAmount;
         calculateChange(amtToBeReturned);
       }
       else
       {
        alert("Cash Amount should be greater than or equal to Bill Amount");
       }
    }
    else
    {
        alert("Invalid Bill Amount");
    }
    
}

function billChangeEventHandler()
{
    next_Btn.style.display = "initial";
}

function nextBtnEventHandler()
{
    lbl_cash.style.display = "initial";
    inpCash.style.display = "initial";
    chk_Btn.style.display = "initial";
}

inpBillAmount.addEventListener("change",billChangeEventHandler);

next_Btn.addEventListener("click",nextBtnEventHandler);

validationFlag = chk_Btn.addEventListener("click",validateInputs);
//console.log("validationFlag value : ", validationFlag.toString());



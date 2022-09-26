const inpBillAmount = document.getElementById("bill-amt");
const billAmount = inpBillAmount.value;
//console.log(billAmount);
var inpCash = document.querySelector("#cash-note");
var cashAmt = inpCash.value;
//console.log(cashAmt);

var chkbtn = document.querySelector("#check-btn");
function chkBtnHandler()
{
    console.log("Bill Amount is : "+billAmount);
    console.log("Cash Amount is : " +cashAmt);
    if(billAmount>0)
    {
       if(cashAmt>=billAmount)
       {
         console.log("Valid code")
       }
       else
       {
        console.log("Cash Amount should be greater than or equal to Bill Amount");
       }
    }
    else
    {
        console.log("Invalid Bill Amount");
    }
    
}

chkbtn.addEventListener("click",chkBtnHandler);


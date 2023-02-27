document.getElementById('withdraw_btn').addEventListener('click',function()
{
    //input deposite filed get input 
    const depositeFirled = document.getElementById('withdraw_filed');
    const depositeFiledString = depositeFirled.value;
    const inputdepositeValue = parseFloat(depositeFiledString);

    //output show deposite 

    const depositeShow = document.getElementById('withdraw_show');
    const depositeShowString = depositeShow.innerText;
    const depositeShowValue = parseFloat(depositeShowString);

    //total deoiste 
    const totalDeposite = inputdepositeValue + depositeShowValue;
    depositeFirled.value = '';
    
    depositeShow.innerText = totalDeposite;

    // balance filed

    const balanceFiled = document.getElementById('balance_filed');
    const balanceString = balanceFiled.innerText;
    const balance = parseFloat(balanceString);

    const totalbalance = balance - inputdepositeValue ;

    balanceFiled.innerText = totalbalance;
    if(inputdepositeValue > totalbalance)
    {
        alert('your account have no money');
    }
})
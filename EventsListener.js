/*
    Add a click event listener to the element with the ID 'savingsTitle1' 
    to display form with ID 'savingsForm1'
*/
document.getElementById("savingsTitle1").addEventListener('click', function(){
    let forms = document.getElementsByTagName("form");

    for(let i = 0; i < forms.length; i++){
        if(forms[i].id == 'savingsForm1'){
            forms[i].classList.remove('form-off');
            forms[i].classList.add('form-on');
        }else{
            forms[i].classList.remove('form-on');
            forms[i].classList.add('form-off');
        }
    }
});

/*
    Add a click event listener to the element with the ID 'savingsTitle2' 
    to display form with ID 'savingsForm2'
*/
document.getElementById("savingsTitle2").addEventListener('click', function(){
    let forms = document.getElementsByTagName("form");

    for(let i = 0; i < forms.length; i++){
        if(forms[i].id == 'savingsForm2'){
            forms[i].classList.remove('form-off');
            forms[i].classList.add('form-on');
        }else{
            forms[i].classList.remove('form-on');
            forms[i].classList.add('form-off');
        }
    }
});

/*
    Add a click event listener to the element with the ID 'savingsTitle3' 
    to display form with ID 'savingsForm3'
*/
document.getElementById("savingsTitle3").addEventListener('click', function(){
    let forms = document.getElementsByTagName("form");

    for(let i = 0; i < forms.length; i++){
        if(forms[i].id == 'savingsForm3'){
            forms[i].classList.remove('form-off');
            forms[i].classList.add('form-on');
        }else{
            forms[i].classList.remove('form-on');
            forms[i].classList.add('form-off');
        }
    }
});

/*
    Add a click event listener to the element with the ID 'btnCalculate1' 
    to execute the specific actions for case 1
*/
document.getElementById("btnCalculate1").addEventListener('click', function(event){
    event.preventDefault();

    let currentAge = document.getElementById('currentAge1').value;
    let retirementAge = document.getElementById('retirementAge1').value;
    let currentSalary = document.getElementById('currentSalary1').value;
    let savingsRate = document.getElementById('savingsRate1').value;
    let raiseRate = document.getElementById('annualRaiseRate1').value;

    let resulat = calculateTotalSavings1(currentAge, retirementAge, currentSalary, savingsRate, raiseRate);
    document.getElementById('savingsAmount1').value = resulat;
});


/*
    Add a click event listener to the element with the ID 'btnCalculate2' 
    to execute the specific actions for case 2
*/
document.getElementById("btnCalculate2").addEventListener('click', function(){
    event.preventDefault();

    let currentAge = document.getElementById('currentAge2').value;
    let currentSalary = document.getElementById('currentSalary2').value;
    let savingsRate = document.getElementById('savingsRate2').value;
    let raiseRate = document.getElementById('annualRaiseRate2').value;
    let savingsAmount = document.getElementById('savingsAmount2').value;

    let resulat = calculateTotalSavings2(currentAge, currentSalary, savingsRate, raiseRate, savingsAmount);
    document.getElementById('retirementAge2').value = resulat;
});


/*
    Add a click event listener to the element with the ID 'btnCalculate3' 
    to execute the specific actions for case 3
*/
document.getElementById("btnCalculate3").addEventListener('click', function(){
    event.preventDefault();

    let currentAge = document.getElementById('currentAge3').value;
    let retirementAge = document.getElementById('retirementAge3').value;
    let currentSalary = document.getElementById('currentSalary3').value;
    let savingsRate = document.getElementById('savingsRate3').value;
    let raiseRate = document.getElementById('annualRaiseRate3').value;
    let annualExpenses = document.getElementById('annualExpenses3').value;

    let savingsAmount = calculateTotalSavings1(currentAge, retirementAge, currentSalary, savingsRate, raiseRate);
    document.getElementById('savingsAmount3').value = savingsAmount;
    
    let yearsOfSavings = calculateTotalSavings3(savingsAmount, annualExpenses);
    document.getElementById('yearsOfSavings3').value = yearsOfSavings;
});
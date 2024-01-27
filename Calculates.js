const calculateTotalSavings1 = (currentAge, retirementAge, currentSalary, savingsRate, raiseRate) => {
	let totalSavings = 0;
	let annualSalary = currentSalary * 12;

	savingsRate = savingsRate / 100;
	raiseRate = raiseRate / 100;

	for (let age = currentAge; age <= retirementAge; age++) {
		let annualSavings = annualSalary * savingsRate;
		totalSavings += annualSavings;
		annualSalary *= (1 + raiseRate);
	}

	return totalSavings.toFixed(2);
};

const calculateTotalSavings2 = (currentAge, currentSalary, savingsRate, raiseRate, savingsAmount) => {
	let years = 0;

	let totalSavings = 0;
	let annualSalary = currentSalary * 12;

	savingsRate = savingsRate / 100;
	raiseRate = raiseRate / 100;

	let currentSavings = 0;
	do{
		let annualSavings = annualSalary * savingsRate;
		currentSavings = totalSavings + annualSavings;
		totalSavings += annualSavings;
		annualSalary *= (1 + raiseRate);
		years++;

		if(years >= 100){
			break;
		}
	}while(currentSavings < savingsAmount);
	let retirementAge = parseInt(currentAge) + parseInt(years);
	return retirementAge;
};

const calculateTotalSavings3 = (totalSavings, annualExpenses) => {
	let yearsOfSavings = parseFloat(totalSavings) / parseFloat(annualExpenses);
	return yearsOfSavings.toFixed(2);
};

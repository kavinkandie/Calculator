
    function FindNetSalary(grossSalary, PAYE, NHIF,NSSF) {
    
        const PAYE= (taxRate / 100) * grossSalary;
        

        const netSalary = grossSalary - PAYE - NHIF-NSSF;
      
        return netSalary;
}
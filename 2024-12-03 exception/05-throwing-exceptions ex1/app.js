const showFactor = event => {
    event.preventDefault();
    const grade = +document.getElementById('grade').value;
    try {
        const factor = getFactor(grade);
        console.log(`The factor is: ${factor}`);
    } catch (error) {
        alert(error.message);
    }
}

const getFactor = (grade) => {
    if(!grade) throw new Error('The grade is required');
    if(grade < 0) throw new Error('The grade must be greater than 0');
    if(grade > 100) throw new Error('The grade must be less than 100');
    return 10*(Math.sqrt(grade))
};
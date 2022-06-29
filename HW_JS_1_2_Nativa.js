function checkAge(age) {
    if (typeof age !== 'number') {
        console.log("age is not of Number type");
        return;
    }

    let min = 18;
    let max = 60;

    if (age < min) {
        console.log("You don't have access cause your age is" + " " + age + " " + " It's less then " + min)
    }
    else if (age >= min && age < max) {
        console.log("Welcome!")
    }
    else if (age > max) {
        console.log("Keep calm and look Culture channel")
    }
    else {
        console.log("Technical work")
    }
}

checkAge(17);
checkAge(18);
checkAge(61);
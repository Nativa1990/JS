function checkAge(age) {
    if (typeof age === 'string' && age.length == 1) {
        age = parseInt(age, 10);
    }

    if (typeof age !== 'number') {
        throw new Error("age is not of Number type");
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

let age = prompt('How old are you?');
checkAge(age);
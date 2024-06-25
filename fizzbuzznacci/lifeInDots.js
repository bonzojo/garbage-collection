function lifeInDots(age) {
    console.log('Here is a representation of your age in dots. Each dot represents a week');
    const dots = '.'.repeat(52 * age);
    console.log(dots);
}

lifeInDots(35);
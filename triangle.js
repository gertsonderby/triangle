function determineTriangleType(lengthA, lengthB, lengthC) {
    if (arguments.length < 3 || lengthA <= 0 || lengthB <= 0 || lengthC <= 0) {
        throw new Error('Triangle must have three positive side lengths');
    }
    if (lengthA >= lengthB + lengthC || lengthB >= lengthA + lengthC || lengthC >= lengthA + lengthB) {
        throw new Error('Triangle has one side equal or greater than sum of others');
    }
    if (lengthA === lengthB && lengthB === lengthC) {
        // Equilateral: All sides equal
        return 'Equilateral';
    } else if (lengthA === lengthB || lengthB === lengthC || lengthA === lengthC) {
        // Isosceles: Two sides equal
        return 'Isosceles';
    } else {
        // Scalene: No sides equal
        return 'Scalene';
    }
}

if (module) {
    module.exports = determineTriangleType;
}

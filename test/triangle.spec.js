var expect = require('unexpected').clone();
var checkTri = require('../triangle.js');

describe('Triangle detector', function () {
    it('detects equilateral triangles', function () {
        expect(checkTri(1, 1, 1), 'to equal', 'Equilateral');
        expect(checkTri(0.1, 0.1, 0.1), 'to equal', 'Equilateral');
        expect(checkTri(1e50, 1e50, 1e50), 'to equal', 'Equilateral');
    });

    it('detects isosceles triangles', function () {
        expect(checkTri(1, 1, 0.5), 'to equal', 'Isosceles');
        expect(checkTri(0.1, 0.1, 0.05), 'to equal', 'Isosceles');
        expect(checkTri(1e50, 1e50, 1e40), 'to equal', 'Isosceles');
        expect(checkTri(1, 0.5, 1), 'to equal', 'Isosceles');
        expect(checkTri(0.1, 0.05, 0.1), 'to equal', 'Isosceles');
        expect(checkTri(1e50, 1e40, 1e50), 'to equal', 'Isosceles');
        expect(checkTri(0.5, 1, 1), 'to equal', 'Isosceles');
        expect(checkTri(0.05, 0.1, 0.1), 'to equal', 'Isosceles');
        expect(checkTri(1e40, 1e50, 1e50), 'to equal', 'Isosceles');
    });

    it('detects scalene triangles', function () {
        expect(checkTri(3, 4, 5), 'to equal', 'Scalene');
    });

    describe('throws error if triangle is degenerate', function () {
        it('has too few sides', function () {
            expect(function () {
                checkTri(1);
            }, 'to throw', 'Triangle must have three positive side lengths');
            expect(function () {
                checkTri(1, 2);
            }, 'to throw', 'Triangle must have three positive side lengths');
        });

        it('has zero-length side(s)', function () {
            expect(function () {
                checkTri(1, 2, 0);
            }, 'to throw', 'Triangle must have three positive side lengths');
            expect(function () {
                checkTri(1, 0, 3);
            }, 'to throw', 'Triangle must have three positive side lengths');
            expect(function () {
                checkTri(0, 2, 3);
            }, 'to throw', 'Triangle must have three positive side lengths');
        });

        it('has a too long side', function () {
            expect(function () {
                checkTri(2, 2, 4); // One side equal to sum of others, triangle is line
            }, 'to throw', 'Triangle has one side equal or greater than sum of others');
            expect(function () {
                checkTri(2, 2, 5); // One side greater than sum of others, triangle cannot close
            }, 'to throw', 'Triangle has one side equal or greater than sum of others');
            expect(function () {
                checkTri(2, 4, 2); // One side equal to sum of others, triangle is line
            }, 'to throw', 'Triangle has one side equal or greater than sum of others');
            expect(function () {
                checkTri(2, 5, 2); // One side greater than sum of others, triangle cannot close
            }, 'to throw', 'Triangle has one side equal or greater than sum of others');
            expect(function () {
                checkTri(4, 2, 2); // One side equal to sum of others, triangle is line
            }, 'to throw', 'Triangle has one side equal or greater than sum of others');
            expect(function () {
                checkTri(5, 2, 2); // One side greater than sum of others, triangle cannot close
            }, 'to throw', 'Triangle has one side equal or greater than sum of others');
        });
    });
});

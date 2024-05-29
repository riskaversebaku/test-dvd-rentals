import {calculateAge} from "../dateHelpers";

describe('calculateAge function', () => {
    it('should return the correct age given a birth date', () => {
        const birthDate = new Date('2000-01-01');
        const expectedAge = new Date().getFullYear() - 2000;
        expect(calculateAge(birthDate)).toEqual(expectedAge);
    });

    it('should throw an error when null is passed', () => {
        expect(() => calculateAge(null!)).toThrow('Date cannot be null');
    });

    it('should deduct one year if birth month and day has not occurred yet this year', () => {
        const birthDate = new Date();
        birthDate.setMonth(birthDate.getMonth() + 1);
        expect(calculateAge(birthDate)).toEqual(-1);
    });

    it('should return correct age when today is the birth date', () => {
        const birthDate = new Date();
        expect(calculateAge(birthDate)).toEqual(0);
    });
});
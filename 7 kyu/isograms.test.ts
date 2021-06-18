import { isIsogram } from "./isograms";

test('should determine Isograms', () => {
    [
        ["Dermatoglyphics", true],
        ["Dermatoglyphics", true],
        ["isogram", true],
        ["aba", false],
        ["moOse", false],
        ["", true]

    ].forEach(([str, result]) => {
        expect(isIsogram(str as string)).toEqual(result);
    });
});

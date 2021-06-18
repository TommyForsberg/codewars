import { isNarcissistic } from "./does-my-number-look-big-in-this";

test("should find these numbers are narcissistic", () => {
    [
    371, 7, 153
    ].forEach((n) => {
        expect(isNarcissistic(n)).toEqual(true);
    });
});

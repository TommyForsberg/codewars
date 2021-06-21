import {toCamelCase} from './convert-string-to-camel-case';

test('should convert to camelCase', () => {
    [
      ["the-stealth-warrior", "theStealthWarrior"],
      ["The_Stealth_Warrior","TheStealthWarrior"]
   
    ].forEach(([s1, s2]) => {
      expect(toCamelCase(s1)).toEqual(s2);
    });
  });
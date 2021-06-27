import { domainName } from "./extractTheDomainNameFromAURL";
test('should extract domain name', () => {
    [
      ["http://github.com/tommyforsberg/codewars", "github"],
      ["http://www.zombie-bites.com","zombie-bites"],
      ["https://www.cnet.com","cnet"]
   
    ].forEach(([s1, s2]) => {
      expect(domainName(s1)).toEqual(s2);
    });
  });
describe('Scrabble', function() {
    it("checks to see if one letter a returns 1 point", function() {
        expect(Scrabble("a")).to.equal(1);
    });
    it("checks to see if a 2 point letter returns 2 points", function() {
        expect(Scrabble("b")).to.equal(3);
    });
   it("checks to see if a 3 point letter and a 1 point letter returns 4 points", function() {
        expect(Scrabble("am")).to.equal(4);
    });
    it("checks to see if a 3 point letter and a 1 point letter returns 4 points", function() {
        expect(Scrabble("ab")).to.equal(4);
    });
       it("checks to see if a 7  point word returns 7 points", function() {
        expect(Scrabble("Abeer")).to.equal(7);
    });
    it("checks to see if a   7  point sentence returns 7 points", function() {
     expect(Scrabble("A b e e r")).to.equal(7);
 });
 it("checks to see if a   7  point sentence returns 7 points", function() {
  expect(Scrabble("Ab ee r")).to.equal(7);
});









});

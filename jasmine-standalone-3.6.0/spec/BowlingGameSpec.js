describe("BowlingGame", function () {
    var game;

    beforeEach(function () {
        game = new BowlingGame();
    });

    function rollMany(n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins)
        }
    }

    it("should handle a gutter game", function () {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });

    it("should properly calculate a strike", function () {
        // test
    });

    it("should properly calculate a spare", function () {
        // test
    });

});
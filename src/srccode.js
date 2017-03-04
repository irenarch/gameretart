
function randomColor() {
    return 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ' ,' + Math.floor(Math.random()*255) + ')';
}

Game = { // JSON !!!!!!!
    // Initialize and start our game
    map_grid: {
        width: 88,
        height: 48,
        tile: {
            width: 16,
            height: 16
        }
    },

    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    backgroundColor: randomColor(),

    start: function() {
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height(), 60);
        Crafty.background(Game.backgroundColor);

    // Place a tree at every edge square on our grid of 16x16 tiles  ??? DO WE WANT THIS?
        for (var x = 0; x < Game.map_grid.width; x++) {
            for (var y = 0; y < Game.map_grid.height; y++) {
                var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

                if (at_edge) {
                // Place a tree entity at the current tile
                    var entity = Crafty.e('2D, Canvas, Color');  //its a crafty thing, creates entity
                    entity.attr({
                        x: x * Game.map_grid.tile.width,
                        y: y * Game.map_grid.tile.height,
                        w: Game.map_grid.tile.width,
                        h: Game.map_grid.tile.height
                    });
                entity.color('rgb(0, 0, 0)');

                } else if (Math.random() < 0.10) {   //1% shansa da se spawn-e random bush (vo odreden tile)
                    // Place a bush entity at the current tile
                    var entity = Crafty.e('2D, Canvas, Color');
                    entity.attr({
                        x: x * Game.map_grid.tile.width,
                        y: y * Game.map_grid.tile.height,
                        w: Game.map_grid.tile.width,
                        h: Game.map_grid.tile.height
                    });

                    var color = randomColor();
                    while(color == Game.backgroundColor) {
                        color = randomColor();
                    }
                    entity.color(color);
                }

            }
        }
    }
};
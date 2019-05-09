var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var sprite;

function preload() {
    game.load.crossOrigin = 'anonymous';
    game.load.image('mouse', Koji.config.images.mouse);
}

function create() {
    game.stage.backgroundColor = Koji.config.colors.backgroundColor;
    sprite = game.add.sprite(0, 0, 'mouse');
    game.add.text(16, 100, Koji.config.strings.content, { fontSize: '22px', fill: Koji.config.colors.textColor });
}

function update() {
    sprite.x = game.input.x - (sprite.width / 2);
    sprite.y = game.input.y - (sprite.height/ 2);
}

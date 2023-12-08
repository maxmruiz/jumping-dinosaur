const canvas = document.getElementbyId('canvas');
const c = canvas.getContext('2d');

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'canvas',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y : 300 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
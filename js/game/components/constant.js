(function()
{
    'use strict';
    window.GAME = window.GAME ||
    {};
    window.GAME.DATA = window.GAME.DATA ||
    {};

    GAME.const = {};

    // TODO: Initialize constants here
    GAME.const.cameraSpeed = 2;
    GAME.const.cameraMaxAngle = 70;

    GAME.const.grassWideCount = 3500;
    GAME.const.grassTallCount = 2000;

    GAME.const.rayCount = 80;

    GAME.const.particleCount = 3000;

    GAME.const.rockCount = 30;

    GAME.const.treeStickCount = 70;
    GAME.const.treeBirchCount = 20;
    GAME.const.treeThinCount = 30;

    GAME.const.butterflyCount = 20;

    GAME.const.gravity = -100;

    GAME.const.cameraHeightOffset = 60;
    GAME.const.playerMass = 30;

    GAME.const.snaps = 60;
})();

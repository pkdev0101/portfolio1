// Adventure Game Custom Level
// Exported from GameBuilder on 2026-03-05T20:23:59.225Z
// How to use this file:
// 1) Save as assets/js/adventureGame/GameLevelMazelvl1.js in your repo.
// 2) Reference it in your runner or level selector. Examples:
//    import GameLevelPlanets from '/assets/js/GameEnginev1/GameLevelPlanets.js';
//    import GameLevelMazelvl1 from '/assets/js/adventureGame/GameLevelMazelvl1.js';
//    export const gameLevelClasses = [GameLevelPlanets, GameLevelMazelvl1];
//    // or pass it directly to your GameControl as the only level.
// 3) Ensure images exist and paths resolve via 'path' provided by the engine.
// 4) You can add more objects to this.classes inside the constructor.

import GameEnvBackground from '/assets/js/GameEnginev1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1/essentials/Npc.js';
import Barrier from '/assets/js/GameEnginev1/essentials/Barrier.js';

class GameLevelMazelvl1 {
    constructor(gameEnv) {
        const path = gameEnv.path;
        const width = gameEnv.innerWidth;
        const height = gameEnv.innerHeight;

        const bgData = {
            name: "custom_bg",
            src: path + "/images/gamebuilder/bg/alien_planet.jpg",
            pixels: { height: 772, width: 1134 }
        };

        const playerData = {
            id: 'playerData',
            src: path + "/images/gamebuilder/sprites/astro.png",
            SCALE_FACTOR: 5,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 0, y: 300 },
            pixels: { height: 770, width: 513 },
            orientation: { rows: 4, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
            downLeft: { row: 0, start: 0, columns: 3, rotate: -Math.PI/16 },
            left: { row: 2, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
            upRight: { row: 3, start: 0, columns: 3, rotate: -Math.PI/16 },
            hitbox: { widthPercentage: 0, heightPercentage: 0 },
            keypress: { up: 38, left: 37, down: 40, right: 39 }
            };

        const npcData1 = {
            id: '67',
            greeting: 'Welcome to the maze. Do you think you can complete it?',
            src: path + "/images/gamify/tux.png",
            SCALE_FACTOR: 8,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 200, y: 300 },
            pixels: { height: 256, width: 352 },
            orientation: { rows: 8, columns: 11 },
            down: { row: 0, start: 0, columns: 3 },
            right: { row: Math.min(1, 8 - 1), start: 0, columns: 3 },
            left: { row: Math.min(2, 8 - 1), start: 0, columns: 3 },
            up: { row: Math.min(3, 8 - 1), start: 0, columns: 3 },
            upRight: { row: Math.min(3, 8 - 1), start: 0, columns: 3 },
            downRight: { row: Math.min(1, 8 - 1), start: 0, columns: 3 },
            upLeft: { row: Math.min(2, 8 - 1), start: 0, columns: 3 },
            downLeft: { row: 0, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            dialogues: ['Welcome to the maze. Do you think you can complete it?'],
            reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
            interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
        };

        const npcData2 = {
            id: '68',
            greeting: 'Congrats! You finished the level!',
            src: path + "/images/gamify/tux.png",
            SCALE_FACTOR: 10,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 553, y: 15 },
            pixels: { height: 256, width: 352 },
            orientation: { rows: 8, columns: 11 },
            down: { row: 0, start: 0, columns: 3 },
            right: { row: Math.min(1, 8 - 1), start: 0, columns: 3 },
            left: { row: Math.min(2, 8 - 1), start: 0, columns: 3 },
            up: { row: Math.min(3, 8 - 1), start: 0, columns: 3 },
            upRight: { row: Math.min(3, 8 - 1), start: 0, columns: 3 },
            downRight: { row: Math.min(1, 8 - 1), start: 0, columns: 3 },
            upLeft: { row: Math.min(2, 8 - 1), start: 0, columns: 3 },
            downLeft: { row: 0, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            dialogues: ['Congrats! You finished the level!'],
            reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
            interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
        };
        const dbarrier_1 = {
            id: 'dbarrier_1', x: 11, y: 195, width: 237, height: 43, visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const dbarrier_2 = {
            id: 'dbarrier_2', x: 244, y: 128, width: 65, height: 108, visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const dbarrier_3 = {
            id: 'dbarrier_3', x: 240, y: 78, width: 299, height: 57, visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };

        const dbarrier_4 = {
            id: 'dbarrier_4', x: 510, y: 31, width: 48, height: 46, visible: false,
            hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
            fromOverlay: true
        };
this.classes = [      { class: GameEnvBackground, data: bgData },
      { class: Player, data: playerData },
      { class: Npc, data: npcData1 },
      { class: Npc, data: npcData2 },
      { class: Barrier, data: dbarrier_1 },
      { class: Barrier, data: dbarrier_2 },
      { class: Barrier, data: dbarrier_3 },
      { class: Barrier, data: dbarrier_4 }
];

        
    }
}

export default GameLevelMazelvl1;
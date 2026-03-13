import PeppaBattleLevelBase from './PeppaBattleLevelBase.js';

class PeppaLevel3 extends PeppaBattleLevelBase {
	constructor(gameEnv) {
		super(gameEnv, {
			levelId: 'lvl3',
			levelTitle: 'Level 3: Final Boss - Daddy Pig',
			levelIntro: 'Final round. Daddy Pig enters as the boss.',
			enemyName: 'Daddy Pig',
			enemyGreeting: 'Ho ho! Daddy Pig is the final boss of the ring.',
			enemyImage: 'daddypig.png',
			enemyHealth: 8,
			enemySpeed: 1.2,
			enemyScale: 4,
			playerHealth: 5
		});
	}
}

export default PeppaLevel3;

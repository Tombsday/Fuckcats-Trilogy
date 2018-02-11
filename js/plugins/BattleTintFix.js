/*:
 * @author Tombsday
 * @desc lovely
 * @help writing code is lovely
 */

	// Battle Start Tint
	Scene_Battle.prototype.start = function() {
    	$gameScreen.startTint([0,0,0,0], true);
    	Scene_Base.prototype.start.call(this);
    	this.startFadeIn(this.fadeSpeed(), false);
    	BattleManager.playBattleBgm();
    	BattleManager.startBattle();
	};

	// Battle End Tint
	Scene_Battle.prototype.terminate = function() {
		$gameScreen.startTint([-85,-34,-32,170], true);
    	Scene_Base.prototype.terminate.call(this);
    	$gameParty.onBattleEnd();
    	$gameTroop.onBattleEnd();
    	AudioManager.stopMe();

    	ImageManager.clearRequest();
	};
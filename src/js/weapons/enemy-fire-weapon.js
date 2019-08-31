class EnemyFireWeapon extends EnemyWeapon {
    constructor(character) {
        super(character);
        this.angleRandomFactor = PI / 512;
        this.shotInterval = 3;
        this.trailSize = 10;
        this.bulletSpeed = BLOCK_SIZE * 5;
        this.explodes = true;
    }
}

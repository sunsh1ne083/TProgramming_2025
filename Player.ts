export abstract class Player {
    protected name: string;
    protected health: number;
    protected strength: number;

    constructor(name: string, health: number, strength: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    public getName(): string {
        return this.name;
    }

    public getHealth(): number {
        return this.health;
    }

    public getStrength(): number {
        return this.strength;
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health < 0) this.health = 0;
    }

    public normalAttack(target: Player, logger: Logger): void {
        const damage = this.strength;
        target.takeDamage(damage);
        logger.log(`${this.getName()} наносит урон ${damage} противнику ${target.getName()}`);
    }

    public abstract useAbility(target: Player, logger: Logger): boolean;
    public abstract getType(): string;
}

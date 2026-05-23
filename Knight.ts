import { Player } from './Player';
import { Logger } from './Logger';

export class Knight extends Player {
    public getType(): string {
        return "Рыцарь";
    }

    public useAbility(target: Player, logger: Logger): boolean {
        const bonus = Math.floor(this.strength * 0.3);
        const damage = this.strength + bonus;
        target.takeDamage(damage);
        logger.log(`${this.getName()} использует (Удар возмездия) и наносит урон ${damage} противнику ${target.getName()}`);
        return true;
    }
}

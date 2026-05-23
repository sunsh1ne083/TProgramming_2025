import { Player } from './Player';
import { Logger } from './Logger';

export class Mage extends Player {
    private skipNextHit: boolean = false;

    public getType(): string {
        return "Маг";
    }

    public useAbility(target: Player, logger: Logger): boolean {
        this.skipNextHit = true;
        logger.log(`${this.getName()} использует (Заворожение)! Противник ${target.getName()} пропустит ход!`);
        return true;
    }

    public shouldSkipNextHit(): boolean {
        return this.skipNextHit;
    }

    public resetSkipFlag(): void {
        this.skipNextHit = false;
    }
}

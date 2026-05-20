import { Player } from './Player';
import { Logger } from './Logger';

export class Archer extends Player {
    private abilityUsed: boolean = false;
    private burnDamage: number = 2;

    public getType(): string {
        return "Лучник";
    }

    public useAbility(target: Player, logger: Logger): boolean {
        if (this.abilityUsed) {
            return false;
        }
        this.abilityUsed = true;
        logger.log(`${this.getName()} использует (Огненные стрелы)! Противник ${target.getName()} загорается!`);
        return true;
    }

    public applyBurn(target: Player, logger: Logger): void {
        if (this.abilityUsed && target.isAlive()) {
            target.takeDamage(this.burnDamage);
            logger.log(`${target.getName()} теряет ${this.burnDamage} HP от огненных стрел`);
        }
    }

    public hasAbilityUsed(): boolean {
        return this.abilityUsed;
    }
}

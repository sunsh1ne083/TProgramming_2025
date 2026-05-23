import { Player } from './Player';
import { Knight } from './Knight';
import { Archer } from './Archer';
import { Mage } from './Mage';
import { Logger } from './Logger';

export class Game {
    private players: Player[];
    private logger: Logger;
    private round: number = 1;

    private names: string[] = [
        "Артур", "Гэндальф", "Леголас", "Арагорн", "Торин",
        "Фродо", "Саурон", "Беовульф", "Сигурд", "Рагнар",
        "Эльдар", "Вильямс", "Гарри", "Дамблдор", "Джон Сноу"
    ];

    constructor(playerCount: number) {
        if (playerCount % 2 !== 0) {
            throw new Error("Количество игроков должно быть чётным");
        }
        this.logger = new Logger();
        this.players = this.generatePlayers(playerCount);
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private generatePlayers(count: number): Player[] {
        const players: Player[] = [];
        for (let i = 0; i < count; i++) {
            const name = this.names[Math.floor(Math.random() * this.names.length)];
            const health = this.getRandomInt(80, 150);
            const strength = this.getRandomInt(10, 30);
            const type = this.getRandomInt(1, 3);

            let player: Player;
            switch (type) {
                case 1:
                    player = new Knight(name, health, strength);
                    break;
                case 2:
                    player = new Archer(name, health, strength);
                    break;
                default:
                    player = new Mage(name, health, strength);
                    break;
            }
            this.logger.log(`Создан ${player.getType()} ${player.getName()} (Здоровье: ${health}, Сила: ${strength})`);
            players.push(player);
        }
        return players;
    }

    private fight(player1: Player, player2: Player): Player | null {
        let p1 = player1;
        let p2 = player2;
        let isP1Turn = true;

        if (p1 instanceof Mage) (p1 as Mage).resetSkipFlag();
        if (p2 instanceof Mage) (p2 as Mage).resetSkipFlag();

        while (p1.isAlive() && p2.isAlive()) {
            const attacker = isP1Turn ? p1 : p2;
            const defender = isP1Turn ? p2 : p1;

            if (attacker instanceof Mage && (attacker as Mage).shouldSkipNextHit()) {
                this.logger.log(`${attacker.getName()} пропускает ход (эффект заворожения)`);
                (attacker as Mage).resetSkipFlag();
                isP1Turn = !isP1Turn;
                continue;
            }

            const useAbility = Math.random() < 0.3;

            if (useAbility) {
                attacker.useAbility(defender, this.logger);
            } else {
                attacker.normalAttack(defender, this.logger);
            }

            if (attacker instanceof Archer && (attacker as Archer).hasAbilityUsed()) {
                (attacker as Archer).applyBurn(defender, this.logger);
            }

            if (!defender.isAlive()) {
                this.logger.log(`${defender.getName()} погибает`);
                return attacker;
            }

            isP1Turn = !isP1Turn;
        }
        return null;
    }

    public start(): Player | null {
        let activePlayers = [...this.players];

        while (activePlayers.length > 1) {
            this.logger.log(`\n========== Кон ${this.round} ==========`);
            const winners: Player[] = [];

            for (let i = 0; i < activePlayers.length; i += 2) {
                const p1 = activePlayers[i];
                const p2 = activePlayers[i + 1];

                this.logger.log(`\n(${p1.getType()}) ${p1.getName()} vs (${p2.getType()}) ${p2.getName()}`);
                const winner = this.fight(p1, p2);
                if (winner) {
                    winners.push(winner);
                    this.logger.log(`${winner.getName()} побеждает и проходит дальше!`);
                }
            }

            activePlayers = winners;
            this.round++;
        }

        if (activePlayers.length === 1) {
            const champion = activePlayers[0];
            this.logger.log(`\n🏆 ПОБЕДИТЕЛЬ: ${champion.getType()} ${champion.getName()}! 🏆`);
            this.logger.saveToFile("game_log.txt");
            return champion;
        }

        return null;
    }
}

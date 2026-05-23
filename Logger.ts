import * as fs from 'fs';

export class Logger {
    private logs: string[] = [];

    public log(message: string): void {
        console.log(message);
        this.logs.push(message);
    }

    public saveToFile(filename: string = "game_log.txt"): void {
        fs.writeFileSync(filename, this.logs.join("\n"));
        console.log(`Лог сохранён в ${filename}`);
    }

    public clear(): void {
        this.logs = [];
    }
}

export class Person {
    private name: string;
    private age: number;
    private email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getEmail(): string {
        return this.email;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getInfo(): string {
        return `${this.name}, ${this.age}, ${this.email}`;
    }
}

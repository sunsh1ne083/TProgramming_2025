// ============================================
// Вариант 12: Структура "Человек (Person)"
// ============================================

class Person {
    // Поля (минимум 3)
    private name: string;
    private age: number;
    private email: string;

    // Конструктор (создаёт структуру)
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Метод 1: получить имя
    public getName(): string {
        return this.name;
    }

    // Метод 2: установить возраст
    public setAge(age: number): void {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            console.log("Ошибка: некорректный возраст");
        }
    }

    // Метод 3: получить возраст
    public getAge(): number {
        return this.age;
    }

    // Метод 4: получить email
    public getEmail(): string {
        return this.email;
    }

    // Метод 5: установить email
    public setEmail(email: string): void {
        this.email = email;
    }

    // Метод 6: получить полную информацию о человеке
    public getInfo(): string {
        return `Человек: ${this.name}, возраст: ${this.age}, email: ${this.email}`;
    }
}

// ========== Демонстрация работы ==========

// Создание объекта через конструктор
const person1 = new Person("Иван Петров", 25, "ivan@example.com");

// Вывод информации
console.log("=== Информация о человеке ===");
console.log(person1.getInfo());

// Использование методов
console.log("\n=== Получение имени ===");
console.log(`Имя: ${person1.getName()}`);

console.log("\n=== Изменение возраста ===");
console.log(`Был возраст: ${person1.getAge()}`);
person1.setAge(30);
console.log(`Стал возраст: ${person1.getAge()}`);

console.log("\n=== Изменение email ===");
console.log(`Был email: ${person1.getEmail()}`);
person1.setEmail("ivan.new@example.com");
console.log(`Стал email: ${person1.getEmail()}`);

console.log("\n=== Итоговая информация ===");
console.log(person1.getInfo());

// Создание второго человека для демонстрации
console.log("\n=== Второй человек ===");
const person2 = new Person("Мария Сидорова", 22, "maria@example.com");
console.log(person2.getInfo());

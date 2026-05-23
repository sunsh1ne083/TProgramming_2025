import { describe, it, expect } from 'vitest';
import { Person } from '../person';

describe('Person', () => {
    it('should create a person with correct properties', () => {
        const person = new Person('Иван Иванов', 25, 'ivan@example.com');
        expect(person.getName()).toBe('Иван Иванов');
        expect(person.getAge()).toBe(25);
        expect(person.getEmail()).toBe('ivan@example.com');
    });

    it('should update age correctly', () => {
        const person = new Person('Петр Петров', 30, 'petr@example.com');
        person.setAge(35);
        expect(person.getAge()).toBe(35);
    });

    it('should return full info string', () => {
        const person = new Person('Анна Смирнова', 28, 'anna@example.com');
        const info = person.getInfo();
        expect(info).toContain('Анна Смирнова');
        expect(info).toContain('28');
        expect(info).toContain('anna@example.com');
    });
});

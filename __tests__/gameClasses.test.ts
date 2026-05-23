import { describe, it, expect, vi } from 'vitest';
import { Knight } from '../Knight';
import { Archer } from '../Archer';
import { Mage } from '../Mage';
import { Logger } from '../Logger';

describe('Knight', () => {
    it('should deal extra 30% damage with Vengeance Strike', () => {
        const knight = new Knight('Артур', 100, 20);
        const target = new Knight('Враг', 100, 10);
        const mockLogger = { log: vi.fn() } as unknown as Logger;
        
        knight.useAbility(target, mockLogger);
        
        expect(target.getHealth()).toBe(74);
    });
});

describe('Archer', () => {
    it('should use Fire Arrows ability only once', () => {
        const archer = new Archer('Леголас', 80, 15);
        const target = new Archer('Орк', 60, 10);
        const mockLogger = { log: vi.fn() } as unknown as Logger;
        
        const firstUse = archer.useAbility(target, mockLogger);
        const secondUse = archer.useAbility(target, mockLogger);
        
        expect(firstUse).toBe(true);
        expect(secondUse).toBe(false);
    });
});

describe('Mage', () => {
    it('should make target skip next hit with Charm', () => {
        const mage = new Mage('Гэндальф', 70, 12);
        const target = new Mage('Саруман', 80, 14);
        const mockLogger = { log: vi.fn() } as unknown as Logger;
        
        mage.useAbility(target, mockLogger);
        
        expect(mage.shouldSkipNextHit()).toBe(true);
        mage.resetSkipFlag();
        expect(mage.shouldSkipNextHit()).toBe(false);
    });
});

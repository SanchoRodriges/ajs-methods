import Character from '../class/Character';
import Bowerman from '../class/Bowerman';

test('Ошибка в name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('Ошибка в type', () => {
  expect(() => new Character('Alex', 'Bow')).toThrow(new Error('Неизвестное существо'));
});

test('Правильно создаётся объект', () => {
  const warior = new Character('Alex', 'Bowman');
  const correct = {
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Alex', type: 'Bowman',
  };

  expect(warior).toEqual(correct);
});

test('test levelUp', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});

test('test levelUp умершего', () => {
  expect(() => {
    const bowerman = new Bowerman('bowman');
    bowerman.health = 0;
    bowerman.levelUp();
  }).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('test damage', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(10);
  const result = {
    attack: 25, defence: 25, health: 92.5, level: 1, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});
import Bowerman from '../class/Bowerman';

test('test levelUp', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.levelUp();
  const result = {
    attack: 30, defence: 30, health: 100, level: 2, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});

test('test damage', () => {
  const bowerman = new Bowerman('bowman');
  bowerman.damage(10);
  const result = {
    attack: 25, defence: 25, health: 92.5, level: 1, name: 'bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(result);
});

test('test short name', () => {
  const bowerman = new Bowerman('b');
  expect(bowerman).toThrow(Error);
});

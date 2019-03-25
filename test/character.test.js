import Character from '../src/js/character';

test('test for Swordsman', () => {
  const received = new Character('Мечник', 'Swordsman');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Мечник',
    type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});

test('test for name < 2', () => {
  function newCharacter() {
    Character('Л', 'Swordsman');
  }
  expect(newCharacter).toThrowError(new RangeError('Длина имени от 2 до 10 символов'));
});

test('test for name > 10', () => {
  function newCharacter() {
    Character('Дигидрогалаген', 'Swordsman');
  }
  expect(newCharacter).toThrowError(new RangeError('Длина имени от 2 до 10 символов'));
});

test('test for typeError', () => {
  function newCharacter() {
    Character('Лучник', 'Bowmen');
  }
  expect(newCharacter).toThrowError(new TypeError('Такого типа персонажа не существует'));
});

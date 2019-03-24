/**
 * Handles elements
 * @module Character
 */

/**
 * Создает объект класса Character
 *
 * @param {string} name имя персонажа
 * @param {string} type тип персонажа
 *
 * @throws {RangeError} Длина имени от 2 до 10 символов.
 * @throws {TypeError} Такого типа персонажа не существует.
 */
export default function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new RangeError('Длина имени от 2 до 10 символов');
  }

  const types = {
    Bowman: '25/25',
    Swordsman: '40/10',
    Magician: '10/40',
    Undead: '25/25',
    Zombie: '40/10',
    Daemon: '10/40',
  };
  if (!types[type]) {
    throw new TypeError('Такого типа персонажа не существует');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = +types[type].split('/')[0];
  this.defence = +types[type].split('/')[1];
}

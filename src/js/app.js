import Bowerman from './class/Bowerman';
import Swordsman from './class/Swordsman';
import Magician from './class/Magician';
import Undead from './class/Undead';
import Zombie from './class/Zombie';
import Daemon from './class/Daemon';

const bowerman = new Bowerman('bowman');
const swordsman = new Swordsman('swordsman');
const magician = new Magician('magician');
const undead = new Undead('undead');
const zombie = new Zombie('zombie');
const daemon = new Daemon('daemon');

console.log(bowerman);
console.log(swordsman);
console.log(magician);
console.log(undead);
console.log(zombie);
console.log(daemon);

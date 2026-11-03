/*
  Mini Proyecto: Primera Sección de JS - Fundamentos de Programación

  Objetivo:
  Desarrollar un juego en JS que simule una batalla entre, al menos, 
  4 personajes al mismo tiempo con resultados aleatorios.

  Para ello, deberás crear una clase `Character` que represente a cada personaje, con propiedades como nombre, vida, ataque y defensa, y métodos para atacar y recibir daño.

  Esta clase funcionará como padre de otras clases que representen tipos específicos de personajes, como guerreros, magos o arqueros, cada uno con habilidades particulares.

  Cada habilidad deberá tener su propia formula de daño que se aplicará al atacar a otros personajes.

  Tras esto, deberás diseñar el flujo del juego utilizando todos los fundamentos básicos de la programación.
  1. Lo primero es instanciar los personajes que participarán en la batalla. Las estadísticas de cada uno deben generarse aleatoriamente entre dos límites definidos por el desarrollador.
  2. Una vez instanciados los personajes, se debe iniciar la batalla. Cada personaje atacará a otro de forma aleatoria con una habilidad de su repertorio, aplicando la fórmula de daño correspondiente. Ten cuidado que permitir que un personaje se ataque a sí mismo.
  3. La batalla continuará hasta que solo quede un personaje con vida. Al final, se debe mostrar el resultado de la batalla, indicando el ganador y el estado final de todos los personajes.

  Muestra un mensaje en cada iteración del flujo indicando:
  - Quién ataca a quién y con qué habilidad.
  - Cuánto daño se inflige.
  - El estado de vida de los personajes después del ataque.

  2026-11-06
*/

//-- FUNCIONES -- -- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- --
function generarNumAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- --

// VARIABLES
let damage;
let pjAleatorio;

//-- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- --

// Crear una clase `Character` que represente a cada personaje, con propiedades como nombre, vida, ataque y defensa, y métodos para atacar y recibir daño.
class Character {
  constructor(nombre, vida, defensa, ID) {
    this.nombre = nombre;
    this.vida = vida;
    this.defensa = defensa;
    this.ID = ID;
  }

  seleccionarOponente() {
    do {
      pjAleatorio = generarNumAleatorios(1, 4);
      /*
        if (pjAleatorio === this.ID) {
        console.log("No puedes atacarte a ti mismo, intenta nuevamente");
      }
      */
    } while (pjAleatorio === this.ID);

    switch (pjAleatorio) {
      case 1:
        console.log(`${this.nombre} ataca a Kael - El guerrero Berserker`);
        break;
      case 2:
        console.log(`${this.nombre} ataca a Elyra - La Arcana`);
        break;
      case 3:
        console.log(`${this.nombre} ataca a Darius - El Guardian`);
        break;
      case 4:
        console.log(`${this.nombre} ataca a Sylas - El de las sombras`);
        break;

      default:
        break;
    }
  }

  recibirDamage(dmg) {
    console.log(`${this.nombre} recibe ${dmg} damage`);
    this.vida -= dmg;
    console.log(`${this.nombre} le queda ${this.vida} puntos de vida`);
  }

  ataque1() {
    damage = generarNumAleatorios(1, 10);
    console.log(`${this.nombre} usa Ataque1 y causa ${damage} de daño`);
  }

  ataque2() {
    damage = generarNumAleatorios(1, 10);
    console.log(`${this.nombre} usa ataque2 y causa ${damage} de daño`);
  }

  ataque3() {
    damage = generarNumAleatorios(1, 10);
    console.log(`${this.nombre} usa ataque3 y causa ${damage} de daño`);
  }

  lanzarHabilidadAleatoria() {
    let habilidadAleatoria = Math.floor(Math.random() * 3);

    switch (habilidadAleatoria) {
      case 0:
        this.ataque1();
        console.log(damage);
        break;

      case 1:
        this.ataque2();
        console.log(damage);
        break;

      case 2:
        this.ataque3();
        console.log(damage);
        break;

      default:
        break;
    }
  }
}

// Crear clases para tipos especificos de personaje cada uno con habilidades particulares.
class Berserker extends Character {
  constructor(nombre, vida, defensa, ID) {
    super(nombre, vida, defensa, ID);
  }

  ataque1() {
    damage = generarNumAleatorios(110, 220);

    console.log(`${this.nombre} usa Ataque Brutal y causa ${damage} de daño`);
  }

  ataque2() {
    damage = generarNumAleatorios(80, 160);
    console.log(
      `${this.nombre} usa Lanzamiento Sismico y causa ${damage} de daño`,
    );
  }

  ataque3() {
    damage = generarNumAleatorios(225, 450);

    console.log(`${this.nombre} usa Furia del Titán y causa ${damage} de daño`);
  }
}

class Hechicero extends Character {
  constructor(nombre, vida, defensa, ID) {
    super(nombre, vida, defensa, ID);
  }
  ataque1() {
    damage = generarNumAleatorios(50, 100);
    console.log(`${this.nombre} usa Ataque Arcano y causa ${damage} de daño`);
  }

  ataque2() {
    damage = generarNumAleatorios(200, 320);

    console.log(
      `${this.nombre} usa Lanza de Energía y causa ${damage} de daño`,
    );
  }

  ataque3() {
    damage = generarNumAleatorios(400, 650);
    console.log(
      `${this.nombre} usa Colapso Dimensional y causa ${damage} de daño`,
    );
  }
}

class Paladin extends Character {
  constructor(nombre, vida, defensa, ID) {
    super(nombre, vida, defensa, ID);
  }
  ataque1() {
    damage = generarNumAleatorios(100, 200);
    console.log(
      `${this.nombre} usa Ataque con Escudo y causa ${damage} de daño`,
    );
  }

  ataque2() {
    damage = generarNumAleatorios(100, 180);
    console.log(
      `${this.nombre} usa Lanzamiento Espada de Justicia ${damage} de daño`,
    );
  }

  ataque3() {
    damage = generarNumAleatorios(250, 400);

    console.log(
      `${this.nombre} usa Juicio Celestial y causa ${damage} de daño`,
    );
  }
}

class Asesino extends Character {
  constructor(nombre, vida, defensa, ID) {
    super(nombre, vida, defensa, ID);
  }
  ataque1() {
    damage = generarNumAleatorios(100, 200);

    console.log(`${this.nombre} usa Puñalada y causa ${damage} de daño`);
  }

  ataque2() {
    damage = generarNumAleatorios(180, 255);

    console.log(
      `${this.nombre} usa Dagas Espectrales y causa ${damage} de daño`,
    );
  }

  ataque3() {
    damage = generarNumAleatorios(230, 510);

    console.log(
      `${this.nombre} usa Ejecución de las sombras y causa ${damage} de daño`,
    );
  }
}

// Instaciar personajes
const prueba = new Character(
  "prueba",
  generarNumAleatorios(1300, 1500),
  generarNumAleatorios(180, 220),
  0,
);
const berserker = new Berserker(
  "Kael - El guerrero Berserker",
  generarNumAleatorios(1300, 1500),
  generarNumAleatorios(180, 220),
  1,
);
const hechicera = new Hechicero(
  "Elyra - La Arcana",
  generarNumAleatorios(600, 800),
  generarNumAleatorios(55, 65),
  2,
);
const paladin = new Paladin(
  "Darius - El Guardian",
  generarNumAleatorios(1500, 1800),
  generarNumAleatorios(200, 250),
  3,
);
const asesino = new Asesino(
  "Sylas - El de las sombras",
  generarNumAleatorios(750, 950),
  generarNumAleatorios(60, 90),
  4,
);

// EJECUCION DE PELEA
let personajes = [berserker, hechicera, paladin, asesino];

berserker.seleccionarOponente();
berserker.lanzarHabilidadAleatoria();

for (const p of personajes) {
  if (p.ID === pjAleatorio) {
    console.log(p);
    p.recibirDamage(damage);
  }
}

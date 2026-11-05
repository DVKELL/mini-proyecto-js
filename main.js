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

// PARA MAÑANA
/*
  Usar todos los metodos pequeños en un solo metodo unificado que se encargue de 
  seleccionar al enemigo, aplicarle el ataque y bajarle la vida
  luego de eso solo se debe crear el bucle para que cada personaje realice sus ataques y le
  baje la vida a los enemigos usando los metodos, hasta que los pesonajes vayan muriendo.

  2. Evitar que seleccionen a un oponente y ataquen en base a la propiedad isAlive

  bucle para repetir funcion principal mientras que pfVivos sea > 1

*/
console.log("HOLAAAAAAAAAAAAAAAAAAAA");

//-- FUNCIONES -- -- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- --
function generarNumAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function batallaCampal(peleadores) {
  while (pjVivos > 1) {
    for (const p of peleadores) {
      if (p.vida > 0) {
        p.EjecutarPelea();
      }

      if (p.vida < 0) {
        if (pjMuertos.includes(p.ID)) {
          console.log(`${p.nombre} ya esta en pjMuertos`);
          console.log(`NO INCLUIDOS / PJVIVOS: ${pjVivos}`);

          continue;
        }

        if (p.vida < 0) {
          if (!pjMuertos.includes(p.ID)) {
            console.log(`${p.nombre} SE AGREGA AL LISTADO DE MUERTOS`);

            pjMuertos.push(p.ID);
            pjVivos--;
            console.log(`INCLUIDOS / PJMUERTOS: ${pjVivos}`);
          }
        }
      }
    }
    console.log(`PJMUERTOS: ${pjVivos}`);
    console.log(pjMuertos);
    console.log(`------------- ROUND ${round} -------------`);
    round++;
  }

  console.log(`Conteo de personajes vivos ${pjVivos}`);
  console.log(peleadores);
}

//-- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- --

// VARIABLES
let damage;
let pjAleatorio;
let pjVivos = 4;
let round = 1;
let pjMuertos = [];
let pjAtacable = 0;

//-- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- --

// Crear una clase `Character` que represente a cada personaje, con propiedades como nombre, vida, ataque y defensa, y métodos para atacar y recibir daño.
class Character {
  constructor(nombre, vida, defensa, ID) {
    this.nombre = nombre;
    this.vida = vida;
    this.defensa = defensa;
    this.ID = ID;
  }

  seleccionarOponente(personajes) {
    do {
      pjAleatorio = generarNumAleatorios(1, 4);
      for (const pj of personajes) {
        if (pj.ID === pjAleatorio && pj.vida > 0) {
          pjAtacable = true;
          console.log(`El personaje ${pj.nombre} es atacable`);
        } else if (pj.ID === pjAleatorio && pj.vida <= 0) {
          console.log(
            `El personaje ${pj.nombre} / VIDA: ${pj.vida} NO es atacable`,
          );
          pjAtacable = false;
        }
      }
      console.log(`Personaje que ataca ${this.nombre}`);
    } while (pjAleatorio === this.ID || pjAtacable === false);

    switch (pjAleatorio) {
      case 1:
        console.log(`${this.nombre} ataca a Kael`);
        break;
      case 2:
        console.log(`${this.nombre} ataca a Elyra`);
        break;
      case 3:
        console.log(`${this.nombre} ataca a Darius`);
        break;
      case 4:
        console.log(`${this.nombre} ataca a Sylas`);
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
        break;

      case 1:
        this.ataque2();
        break;

      case 2:
        this.ataque3();
        break;

      default:
        break;
    }
  }

  EjecutarPelea() {
    this.lanzarHabilidadAleatoria();
    this.seleccionarOponente(personajes);
    for (let p of personajes) {
      if (p.ID === pjAleatorio) {
        p.recibirDamage(damage);
      }
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
    damage = generarNumAleatorios(80, 150);
    console.log(
      `${this.nombre} usa Lanzamiento Sismico y causa ${damage} de daño`,
    );
  }

  ataque3() {
    damage = generarNumAleatorios(220, 350);

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
    damage = generarNumAleatorios(250, 400);

    console.log(
      `${this.nombre} usa Lanza de Energía y causa ${damage} de daño`,
    );
  }

  ataque3() {
    damage = generarNumAleatorios(450, 650);
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
    damage = generarNumAleatorios(100, 180);
    console.log(
      `${this.nombre} usa Ataque con Escudo y causa ${damage} de daño`,
    );
  }

  ataque2() {
    damage = generarNumAleatorios(60, 120);
    console.log(
      `${this.nombre} usa Lanzamiento Espada de Justicia ${damage} de daño`,
    );
  }

  ataque3() {
    damage = generarNumAleatorios(180, 300);

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
const prueba = new Character("prueba", -32, generarNumAleatorios(180, 220), 0);

const berserker = new Berserker(
  "Kael - Berserker",
  generarNumAleatorios(1300, 1500),
  generarNumAleatorios(180, 220),
  1,
);
const hechicera = new Hechicero(
  "Elyra - hechicera",
  generarNumAleatorios(700, 900),
  generarNumAleatorios(55, 65),
  2,
);
const paladin = new Paladin(
  "Darius - paladin",
  generarNumAleatorios(1500, 1800),
  generarNumAleatorios(200, 250),
  3,
);
const asesino = new Asesino(
  "Sylas - asesino",
  generarNumAleatorios(900, 1000),
  generarNumAleatorios(60, 90),
  4,
);

// EJECUCION DE PELEA
let personajes = [berserker, hechicera, paladin, asesino];

for (const personaje of personajes) {
  console.log(personaje.vida);
}
batallaCampal(personajes);
// paladin.EjecutarPelea();
// console.log(`------------ BATALLA TERMINADA ----------`);

// asesino.EjecutarPelea();

// console.log(personajes[0].isAlive);

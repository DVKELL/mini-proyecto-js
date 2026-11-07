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
let round = 1;
let pjAtacable = false;
let pjAtacado;
let random;

//-- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- -- -- ----- --

// Crear una clase `Character` que represente a cada personaje, con propiedades como nombre, vida, ataque y defensa, y métodos para atacar y recibir daño.
class Character {
  constructor(nombre, vida, defensa, ID) {
    this.nombre = nombre;
    this.vida = vida;
    this.defensa = defensa;
    this.ID = ID;
  }

  ataque1(min, max, nombre) {
    damage = generarNumAleatorios(min, max);
    console.log(
      `${this.nombre} usa ${nombre} contra ${pjAtacado} y le causa ${damage} de daño`,
    );
  }

  ataque2(min, max, nombre) {
    damage = generarNumAleatorios(min, max);
    console.log(
      `${this.nombre} usa ${nombre} contra ${pjAtacado} y le causa ${damage} de daño`,
    );
  }

  ataque3(min, max, nombre) {
    damage = generarNumAleatorios(min, max);
    console.log(
      `${this.nombre} usa ${nombre} contra ${pjAtacado} y le causa ${damage} de daño`,
    );
  }

  lanzarHabilidadAleatoria() {
    let habilidadAleatoria = Math.floor(Math.random() * 3);

    switch (habilidadAleatoria) {
      case 0:
        this.ataque1(1, 10, "ataque1");
        break;

      case 1:
        this.ataque2(1, 10, "ataque1");
        break;

      case 2:
        this.ataque3(1, 10, "ataque1");
        break;
    }
  }

  seleccionarOponente(personajes) {
    let sobrevivientes;
    pjAtacable = false;

    do {
      sobrevivientes = personajes.filter((p) => p.vida > 0);

      if (sobrevivientes.length <= 1) {
        break;
      }

      pjAleatorio = generarNumAleatorios(1, 4);

      for (const s of sobrevivientes) {
        if (s.ID === pjAleatorio && this.ID !== pjAleatorio) {
          pjAtacable = true;
          pjAtacado = s.nombre;
        }
      }
    } while (pjAtacable === false);
  }

  recibirDamage(dmg) {
    this.vida = this.vida - dmg + this.defensa;
    console.log(`${this.nombre} le queda ${this.vida} puntos de vida`);
  }

  EjecutarPelea() {
    this.seleccionarOponente(personajes);
    this.lanzarHabilidadAleatoria();
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

  lanzarHabilidadAleatoria() {
    let habilidadAleatoria = Math.floor(Math.random() * 3);

    switch (habilidadAleatoria) {
      case 0:
        this.ataque1(90, 180, "Ataque con Espada");
        break;

      case 1:
        this.ataque2(80, 150, "Lanzamiento de Hacha");
        break;

      case 2:
        this.ataque3(200, 330, "Cataclismo");
        break;
    }
  }
}

class Hechicero extends Character {
  constructor(nombre, vida, defensa, ID) {
    super(nombre, vida, defensa, ID);
  }

  lanzarHabilidadAleatoria() {
    let habilidadAleatoria = Math.floor(Math.random() * 3);

    switch (habilidadAleatoria) {
      case 0:
        this.ataque1(50, 100, "Ataque Arcano");
        break;

      case 1:
        this.ataque2(250, 400, "Lanza de Energía");
        break;

      case 2:
        this.ataque3(450, 650, "Colapso Dimensional");
        break;
    }
  }
}

class Paladin extends Character {
  constructor(nombre, vida, defensa, ID) {
    super(nombre, vida, defensa, ID);
  }

  lanzarHabilidadAleatoria() {
    let habilidadAleatoria = Math.floor(Math.random() * 3);

    switch (habilidadAleatoria) {
      case 0:
        this.ataque1(100, 180, "Ataque con Escudo");
        break;

      case 1:
        this.ataque2(60, 120, "Lanzamiento Espada de Justicia");
        break;

      case 2:
        this.ataque3(180, 300, "Juicio Celestial");
        break;
    }
  }
}

class Asesino extends Character {
  constructor(nombre, vida, defensa, ID) {
    super(nombre, vida, defensa, ID);
  }

  lanzarHabilidadAleatoria() {
    let habilidadAleatoria = Math.floor(Math.random() * 3);

    switch (habilidadAleatoria) {
      case 0:
        this.ataque1(100, 200, "Puñalada");
        break;

      case 1:
        this.ataque2(180, 225, "Dagas Espectrales");
        break;

      case 2:
        this.ataque3(230, 510, "Ejecución en las sombras");
        break;
    }
  }
}

//Funcion de pelea

function batallaCampal(peleadores) {
  let sobrevivientes = peleadores.filter((p) => p.vida > 0);

  while (sobrevivientes.length > 1) {
    console.log(`------------- ROUND ${round} -------------`);
    for (const p of sobrevivientes) {
      if (p.vida > 0) {
        p.EjecutarPelea();
      }

      //2da validacion por si alguno murio luego del ataque
      sobrevivientes = peleadores.filter((p) => p.vida > 0);

      if (sobrevivientes.length <= 1) {
        break;
      }
    }

    round++;
  }

  console.log(`------------ BATALLA TERMINADA ----------`);
  console.log(`${sobrevivientes[0].nombre} Es el ganador`);
}
// Instaciar personajes
// const prueba = new Character("prueba", 300, generarNumAleatorios(180, 220), 50);

const berserker = new Berserker(
  "Kael",
  generarNumAleatorios(900, 1020),
  generarNumAleatorios(20, 60),
  1,
);
const hechicera = new Hechicero(
  "Elyra",
  generarNumAleatorios(700, 900),
  generarNumAleatorios(10, 30),
  2,
);
const paladin = new Paladin(
  "Darius",
  generarNumAleatorios(1000, 1100),
  generarNumAleatorios(50, 80),
  3,
);
const asesino = new Asesino(
  "Sylas",
  generarNumAleatorios(800, 1000),
  generarNumAleatorios(15, 50),
  4,
);

// EJECUCION DE PELEA
let personajes = [berserker, hechicera, paladin, asesino];
for (const p of personajes) {
  console.log(`nombre: ${p.nombre} / vida: ${p.vida} escudo: ${p.defensa}`);
}

batallaCampal(personajes);

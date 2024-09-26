class Pregunta {
  constructor(pregunta, opciones, respuesta, indice) {
    this.pregunta = pregunta;
    this.opciones = opciones;
    this.respuesta = respuesta;
    this.indice = indice;

    this.verificacion = () => {
      let elementos = document.querySelectorAll(
        `input[name="pregunta${this.indice}"]`
      );
      elementos.forEach((radius) => {
        if (radius.checked) {
          let resultado =
            parseInt(radius.value) == respuesta ? "Correcto" : "Incorrecto";
          console.log(resultado);
        }
      });
    };

    this.asignacion = (id) => {
      // Creacion de elementos HTML en javascript
      const div = document.createElement("div");
      const p = document.createElement("p");
      const label0 = document.createElement("label");
      const label1 = document.createElement("label");
      const label2 = document.createElement("label");
      const input0 = document.createElement("input");
      const input1 = document.createElement("input");
      const input2 = document.createElement("input");

      // Colocar Valores
      p.textContent = pregunta;
      div.id = `pregunta${id}`;

      label0.textContent += opciones[0];
      input0.type = "radio";
      input0.name = `pregunta${id}`;
      input0.value = "0";

      label1.textContent += opciones[1];
      input1.type = "radio";
      input1.name = `pregunta${id}`;
      input1.value = "1";

      label2.textContent += opciones[2];
      input2.type = "radio";
      input2.name = `pregunta${id}`;
      input2.value = "2";

      div.appendChild(p);
      div.appendChild(label0);
      div.appendChild(input0);
      div.appendChild(label1);
      div.appendChild(input1);
      div.appendChild(label2);
      div.appendChild(input2);

      const listaDePreguntasHTML = document.getElementById("listaDePreguntas"); // recupere el form
      listaDePreguntasHTML.appendChild(div);
    };
  }
}

const listaDePreguntas = [];

const creadorDePreguntas = (pregunta, opciones, respuesta, indice) => {
  const clasePregunta = new Pregunta(pregunta, opciones, respuesta, indice);
  listaDePreguntas.push(clasePregunta);
};

creadorDePreguntas(
  "Welcome to",
  ["brawlhalla", "me la changua", "Jhala"],
  0,
  0
);
creadorDePreguntas("Es hora ", ["de Aventura", "del show", "de mimir"], 1, 1);
creadorDePreguntas(
  "Cuantos años tiene un mes",
  ["365 dias", "1 año", "ninguna de las anteriores"],
  2,
  2
);
creadorDePreguntas(
  "Cual es el animal que mas vive",
  ["tortuga", "leon", "ballena"],
  1,
  3
);
creadorDePreguntas("Cuantos huesos tiene el cuerpo humano",
  ["206","332","320"],
  0,
  4
);

const boton = () => {
  for (let index = 0; index < listaDePreguntas.length; index++) {
    listaDePreguntas[index].verificacion();
  }
};

(() => {
  for (let index = 0; index < listaDePreguntas.length; index++) {
    listaDePreguntas[index].asignacion(index);
  }
})();

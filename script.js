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
      let signal_color = document.querySelectorAll(`#pregunta${this.indice} label`);
      elementos.forEach((radius) => {
        false_count += radius.checked ? 0 : 1;
        
        //Si el input esta activado, el label correspondiente cambiara de color si la respuesta es correcta o incorrecta
        if (radius.checked) {
          signal_color[radius.value].style.color =
            parseInt(radius.value) == respuesta ? "green" : "red";
        }
      });
    };

    this.asignacion = (id) => {
      // Creacion de elementos HTML en javascript
      const div = document.createElement("div");
      const div_content = document.createElement("div");
      const p = document.createElement("p");
      const label0 = document.createElement("label");
      const label1 = document.createElement("label");
      const label2 = document.createElement("label");
      const input0 = document.createElement("input");
      const input1 = document.createElement("input");
      const input2 = document.createElement("input");

      // Colocar Valores
      p.textContent = `${indice + 1}) ¿${pregunta}?`;
      div.id = `pregunta${id}`;
      div_content.className = "opciones";

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
      div.appendChild(div_content);
      div_content.appendChild(label0);
      div_content.appendChild(input0);
      div_content.appendChild(label1);
      div_content.appendChild(input1);
      div_content.appendChild(label2);
      div_content.appendChild(input2);

      const listaDePreguntasHTML = document.getElementById("listaDePreguntas"); // recupere el form
      listaDePreguntasHTML.appendChild(div);
    };
  }
}

let Start = document.getElementById("userInfo");
let UserName = document.getElementById("user");
let Score = 0;
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

const evaluar = () => {
  for (let index = 0; index < listaDePreguntas.length; index++) {
    listaDePreguntas[index].verificacion();
  }
};
const registerName = () => {
  Start.style.transform = "scale(0,0)";
  Start.style.transition = "0.5s";
  Start.style.opacity = "0";
  let cuerpo = document.querySelector("body");
  cuerpo.style.overflow = "visible";
  cuerpo.style.height = "100%";
  console.log(UserName.value);
}
(() => {
  for (let index = 0; index < listaDePreguntas.length; index++) {
    listaDePreguntas[index].asignacion(index);
  }
})();
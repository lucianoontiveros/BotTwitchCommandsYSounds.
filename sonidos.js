const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: "brunispet",
    password: "oauth:hbyy5cgl6rvoakig63sesh9cvfle6n",
  },
  channels: ["cuartodechenz"],
});

const sounds = {
  abrachetada: {
    audio: new Audio("./sonidos/!abrachetada.mp3"),
    image: "./imagenes/abrachetada.png",
  },
  abuscarla: {
    audio: new Audio("./sonidos/!abuscarla.mp3"),
    image: "./imagenes/abuscarla.png",
  },
  anda: {
    audio: new Audio("./sonidos/!anda.mp3"),
    image: "./imagenes/anda.png",
  },
  asiestamos: {
    audio: new Audio("./sonidos/!asiestamos.mp3"),
    image: "./imagenes/asiestamos.png",
  },
  avisaron: {
    audio: new Audio("./sonidos/!avisaron.mp3"),
    image: "./imagenes/asiestamos.png",
  },
  ayudame: {
    audio: new Audio("./sonidos/!ayudame.mp3"),
    image: "./imagenes/ayudame.png",
  },
  belleza: {
    audio: new Audio("./sonidos/!belleza.mp3"),
    image: "./imagenes/belleza.png",
  },
  buenasnoches: {
    audio: new Audio("./sonidos/!buenasnoches.mp3"),
    image: "./imagenes/buenasnoches.png",
  },
  buenastardes: {
    audio: new Audio("./sonidos/!buenastardes.mp3"),
    image: "./imagenes/buenastardes.png",
  },
  buendia: {
    audio: new Audio("./sonidos/!buendia.mp3"),
    image: "./imagenes/buendia.png",
  },
  chanchito: {
    audio: new Audio("./sonidos/!chanchito.mp3"),
    image: "./imagenes/chanchito.png",
  },
  chingona: {
    audio: new Audio("./sonidos/!chingona.mp3"),
    image: "./imagenes/chingona.png",
  },
  chisme: {
    audio: new Audio("./sonidos/!chisme.mp3"),
    image: "./imagenes/chisme.png",
  },
  comerla: {
    audio: new Audio("./sonidos/!comerla.mp3"),
    image: "./imagenes/acomerla.png",
  },
  concentrado: {
    audio: new Audio("./sonidos/!concentrado.mp3"),
    image: "./imagenes/concentrado.png",
  },
  correPerra: {
    audio: new Audio("./sonidos/!correperra.mp3"),
    image: "./imagenes/correperra.png",
  },
  donando: {
    audio: new Audio("./sonidos/!donando.mp3"),
    image: "./imagenes/donado.png",
  },
  dormir: {
    audio: new Audio("./sonidos/!dormir.mp3"),
    image: "./imagenes/dormir.png",
  },
  transmiti: {
    audio: new Audio("./sonidos/!ds.mp3"),
    image: "./imagenes/ds.png",
  },
  dulzura: {
    audio: new Audio("./sonidos/!dulzura.mp3"),
    image: "./imagenes/dulzura.png",
  },
  elpecho: {
    audio: new Audio("./sonidos/!elpecho.mp3"),
    image: "./imagenes/elpecho.png",
  },
  eltimer: {
    audio: new Audio("./sonidos/!eltimer.mp3"),
    image: "./imagenes/eltimer.png",
  },
  empalmo: {
    audio: new Audio("./sonidos/!empalmo.mp3"),
    image: "./imagenes/empalmo.png",
  },
  empanada: {
    audio: new Audio("./sonidos/!empanada.mp3"),
    image: "./imagenes/empanada.png",
  },
  yaesta: {
    audio: new Audio("./sonidos/!yaesta.mp3"),
    image: "./imagenes/reprochando.png",
  },
  ese: {
    audio: new Audio("./sonidos/!ese.mp3"),
    image: "./imagenes/reprochando.png",
  },
  estas: {
    audio: new Audio("./sonidos/!estas.mp3"),
    image: "./imagenes/pordefecto.png",
  },
  fenomenal: {
    audio: new Audio("./sonidos/!fenomenal.mp3"),
    image: "./imagenes/fenomenal.png",
  },
  fin: {
    audio: new Audio("./sonidos/!fin.mp3"),
    image: "./imagenes/sorprendido1.png",
  },
  forro: {
    audio: new Audio("./sonidos/!forro.mp3"),
    image: "./imagenes/reprochando.png",
  },
  friend: {
    audio: new Audio("./sonidos/!friend.mp3"),
    image: "./imagenes/friend.png",
  },
  grash: {
    audio: new Audio("./sonidos/!grash.mp3"),
    image: "./imagenes/grash.png",
  },
  hicistes: {
    audio: new Audio("./sonidos/!hicistes.mp3"),
    image: "./imagenes/hiciste.png",
  },
  hacelo: {
    audio: new Audio("./sonidos/!hacelo.mp3"),
    image: "./imagenes/señalar.png",
  },
  haytiempo: {
    audio: new Audio("./sonidos/!haytiempo.mp3"),
    image: "./imagenes/eltimer.png",
  },
  hijo: {
    audio: new Audio("./sonidos/!hijo.mp3"),
    image: "./imagenes/mano.png",
  },
  ilegal: {
    audio: new Audio("./sonidos/!ilegal.mp3"),
    image: "./imagenes/ilegal.png",
  },
  lachancla: {
    audio: new Audio("./sonidos/!lachancla.mp3"),
    image: "./imagenes/lachancla.png",
  },
  lapala: {
    audio: new Audio("./sonidos/!lapala.mp3"),
    image: "./imagenes/lapala.png",
  },
  lapava: {
    audio: new Audio("./sonidos/!lapava.mp3"),
    image: "./imagenes/lapava.png",
  },
  lapaloma: {
    audio: new Audio("./sonidos/!lapaloma.mp3"),
    image: "./imagenes/lapaloma.png",
  },
  lapastillita: {
    audio: new Audio("./sonidos/!lapastillita.mp3"),
    image: "./imagenes/señalar.png",
  },
  pantallita: {
    audio: new Audio("./sonidos/!pantallita.mp3"),
    image: "./imagenes/señalar.png",
  },
  papapa: {
    audio: new Audio("./sonidos/!papapa.mp3"),
    image: "./imagenes/papapa.png",
  },
  lautaro: {
    audio: new Audio("./sonidos/!lautaro.mp3"),
    image: "./imagenes/lautaro.png",
  },
  licuado: {
    audio: new Audio("./sonidos/!licuado.mp3"),
    image: "./imagenes/licuado.png",
  },
  llorar: {
    audio: new Audio("./sonidos/!llorar.mp3"),
    image: "./imagenes/llorar.png",
  },
  luooz: {
    audio: new Audio("./sonidos/!luooz.mp3"),
    image: "./imagenes/loouz.png",
  },
  mate1: {
    audio: new Audio("./sonidos/!mate.mp3"),
    image: "./imagenes/mate.png",
  },
  menor: {
    audio: new Audio("./sonidos/!menor.mp3"),
    image: "./imagenes/menor.png",
  },
  mami: {
    audio: new Audio("./sonidos/!mami.mp3"),
    image: "./imagenes/mira.png",
  },
  marcho: {
    audio: new Audio("./sonidos/!marcho.mp3"),
    image: "./imagenes/default.png",
  },
  meter: {
    audio: new Audio("./sonidos/!meter.mp3"),
    image: "./imagenes/meter.png",
  },
  micho: {
    audio: new Audio("./sonidos/!micho.mp3"),
    image: "./imagenes/micho.png",
  },
  mira: {
    audio: new Audio("./sonidos/!mira.mp3"),
    image: "./imagenes/mira.png",
  },
  nojuego: {
    audio: new Audio("./sonidos/!nojuego.mp3"),
    image: "./imagenes/nojugar.png",
  },
  nomequeme: {
    audio: new Audio("./sonidos/!nomequeme.mp3"),
    image: "./imagenes/verguenza.png",
  },
  noplan: {
    audio: new Audio("./sonidos/!noplan.mp3"),
    image: "./imagenes/yonofui.png",
  },
  nose: {
    audio: new Audio("./sonidos/!nose.mp3"),
    image: "./imagenes/yonofui.png",
  },
  note: {
    audio: new Audio("./sonidos/!note.mp3"),
    image: "./imagenes/sorprendido1.png",
  },
  optimo: {
    audio: new Audio("./sonidos/!optimo.mp3"),
    image: "./imagenes/fenomenal.png",
  },
  papi: {
    audio: new Audio("./sonidos/!papi.mp3"),
    image: "./imagenes/mira.png",
  },
  paraq: {
    audio: new Audio("./sonidos/!paraq.mp3"),
    image: "./imagenes/default.png",
  },
  pato: {
    audio: new Audio("./sonidos/!pato.mp3"),
    image: "./imagenes/pato.png",
  },
  pelotudismo: {
    audio: new Audio("./sonidos/!pelotudismo.mp3"),
    image: "./imagenes/default.png",
  },
  pica: {
    audio: new Audio("./sonidos/!pica.mp3"),
    image: "./imagenes/default.png",
  },
  pium: {
    audio: new Audio("./sonidos/!pium.mp3"),
    image: "./imagenes/pium.png",
  },
  placard: {
    audio: new Audio("./sonidos/!placar.mp3"),
    image: "./imagenes/placar.png",
  },
  pongo: {
    audio: new Audio("./sonidos/!pongo.mp3"),
    image: "./imagenes/default.png",
  },
  pqno: {
    audio: new Audio("./sonidos/!pqno.mp3"),
    image: "./imagenes/default.png",
  },
  puntitos: {
    audio: new Audio("./sonidos/!puntitos.mp3"),
    image: "./imagenes/puntitos.png",
  },
  quienes: {
    audio: new Audio("./sonidos/!quienes.mp3"),
    image: "./imagenes/default.png",
  },
  rechazo: {
    audio: new Audio("./sonidos/!rechazo.mp3"),
    image: "./imagenes/rechazo.png",
  },
  regalar: {
    audio: new Audio("./sonidos/!regalar.mp3"),
    image: "./imagenes/regalar.png",
  },
  risa: {
    audio: new Audio("./sonidos/!risa.mp3"),
    image: "./imagenes/risa.png",
  },
  ro: {
    audio: new Audio("./sonidos/!ro.mp3"),
    image: "./imagenes/moderador.png",
  },
  jojo: {
    audio: new Audio("./sonidos/!jojo.mp3"),
    image: "./imagenes/jojojo.png",
  },
  jugar: {
    audio: new Audio("./sonidos/!jugar.mp3"),
    image: "./imagenes/jugar.png",
  },
  lalala: {
    audio: new Audio("./sonidos/!lalala.mp3"),
    image: "./imagenes/psico.png",
  },
  rodilla: {
    audio: new Audio("./sonidos/!rodilla.mp3"),
    image: "./imagenes/mano.png",
  },
  rojo: {
    audio: new Audio("./sonidos/!rojo.mp3"),
    image: "./imagenes/rojo.png",
  },
  sangre: {
    audio: new Audio("./sonidos/!sangre.mp3"),
    image: "./imagenes/sangre.png",
  },
  sexo: {
    audio: new Audio("./sonidos/!sexo.mp3"),
    image: "./imagenes/sexo.png",
  },
  sorete: {
    audio: new Audio("./sonidos/!sorete.mp3"),
    image: "./imagenes/sorete.png",
  },
  temazo: {
    audio: new Audio("./sonidos/!temazo.mp3"),
    image: "./imagenes/temazo.png",
  },
  temazo1: {
    audio: new Audio("./sonidos/!temazo1.mp3"),
    image: "./imagenes/temazo1.png",
  },
  tercermundista: {
    audio: new Audio("./sonidos/!tercermundista.mp3"),
    image: "./imagenes/default.png",
  },
  tere: {
    audio: new Audio("./sonidos/!tere1.mp3"),
    image: "./imagenes/tere.png",
  },
  tere2: {
    audio: new Audio("./sonidos/!tere2.mp3"),
    image: "./imagenes/tere.png",
  },
  tere3: {
    audio: new Audio("./sonidos/!tere3.mp3"),
    image: "./imagenes/tere.png",
  },
  tere4: {
    audio: new Audio("./sonidos/!tere4.mp3"),
    image: "./imagenes/tere.png",
  },
  tuki: {
    audio: new Audio("./sonidos/!tuki.mp3"),
    image: "./imagenes/boton.png",
  },
  tuki1: {
    audio: new Audio("./sonidos/!tuki1.mp3"),
    image: "./imagenes/boton1.png",
  },
  tuki2: {
    audio: new Audio("./sonidos/!tuki2.mp3"),
    image: "./imagenes/boton2.png",
  },
  verde: {
    audio: new Audio("./sonidos/!verde.mp3"),
    image: "./imagenes/verde.png",
  },
  valeya: {
    audio: new Audio("./sonidos/!valeya.mp3"),
    image: "./imagenes/vale.png",
  },
  var: { audio: new Audio("./sonidos/!var.mp3"), image: "./imagenes/var.png" },
  usted: {
    audio: new Audio("./sonidos/!usted.mp3"),
    image: "./imagenes/señalar.png",
  },
  unite: {
    audio: new Audio("./sonidos/!unite.mp3"),
    image: "./imagenes/plantar.png",
  },
  unite2: {
    audio: new Audio("./sonidos/!unite2.mp3"),
    image: "./imagenes/plantar.png",
  },
  viernes: {
    audio: new Audio("./sonidos/!viernes.mp3"),
    image: "./imagenes/viernes.png",
  },
  volví: {
    audio: new Audio("./sonidos/!volví.mp3"),
    image: "./imagenes/volvi.png",
  },
  yaentendi: {
    audio: new Audio("./sonidos/!yaentendi.mp3"),
    image: "./imagenes/sorprendido.png",
  },
  misamores: {
    audio: new Audio("./sonidos/!misamores.mp3"),
    image: "./imagenes/chisme.png",
  },
  qpesado: {
    audio: new Audio("./sonidos/!qpesado.mp3"),
    image: "./imagenes/sorprendido1.png",
  },
  juancarlos: {
    audio: new Audio("./sonidos/!juancarlos.mp3"),
    image: "./imagenes/empalmo.png",
  },
  precoz: {
    audio: new Audio("./sonidos/!precoz.mp3"),
    image: "./imagenes/verguenza.png",
  },
  florcita: {
    audio: new Audio("./sonidos/!florcita.mp3"),
    image: "./imagenes/florcita.png",
  },
  velorio: {
    audio: new Audio("./sonidos/!velorio.mp3"),
    image: "./imagenes/velorio.png",
  },
  corazon: {
    audio: new Audio("./sonidos/!corazon.mp3"),
    image: "./imagenes/corazon.png",
  },
  mate: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/mate.png",
  },
  almorzar: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/comer.png",
  },
  cenar: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/comer.png",
  },
  desayunar: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/desayunar.png",
  },
  merendar: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/comer.png",
  },
  apaga: {
    audio: new Audio("./sonidos/!apaga.mp3"),
    image: "./imagenes/apaga.png",
  },
  sorbito: {
    audio: new Audio("./sonidos/!sorbito.mp3"),
    image: "./imagenes/sorbito.png",
  },
  tierno: {
    audio: new Audio("./sonidos/!tierno.mp3"),
    image: "./imagenes/tierno.png",
  },
  lista: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/lista.png",
  },
  baño: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/baño.png",
  },
  basta: {
    audio: new Audio("./sonidos/!basta.mp3"),
    image: "./imagenes/basta.png",
  },
  lobo: {
    audio: new Audio("./sonidos/!lobo.mp3"),
    image: "./imagenes/lobo.png",
  },
  habilitar: {
    audio: new Audio("./sonidos/!gota.mp3"),
    image: "./imagenes/habilitar.png",
  },
  zarpado: {
    audio: new Audio("./sonidos/!zarpado.mp3"),
    image: "./imagenes/zarpado.png",
  },
  para: {
    audio: new Audio("./sonidos/!para.mp3"),
    image: "./imagenes/para.gif",
  },
  plantitas: {
    audio: new Audio("./sonidos/!plantitas.mp3"),
    image: "./imagenes/plantitas.png",
  },
  cucaracha: {
    audio: new Audio("./sonidos/!cucaracha.mp3"),
    image: "./imagenes/cucaracha.png",
  },
  laspibas: {
    audio: new Audio("./sonidos/!laspibas.mp3"),
    image: "./imagenes/laspibas.png",
  },
  bobo: {
    audio: new Audio("./sonidos/!bobo.mp3"),
    image: "./imagenes/bobo.png",
  },
  dios: {
    audio: new Audio("./sonidos/!dios.mp3"),
    image: "./imagenes/dios.png",
  },
  hechizo: {
    audio: new Audio("./sonidos/!hechizo.mp3"),
    image: "./imagenes/hechizo.png",
  },
  elamor: {
    audio: new Audio("./sonidos/!elamor.mp3"),
    image: "./imagenes/elamor.png",
  },
  grita: {
    audio: new Audio("./sonidos/!grita.mp3"),
    image: "./imagenes/grita.png",
  },
  siuuu: {
    audio: new Audio("./sonidos/!siuuu.mp3"),
    image: "./imagenes/siuuu.png",
  },
  necesito: {
    audio: new Audio("./sonidos/!necesito.mp3"),
    image: "./imagenes/necesito.png",
  },
  ayuno: {
    audio: new Audio("./sonidos/!ayuno.mp3"),
    image: "./imagenes/ayuno.png",
  },
  reza: {
    audio: new Audio("./sonidos/!reza.mp3"),
    image: "./imagenes/reza.png",
  },
  fotosintesis: {
    audio: new Audio("./sonidos/!fotosintesis.mp3"),
    image: "./imagenes/fotosintesis.png",
  },
  levantarse: {
    audio: new Audio("./sonidos/!levantarse.mp3"),
    image: "./imagenes/levantarse.png",
  },
  levantarte: {
    audio: new Audio("./sonidos/!levantarte.mp3"),
    image: "./imagenes/levantarte.png",
  },
  talleres: {
    audio: new Audio("./sonidos/!talleres.mp3"),
    image: "./imagenes/talleres.png",
  },
  siyase: {
    audio: new Audio("./sonidos/!siyase.mp3"),
    image: "./imagenes/siyase.png",
  },
  devoraste: {
    audio: new Audio("./sonidos/!devoraste.mp3"),
    image: "./imagenes/devoraste.png",
  },
  tutu: {
    audio: new Audio("./sonidos/!tutu.mp3"),
    image: "./imagenes/tutu.png",
  },
  tequedo: {
    audio: new Audio("./sonidos/!tequedo.mp3"),
    image: "./imagenes/tequedo.png",
  },
  cerrar: {
    audio: new Audio("./sonidos/!cerrar.mp3"),
    image: "./imagenes/cerrar.png",
  },
  lehizo: {
    audio: new Audio("./sonidos/!lehizo.mp3"),
    image: "./imagenes/lehizo.png",
  },
  mecrees: {
    audio: new Audio("./sonidos/!mecrees.mp3"),
    image: "./imagenes/mecrees.png",
  },
};

const soundQueue = []; // Sound playback queue
let isPlaying = false; // Indicates if a sound is currently being played
var isMuted = false;

// Create a single image element
const imageElement = new Image();
imageElement.classList.add("sound-image");
document.body.appendChild(imageElement);

function playNextSound() {
  if (soundQueue.length > 0 && !isPlaying) {
    var nextSound = soundQueue.shift();

    // Create a new Image element for each sound
    const imageElement = new Image();
    imageElement.src = nextSound.image;
    imageElement.classList.add("sound-image");

    // Append the new image element to the body
    document.body.appendChild(imageElement);

    try {
      nextSound.audio.play();

      nextSound.audio.onended = () => {
        // Remove the image element when the sound ends
        document.body.removeChild(imageElement);

        isPlaying = false;
        playNextSound();
      };

      isPlaying = true;
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);

      // Remove the image element in case of an error
      document.body.removeChild(imageElement);

      isPlaying = false;
      playNextSound();
    }
  }
}

function playSound(sound) {
  soundQueue.push(sound);

  if (!isPlaying) {
    playNextSound();
  }
}

try {
  client.connect();
  client.on("message", (channel, tags, message, self) => {
    if (message.startsWith("!")) {
      const soundName = message.slice(1);
      const sound = sounds[soundName];
      const username = tags.username;
      const mod = tags.mod;
      const prefixes = [
        "!marcar",
        "!eliminar",
        "!tarea",
        "!task",
        "!pickup",
        "!delete",
        "!check",
        "!clear",
      ];

      switch (soundName) {
        case "silencio":
          if (username === "cuartodechenz" || mod) {
            isMuted = true;
            console.log("Se mutearon comandos");
          } else {
            console.log("No tienes permiso para ejecutar este comando");
          }
          break;
        case "activo":
          if (username === "cuartodechenz" || mod) {
            isMuted = false;
            console.log("Se activaron los comandos");
          } else {
            console.log("No tienes permiso para ejecutar este comando");
          }
          break;
      }

      if (
        !isMuted &&
        soundName !== "silencio" &&
        soundName !== "activo" &&
        sound
      ) {
        playSound(sound);
      } else if (prefixes.some((prefix) => message.startsWith(prefix))) {
        playSound({
          audio: new Audio("./sonidos/!escribir.mp3"),
          image: "./imagenes/notas.png",
        });
      } else {
        console.log("Estamos mute");
        return;
      }
    }
  });
} catch (error) {
  console.error("Error al conectar con el cliente de Twitch:", error);
}

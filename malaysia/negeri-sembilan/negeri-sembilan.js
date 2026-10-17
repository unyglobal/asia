// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"negeri-sembilan","repository":"asia","path":"malaysia/negeri-sembilan","depth":2,"parent":"malaysia","children":["bahau","bandar-sri-sendayan","gemas","kampung-baharu-nilai","kampung-teluk-kemang","kuala-pilah","lukut","port-dickson","rembau","rompin","seremban","taman-senawang-indah","taman-seremban-jaya","tampin"]});
export const childModules = Object.freeze({"bahau":"./bahau/bahau.js","bandar-sri-sendayan":"./bandar-sri-sendayan/bandar-sri-sendayan.js","gemas":"./gemas/gemas.js","kampung-baharu-nilai":"./kampung-baharu-nilai/kampung-baharu-nilai.js","kampung-teluk-kemang":"./kampung-teluk-kemang/kampung-teluk-kemang.js","kuala-pilah":"./kuala-pilah/kuala-pilah.js","lukut":"./lukut/lukut.js","port-dickson":"./port-dickson/port-dickson.js","rembau":"./rembau/rembau.js","rompin":"./rompin/rompin.js","seremban":"./seremban/seremban.js","taman-senawang-indah":"./taman-senawang-indah/taman-senawang-indah.js","taman-seremban-jaya":"./taman-seremban-jaya/taman-seremban-jaya.js","tampin":"./tampin/tampin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

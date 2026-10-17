// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sagaing-region","repository":"asia","path":"myanmar/sagaing-region","depth":2,"parent":"myanmar","children":["kalemyo","kanbalu","katha","mawlaik","monywa","sagaing","shwebo","tamu","tatkon","ye-u"]});
export const childModules = Object.freeze({"kalemyo":"./kalemyo/kalemyo.js","kanbalu":"./kanbalu/kanbalu.js","katha":"./katha/katha.js","mawlaik":"./mawlaik/mawlaik.js","monywa":"./monywa/monywa.js","sagaing":"./sagaing/sagaing.js","shwebo":"./shwebo/shwebo.js","tamu":"./tamu/tamu.js","tatkon":"./tatkon/tatkon.js","ye-u":"./ye-u/ye-u.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

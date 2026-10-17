// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bali","repository":"asia","path":"indonesia/bali","depth":2,"parent":"indonesia","children":["amlapura","amlapura-city","batubulan","bedugul","benoa","dalung","denpasar","klungkung","kuta","negara","seririt","singaraja","sukawati","tabanan","ubud"]});
export const childModules = Object.freeze({"amlapura":"./amlapura/amlapura.js","amlapura-city":"./amlapura-city/amlapura-city.js","batubulan":"./batubulan/batubulan.js","bedugul":"./bedugul/bedugul.js","benoa":"./benoa/benoa.js","dalung":"./dalung/dalung.js","denpasar":"./denpasar/denpasar.js","klungkung":"./klungkung/klungkung.js","kuta":"./kuta/kuta.js","negara":"./negara/negara.js","seririt":"./seririt/seririt.js","singaraja":"./singaraja/singaraja.js","sukawati":"./sukawati/sukawati.js","tabanan":"./tabanan/tabanan.js","ubud":"./ubud/ubud.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khulna-division","repository":"asia","path":"bangladesh/khulna-division","depth":2,"parent":"bangladesh","children":["bagerhat","bhatpara-abhaynagar","bheramara","jessore","jhingergacha","kalia","kaliganj","kesabpur","khulna","kushtia","morrelgonj","narail","phultala","sarankhola","satkhira","taluker-char-doani","uttar-char-fasson"]});
export const childModules = Object.freeze({"bagerhat":"./bagerhat/bagerhat.js","bhatpara-abhaynagar":"./bhatpara-abhaynagar/bhatpara-abhaynagar.js","bheramara":"./bheramara/bheramara.js","jessore":"./jessore/jessore.js","jhingergacha":"./jhingergacha/jhingergacha.js","kalia":"./kalia/kalia.js","kaliganj":"./kaliganj/kaliganj.js","kesabpur":"./kesabpur/kesabpur.js","khulna":"./khulna/khulna.js","kushtia":"./kushtia/kushtia.js","morrelgonj":"./morrelgonj/morrelgonj.js","narail":"./narail/narail.js","phultala":"./phultala/phultala.js","sarankhola":"./sarankhola/sarankhola.js","satkhira":"./satkhira/satkhira.js","taluker-char-doani":"./taluker-char-doani/taluker-char-doani.js","uttar-char-fasson":"./uttar-char-fasson/uttar-char-fasson.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

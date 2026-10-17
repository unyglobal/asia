// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khatlon-province","repository":"asia","path":"tajikistan/khatlon-province","depth":2,"parent":"tajikistan","children":["bokhtar","chubek","danghara","farkhor","hulbuk","kolkhozobod","kulob","moskovskiy","norak","vakhsh","yovon","zarhalol"]});
export const childModules = Object.freeze({"bokhtar":"./bokhtar/bokhtar.js","chubek":"./chubek/chubek.js","danghara":"./danghara/danghara.js","farkhor":"./farkhor/farkhor.js","hulbuk":"./hulbuk/hulbuk.js","kolkhozobod":"./kolkhozobod/kolkhozobod.js","kulob":"./kulob/kulob.js","moskovskiy":"./moskovskiy/moskovskiy.js","norak":"./norak/norak.js","vakhsh":"./vakhsh/vakhsh.js","yovon":"./yovon/yovon.js","zarhalol":"./zarhalol/zarhalol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

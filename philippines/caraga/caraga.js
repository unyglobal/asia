// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caraga","repository":"asia","path":"philippines/caraga","depth":2,"parent":"philippines","children":["bah-bah","bayugan","bislig","buenavista","bunawan","butuan","cabadbaran","hinatuan","libertad","prosperidad","surigao","tagbina","talacogon","tandag","trento","veruela"]});
export const childModules = Object.freeze({"bah-bah":"./bah-bah/bah-bah.js","bayugan":"./bayugan/bayugan.js","bislig":"./bislig/bislig.js","buenavista":"./buenavista/buenavista.js","bunawan":"./bunawan/bunawan.js","butuan":"./butuan/butuan.js","cabadbaran":"./cabadbaran/cabadbaran.js","hinatuan":"./hinatuan/hinatuan.js","libertad":"./libertad/libertad.js","prosperidad":"./prosperidad/prosperidad.js","surigao":"./surigao/surigao.js","tagbina":"./tagbina/tagbina.js","talacogon":"./talacogon/talacogon.js","tandag":"./tandag/tandag.js","trento":"./trento/trento.js","veruela":"./veruela/veruela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

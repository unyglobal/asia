// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nagasaki","repository":"asia","path":"japan/nagasaki","depth":2,"parent":"japan","children":["fukuecho","goto","hirado","iki","isahaya","kamigoto","matsuura","minamishimabara","obita","omura","saikai","sasebo","shimabara","togitsu","unzen"]});
export const childModules = Object.freeze({"fukuecho":"./fukuecho/fukuecho.js","goto":"./goto/goto.js","hirado":"./hirado/hirado.js","iki":"./iki/iki.js","isahaya":"./isahaya/isahaya.js","kamigoto":"./kamigoto/kamigoto.js","matsuura":"./matsuura/matsuura.js","minamishimabara":"./minamishimabara/minamishimabara.js","obita":"./obita/obita.js","omura":"./omura/omura.js","saikai":"./saikai/saikai.js","sasebo":"./sasebo/sasebo.js","shimabara":"./shimabara/shimabara.js","togitsu":"./togitsu/togitsu.js","unzen":"./unzen/unzen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"utsunomiya","repository":"asia","path":"japan/tochigi/utsunomiya","depth":3,"parent":"japan/tochigi","children":["babadori","chuo","hanawada","higashihanawada","higashitomatsuri","hoshigaoka","obata","ozo","shimotomatsuri","showa"]});
export const childModules = Object.freeze({"babadori":"./babadori/babadori.js","chuo":"./chuo/chuo.js","hanawada":"./hanawada/hanawada.js","higashihanawada":"./higashihanawada/higashihanawada.js","higashitomatsuri":"./higashitomatsuri/higashitomatsuri.js","hoshigaoka":"./hoshigaoka/hoshigaoka.js","obata":"./obata/obata.js","ozo":"./ozo/ozo.js","shimotomatsuri":"./shimotomatsuri/shimotomatsuri.js","showa":"./showa/showa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chuy-region","repository":"asia","path":"kyrgyzstan/chuy-region","depth":2,"parent":"kyrgyzstan","children":["belovodskoye","ivanovka","kant","kara-balta","kojomkul","lebedinovka","tokmok"]});
export const childModules = Object.freeze({"belovodskoye":"./belovodskoye/belovodskoye.js","ivanovka":"./ivanovka/ivanovka.js","kant":"./kant/kant.js","kara-balta":"./kara-balta/kara-balta.js","kojomkul":"./kojomkul/kojomkul.js","lebedinovka":"./lebedinovka/lebedinovka.js","tokmok":"./tokmok/tokmok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

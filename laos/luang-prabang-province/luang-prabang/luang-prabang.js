// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luang-prabang","repository":"asia","path":"laos/luang-prabang-province/luang-prabang","depth":3,"parent":"laos/luang-prabang-province","children":["ban-phanglouang","ban-phanom","ban-phasouk","ban-phonkeo","ban-xangkhong"]});
export const childModules = Object.freeze({"ban-phanglouang":"./ban-phanglouang/ban-phanglouang.js","ban-phanom":"./ban-phanom/ban-phanom.js","ban-phasouk":"./ban-phasouk/ban-phasouk.js","ban-phonkeo":"./ban-phonkeo/ban-phonkeo.js","ban-xangkhong":"./ban-xangkhong/ban-xangkhong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

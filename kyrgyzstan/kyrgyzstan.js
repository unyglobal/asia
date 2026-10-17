// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kyrgyzstan","repository":"asia","path":"kyrgyzstan","depth":1,"parent":"","children":["batken","bishkek","chuy-region","issyk-kul","jalal-abad-region","naryn-region","osh-region","talas-region"]});
export const childModules = Object.freeze({"batken":"./batken/batken.js","bishkek":"./bishkek/bishkek.js","chuy-region":"./chuy-region/chuy-region.js","issyk-kul":"./issyk-kul/issyk-kul.js","jalal-abad-region":"./jalal-abad-region/jalal-abad-region.js","naryn-region":"./naryn-region/naryn-region.js","osh-region":"./osh-region/osh-region.js","talas-region":"./talas-region/talas-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alborz-province","repository":"asia","path":"iran/alborz-province","depth":2,"parent":"iran","children":["chaharbagh","eshtehard","garmdarreh","hashtgerd","kamalshahr","karaj","malekabad","mehestan","mohammad-shahr","nazarabad","shahrak-e-mohandesi-ye-zera-i"]});
export const childModules = Object.freeze({"chaharbagh":"./chaharbagh/chaharbagh.js","eshtehard":"./eshtehard/eshtehard.js","garmdarreh":"./garmdarreh/garmdarreh.js","hashtgerd":"./hashtgerd/hashtgerd.js","kamalshahr":"./kamalshahr/kamalshahr.js","karaj":"./karaj/karaj.js","malekabad":"./malekabad/malekabad.js","mehestan":"./mehestan/mehestan.js","mohammad-shahr":"./mohammad-shahr/mohammad-shahr.js","nazarabad":"./nazarabad/nazarabad.js","shahrak-e-mohandesi-ye-zera-i":"./shahrak-e-mohandesi-ye-zera-i/shahrak-e-mohandesi-ye-zera-i.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bagmati-province","repository":"asia","path":"nepal/bagmati-province","depth":2,"parent":"nepal","children":["banepa","bharatpur","charikot","chautara","dhulikhel","hetauda","kathmandu","kirtipur","madhyapur-thimi","patan"]});
export const childModules = Object.freeze({"banepa":"./banepa/banepa.js","bharatpur":"./bharatpur/bharatpur.js","charikot":"./charikot/charikot.js","chautara":"./chautara/chautara.js","dhulikhel":"./dhulikhel/dhulikhel.js","hetauda":"./hetauda/hetauda.js","kathmandu":"./kathmandu/kathmandu.js","kirtipur":"./kirtipur/kirtipur.js","madhyapur-thimi":"./madhyapur-thimi/madhyapur-thimi.js","patan":"./patan/patan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"azad-kashmir","repository":"asia","path":"pakistan/azad-kashmir","depth":2,"parent":"pakistan","children":["bagh","bhimber","chaksawari","dayal","dhirkot","hajira","islamgarh","khai-gala","kotli","muzaffarabad","new-mirpur-city","pallandri","rawalakot"]});
export const childModules = Object.freeze({"bagh":"./bagh/bagh.js","bhimber":"./bhimber/bhimber.js","chaksawari":"./chaksawari/chaksawari.js","dayal":"./dayal/dayal.js","dhirkot":"./dhirkot/dhirkot.js","hajira":"./hajira/hajira.js","islamgarh":"./islamgarh/islamgarh.js","khai-gala":"./khai-gala/khai-gala.js","kotli":"./kotli/kotli.js","muzaffarabad":"./muzaffarabad/muzaffarabad.js","new-mirpur-city":"./new-mirpur-city/new-mirpur-city.js","pallandri":"./pallandri/pallandri.js","rawalakot":"./rawalakot/rawalakot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

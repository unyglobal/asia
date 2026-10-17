// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ermenek","repository":"asia","path":"turkiye/karaman/ermenek","depth":3,"parent":"turkiye/karaman","children":["akcamescit","basp-nar","degirmenlik","gulluk","gulpazar","meydan","orta","sand-kl","tasbas"]});
export const childModules = Object.freeze({"akcamescit":"./akcamescit/akcamescit.js","basp-nar":"./basp-nar/basp-nar.js","degirmenlik":"./degirmenlik/degirmenlik.js","gulluk":"./gulluk/gulluk.js","gulpazar":"./gulpazar/gulpazar.js","meydan":"./meydan/meydan.js","orta":"./orta/orta.js","sand-kl":"./sand-kl/sand-kl.js","tasbas":"./tasbas/tasbas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

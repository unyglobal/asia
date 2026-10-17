// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asir-region","repository":"asia","path":"saudi-arabia/asir-region","depth":2,"parent":"saudi-arabia","children":["abha","an-nimas","bariq","bishah","khamis-mushait","ranyah","sabt-alalayah","sarat-abidah"]});
export const childModules = Object.freeze({"abha":"./abha/abha.js","an-nimas":"./an-nimas/an-nimas.js","bariq":"./bariq/bariq.js","bishah":"./bishah/bishah.js","khamis-mushait":"./khamis-mushait/khamis-mushait.js","ranyah":"./ranyah/ranyah.js","sabt-alalayah":"./sabt-alalayah/sabt-alalayah.js","sarat-abidah":"./sarat-abidah/sarat-abidah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

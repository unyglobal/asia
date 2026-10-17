// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fukui","repository":"asia","path":"japan/fukui","depth":2,"parent":"japan","children":["awara","echizen","fukui-shi","iijima","katsuyama","maruoka","mikuni","obama","sabae","takefu","tsuruga"]});
export const childModules = Object.freeze({"awara":"./awara/awara.js","echizen":"./echizen/echizen.js","fukui-shi":"./fukui-shi/fukui-shi.js","iijima":"./iijima/iijima.js","katsuyama":"./katsuyama/katsuyama.js","maruoka":"./maruoka/maruoka.js","mikuni":"./mikuni/mikuni.js","obama":"./obama/obama.js","sabae":"./sabae/sabae.js","takefu":"./takefu/takefu.js","tsuruga":"./tsuruga/tsuruga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

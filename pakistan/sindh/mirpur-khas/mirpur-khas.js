// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mirpur-khas","repository":"asia","path":"pakistan/sindh/mirpur-khas","depth":3,"parent":"pakistan/sindh","children":["aurangabad","faruqabad","hirabad","lal-chand-colony","mir-jo-plot-colony","nur-shah-colony","thomasabad","turabad"]});
export const childModules = Object.freeze({"aurangabad":"./aurangabad/aurangabad.js","faruqabad":"./faruqabad/faruqabad.js","hirabad":"./hirabad/hirabad.js","lal-chand-colony":"./lal-chand-colony/lal-chand-colony.js","mir-jo-plot-colony":"./mir-jo-plot-colony/mir-jo-plot-colony.js","nur-shah-colony":"./nur-shah-colony/nur-shah-colony.js","thomasabad":"./thomasabad/thomasabad.js","turabad":"./turabad/turabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;

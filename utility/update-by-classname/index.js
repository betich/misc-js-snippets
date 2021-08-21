// Update Elements by Classname
// Update the style all elements with a class name

const updateByClassName = (name) => {
  const selection = document.getElementsByClassName(name);
  if (!selection) return null;
  return new Proxy(
    {
      selected: selection,
      parentprops: null,
    },
    {
      get: function (obj, prop, receiver) {
        if (!selection) return null;

        if (obj.parentprops) obj.parentprops = Array.from(obj.parentprops).push(prop);
        else obj.parentprops = [prop];

        return receiver; // returns instance of proxy
      },
      set: function (obj, prop, newVal) {
        if (!selection) return null;

        for (let i = obj.selected.length - 1; i >= 0; i--) {
          obj.parentprops
            ? (obj.parentprops.reduce((acc, curr) => acc[curr], obj.selected[i])[prop] = newVal) // chaining properties
            : (obj.selected[i][prop] = newVal);
        }

        if (obj.parentprops) {
          obj.parentprops = null;
        }

        return true;
      },
    }
  );
};

updateByClassName("button").innerHTML = "selected";
updateByClassName("button").style.padding = "16px";

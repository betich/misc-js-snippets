// Access Nested Properties by Array
// Access a nested object property through an array

/**
 * Accesses a nested property via an array
 * @param {Object} obj Object to access the properties from
 * @param {Array} query Array of properties to access
 * @returns {*} Property of the object
 */
function getPropertyFromArray(obj, query) {
  return query.reduce((acc, curr) => acc[curr], obj);
}

getPropertyFromArray(
  {
    a: {
      b: {
        c: "something",
      },
    },
  },
  ["a", "b", "c"]
);

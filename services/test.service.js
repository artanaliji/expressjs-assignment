const logger = require("../config/logger");

/**
 * Test function
 * @param {String} fieldToSort - The field used for sorting (name, email)
 * @returns {Array} - The search results as an Array
 */
const test = (fieldToSort = "name") => {
  console.log({ fieldToSort });
  const dummyData = [
    {
      name: "Plato Henry",
      phone: "1-767-594-4155",
      email: "tincidunt@hotmail.couk",
      address: "P.O. Box 602, 3647 Quisque Ave",
    },
    {
      name: "Honorato Roberson",
      phone: "1-573-702-3068",
      email: "ipsum.dolor@google.net",
      address: "288-4490 Sed, Rd.",
    },
    {
      name: "Dorian Smith",
      phone: "(406) 754-2664",
      email: "nunc.laoreet@aol.com",
      address: "P.O. Box 896, 2229 Sed St.",
    },
    {
      name: "Ella Rodriquez",
      phone: "(758) 686-4368",
      email: "faucibus.orci.luctus@aol.edu",
      address: "Ap #259-6799 Sed, Street",
    },
    {
      name: "Rooney Solomon",
      phone: "(281) 781-3460",
      email: "scelerisque@icloud.com",
      address: "P.O. Box 828, 7573 Arcu St.",
    },
  ].sort((a, b) => {
    const valA = a[fieldToSort].toLowerCase();
    const valB = b[fieldToSort].toLowerCase();

    if (valA > valB) {
      return 1;
    }
    if (valA < valB) {
      return -1;
    }
    return 0;
  });

  return dummyData;
};

module.exports = {
  test,
};

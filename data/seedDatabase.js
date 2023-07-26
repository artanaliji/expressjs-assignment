const logger = require("../config/logger");

async function seedDatabase() {
  try {
    const users = [
      {
        name: "Hunter Lawson",
        email: "non@hotmail.org",
        websiteUrl: "https://whatsapp.com",
      },
      {
        name: "Callie Meadows",
        email: "neque@protonmail.net",
        websiteUrl: "http://reddit.com",
      },
      {
        name: "Erich Stokes",
        email: "ut@protonmail.net",
        websiteUrl: "https://youtube.com",
      },
      {
        name: "Serina Lawrence",
        email: "nibh.enim@outlook.couk",
        websiteUrl: "http://facebook.com",
      },
      {
        name: "Barrett Rosario",
        email: "orci@aol.couk",
        websiteUrl: "http://zoom.us",
      },
      {
        name: "Adrienne Riggs",
        email: "aptent.taciti@yahoo.net",
        websiteUrl: "http://instagram.com",
      },
      {
        name: "Davis Hobbs",
        email: "non.feugiat@yahoo.net",
        websiteUrl: "http://twitter.com",
      },
      {
        name: "Patience Kramer",
        email: "vivamus.nibh@aol.org",
        websiteUrl: "http://twitter.com",
      },
      {
        name: "Forrest Strickland",
        email: "lectus.pede.ultrices@aol.net",
        websiteUrl: "http://google.com",
      },
      {
        name: "Hayes Callahan",
        email: "lectus.sit@outlook.org",
        websiteUrl: "http://reddit.com",
      },
      {
        name: "Leo Watkins",
        email: "mi.eleifend@icloud.couk",
        websiteUrl: "https://bbc.co.uk",
      },
      {
        name: "Aileen Mendoza",
        email: "imperdiet.dictum.magna@google.ca",
        websiteUrl: "http://walmart.com",
      },
      {
        name: "Wing Robertson",
        email: "integer.aliquam.adipiscing@yahoo.couk",
        websiteUrl: "https://pinterest.com",
      },
      {
        name: "Elton Cabrera",
        email: "mauris.erat@google.org",
        websiteUrl: "http://google.com",
      },
      {
        name: "Sheila Young",
        email: "dolor.sit.amet@aol.ca",
        websiteUrl: "https://yahoo.com",
      },

      {
        name: "Quon Lowe",
        email: "posuere.enim.nisl@protonmail.com",
        websiteUrl: "https://twitter.com",
      },
      {
        name: "Martin Vaughan",
        email: "ac@aol.couk",
        websiteUrl: "https://ebay.com",
      },
      {
        name: "Jared Monroe",
        email: "ut.dolor@aol.org",
        websiteUrl: "https://pinterest.com",
      },
      {
        name: "Ian Browning",
        email: "enim.sed@icloud.edu",
        websiteUrl: "https://instagram.com",
      },
      {
        name: "Julie Cervantes",
        email: "nec.imperdiet.nec@hotmail.edu",
        websiteUrl: "http://yahoo.com",
      },
    ];
    const User = require("../models/user");
    await User.bulkCreate(users);
    logger.info("Mock users created successfully");
  } catch (err) {
    logger.error("Something went wrong while seeding the database", err);
  }
}

module.exports = seedDatabase;

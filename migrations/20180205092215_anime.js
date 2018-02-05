exports.up = function (knex, Promise) {
  return knex.schema.createTable("anime", table => {
    table.increments("id").primary();
    table.text("name");
    table.string("video");
    table.text("summary");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("anime");
};

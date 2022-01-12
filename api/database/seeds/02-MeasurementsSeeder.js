exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("measurements")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("measurements").insert([
        {
          id: 1,
          weight: 73,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          weight: 76,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          weight: 29,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    });
};

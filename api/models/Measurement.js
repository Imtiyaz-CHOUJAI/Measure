import BaseModel from "./BaseModel";
import User from "./User";

class Measurement extends BaseModel {
  static get tableName() {
    return "measurements";
  }

  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "measurements.user_id",
          to: "users.id",
        },
      },
    };
  }
}

export default Measurement;

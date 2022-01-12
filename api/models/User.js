import BaseModel from "./BaseModel";
import Measurement from "./Measurement";

class User extends BaseModel {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      measurements: {
        relation: BaseModel.HasManyRelation,
        modelClass: Measurement,
        join: {
          from: "users.id",
          to: "measurements.user_id",
        },
      },
    };
  }
}

export default User;

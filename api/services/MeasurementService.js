import Measurement from "../models/Measurement";
import UserService from "./UserService";

class MeasurementService {
  static async find(id) {
    return await Measurement.query().findById(id);
  }

  static async list(user = 1) {
    return await Measurement.query()
      .where("user_id", "=", user)
      .withGraphFetched("user");
  }

  static async store({ weight, userId }) {
    const user = await UserService.find(userId);

    if (!user) {
      throw new Error("User not found!");
    }

    return await user.$relatedQuery("measurements").insert({ weight });
  }

  static async update(id, { weight }) {
    return await Measurement.query()
      .patchAndFetchById(id, { weight })
      .withGraphFetched("user");
  }

  static async delete(id) {
    return await Measurement.query().deleteById(id);
  }
}

export default MeasurementService;

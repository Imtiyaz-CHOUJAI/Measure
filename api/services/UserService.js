import User from "../models/User";

class UserService {
  static async find(id) {
    return await User.query().findById(id);
  }
}

export default UserService;

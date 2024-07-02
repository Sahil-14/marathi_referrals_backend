const UserModel = require('../models/user.model');
class UserService {
  async findUser(filter) {
    const user = await User.findOne({ where: { id } });
    if (!user)
    {
      throw new NotFoundError();
    }
    return user;
  }

  async createUser(data) {
    const user = await UserModel.create(data);
    return user;
  }
}

module.exports = new UserService();
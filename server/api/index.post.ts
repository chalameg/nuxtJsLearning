import { employees } from "../dbModels";
interface IRequestBody {
  email: string;
  password: string;
  name: string;
}
export default defineEventHandler(async (event) => {
  console.log("POST /api/employees");
  const { email, password, name } = await useBody<IRequestBody>(event);
  try {
    const userData = await employees.findOne({
      email,
    });
    if (userData) {
      console.log(`User with email ${email} already exists`);
      event.res.statusCode = 409;
      return {
        code: "USER_EXISTS",
        message: "User with given email already exists.",
      };
    } else {
      console.log("Create user");
      const newUserData = await employees.create({
        email,
        password,
        name,
      });
      return {
        id: newUserData._id,
        name: newUserData.name,
      };
    }
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
    };
  }
});
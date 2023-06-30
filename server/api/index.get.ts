import { employees } from "../dbModels";

export default defineEventHandler(async (event) => {
  console.log("GET /api/employees");
  try {
    console.log("Find employees");
    const employeesData = await employees.find();
    return employeesData.map((user) => ({
      id: user._id,
      name: user.name,
    }));
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
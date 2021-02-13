export const addTask = async (id: String, description: String) => {
  console.log("description", description);
  console.log("id", id);
  try {
    // let id = "admin";
    // let description = "its true";
    // console.log("description", description);
    // console.log("id", id);
    return { id, description };
  } catch (err) {
    console.error(err);
  }
};

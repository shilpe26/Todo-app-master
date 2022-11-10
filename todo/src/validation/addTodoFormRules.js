export const addTodoFormRules = (data) => {
  const error = {};
  const { title, description } = data;
  if (!title) {
    error.title = "Title is required";
  }
  if (!description) {
    error.description = "Description is required";
  }
  if (title.length < 3) {
    error.title = "Title should be 3 characters long!";
  }
  if (description.length < 10) {
    error.description = "Discription should be 10 characters long!";
  }
  return error;
};

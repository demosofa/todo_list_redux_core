/**@type {import("redux").Middleware} */
const todoMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const todo = JSON.stringify(store.getState().todo);
  localStorage.setItem("todo", todo);
  return result;
};
export default todoMiddleware;

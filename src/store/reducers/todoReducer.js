import {
  CHECKTODO,
  CREATETODO,
  DELETETODO,
  UPDATETODO,
} from "../constants/todoConstant";

/**@typedef {{id: number, content: string, isChecked: boolean}[]} Todo */

/**@type {Todo} */
const initialState = JSON.parse(localStorage.getItem("todo"));

/**@type {import('redux').Reducer<Todo>} */
export default function todoReducer(state = initialState, { payload, type }) {
  const notValid = (value) => {
    return !value || state.findIndex((item) => item.content === value) !== -1;
  };
  switch (type) {
    case CREATETODO:
      if (notValid(payload)) return state;
      let id = 0;
      do id = Math.random().toFixed(3);
      while (state.findIndex((item) => item.id === id) !== -1);
      return [...state, { id, content: payload, isChecked: false }];
    case CHECKTODO:
      let index = state.findIndex((item) => item.id == payload);
      const target = state[index];
      target.isChecked = !target.isChecked;
      return [...state];
    case UPDATETODO:
      if (notValid(payload.content)) return state;
      return state.map((item) => {
        if (item.id == payload.id) item.content = payload.content;
        return item;
      });
    case DELETETODO:
      return state.filter((item) => item.id != payload);
    default:
      return state;
  }
}

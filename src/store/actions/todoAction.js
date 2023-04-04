import {
  CREATETODO,
  UPDATETODO,
  DELETETODO,
  CHECKTODO,
} from "../constants/todoConstant";

export const createTodo = (payload) => {
  return {
    type: CREATETODO,
    payload,
  };
};

export const checkTodo = (payload) => {
  return {
    type: CHECKTODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATETODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETETODO,
    payload,
  };
};

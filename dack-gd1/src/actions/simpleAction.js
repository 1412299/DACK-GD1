import { UPDATE_USER } from "./actionsType";
export const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};

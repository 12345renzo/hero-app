import authReducer from "../../../src/auth/context/authReducer";
import types from "../../../src/auth/types/types";


describe("authReducer", () => {
  const initialState = {
    logged: false,
    user: null,
  };

  test("should perform login correctly", () => {
    const action = {
      type: types.login,
      payload: { id: "123", name: "John" },
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({
      logged: true,
      user: { id: "123", name: "John" },
    });
  });

  test("should perform logout correctly", () => {
    const initialStateLoggedIn = {
      logged: true,
      user: { id: "123", name: "John" },
    };

    const action = { type: types.logout };

    const state = authReducer(initialStateLoggedIn, action);

    expect(state).toEqual({
      logged: false,
    });
  });

  test("should return default state if action type is not recognized", () => {
    const action = { type: "UNKNOWN_ACTION" };
    const state = authReducer(initialState, action);

    expect(state).toBeUndefined();
  });
});

import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { createStateSyncMiddleware } from "redux-state-sync";

import config from "config";
import rootReducer from "./reducers";

function createMiddlewares({ isServer }) {
  let middlewares = [thunkMiddleware];

  if (config.env === "development" && typeof window !== "undefined") {
    middlewares.push(
      createLogger({
        level: "info",
        collapsed: true
      })
    );
  }

  if (!isServer) {
    middlewares.push(
      createStateSyncMiddleware({
        broadcastChannelOption: {
          type:
            typeof BroadcastChannel !== "undefined" ? "native" : "localstorage"
        }
      })
    );
    console.warn(
      `Use sync middleware ${
        typeof BroadcastChannel !== "undefined" ? "native" : "localstorage"
      }`
    );
  }

  return middlewares;
}

export default (initialState = {}, context) => {
  let { isServer } = context;
  let middlewares = createMiddlewares({ isServer });
  let state = { ...initialState };

  const store = createStore(
    rootReducer,
    state,
    compose(applyMiddleware(...middlewares))
  );

  return store;
};

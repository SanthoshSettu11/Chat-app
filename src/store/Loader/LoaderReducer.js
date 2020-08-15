import { START_LOADER, STOP_LOADER } from "./LoaderTypes";

const initialState = {
  isLoading: false,
  loaderCount: 0
};

const LoaderReduer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADER:
      return {
        ...state,
        isLoading: true,
        loaderCount: state.loaderCount + 1
      };
    case STOP_LOADER:
      let totalLoaderCount = state.loaderCount - 1;
      return {
        ...state,
        isLoading: totalLoaderCount === 0 ? false : true,
        loaderCount: totalLoaderCount
      };
    default:
      return state;
  }
};

export default LoaderReduer;

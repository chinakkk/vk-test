import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "src/app/reducers/store";

interface IRouterSlice {
  activePanel: string;
}

const initialState: IRouterSlice = {
  activePanel: "firstExercise",
};

const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {
    setActivePanel(data, action: PayloadAction<string>) {
      data.activePanel = action.payload;
    },
  },
});

export const { setActivePanel } = routerSlice.actions;
export default routerSlice.reducer;

export const useRouterState = () =>
  useSelector((state: RootState) => state.routerSlice);

export const useRouterActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(routerSlice.actions, dispatch);
};

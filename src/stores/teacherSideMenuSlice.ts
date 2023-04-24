import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Home",
      pathname: "/teacher/dashboard",
      title: "Dashboard",
    },
    // {
    //   icon: "BookOpen",
    //   pathname: "/parent/classes",
    //   title: "Classes",
    // },
    // {
    //   icon: "Book",
    //   pathname: "/parent/programmes",
    //   title: "Programmes",
    // },
    // {
    //   icon: "Library",
    //   pathname: "/parent/courses",
    //   title: "Courses",
    // },


  ],
};

export const teacherMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const teacherSideMenu = (state: RootState) => state.teacherSideMenu.menu;

export default teacherMenuSlice.reducer;

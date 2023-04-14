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
      pathname: "/portal/dashboard",
      title: "Dashboard",
    },
    {
      icon: "Users",
      pathname: "/portal/students",
      title: "Students",
    },
    {
      icon: "BookOpen",
      pathname: "/portal/classes",
      title: "Classes",
    },
    {
      icon: "Book",
      pathname: "/portal/programmes",
      title: "Programmes",
    },
    {
      icon: "Library",
      pathname: "/portal/courses",
      title: "Courses",
    },
    {
      icon: "Users",
      title: "Staff",
      subMenu: [
        {
          icon: "Activity",
          pathname: "/portal/staff/teachers",
          title: "Teachers",
          ignore: true,
        },
        {
          icon: "Activity",
          pathname: "/portal/staff/non-teaching-staff",
          title: "Non-Teaching Staff",
          ignore: true,
        }
      ],
    },


  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;

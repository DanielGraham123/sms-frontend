import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Dashboard/Students";
import Admission from "../pages/portal/Admission";
import Parent from "../pages/portal/Parent";
import Staff from "../pages/portal/StaffLogin";
import Student from "../pages/portal/Student";
import Register from "../pages/portal/Register";
import Login from "../pages/portal/Login";
import Confirm from "../pages/portal/Register/confirm"
import Grades from "../pages/Dashboard/Grades";
import Courses from "../pages/Dashboard/Courses";
import AddCourse from "../pages/Dashboard/Courses/AddCourse";
import Programmes from "../pages/Dashboard/Programmes";
import ErrorPage from "../pages/ErrorPage";
import Teachers from "../pages/Dashboard/Teachers";

function Router() {
  const routes = [
    // Dashboard Portal routes
    {
      path: "/portal/",
      element: <SideMenu />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "students",
          element: <Students />,
        },
        {
          path: "admission",
          element: <Admission />,
        },
        {
          path: "classes",
          element: <Grades />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "courses/add",
          name: "Add Course",
          element: <AddCourse />,
        },
        {
          path: "programmes",
          element: <Programmes />,
        },
        {
          path: "staff",
          children: [
            {
              path: "teachers",
              element: <Teachers />,
            },
            {
              path: "non-teaching-staff",
              element: <Teachers />,
            }
          ]
        }
      ],
    },

    // Authentication portal routes
    {
      path: "/parent",
      element: <Parent />,
    },
    {
      path: "/staff/login",
      element: <Staff />,
    },
    {
      path: "/student",
      element: <Student />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/confirm",
      element: <Confirm />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },

  ];

  return useRoutes(routes);
}

export default Router;

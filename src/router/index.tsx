import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import ParentLayout from "../layouts/ParentLayout";
import StudentLayout from "../layouts/StudentLayout";
import HomeLayout from "../layouts/HomeLayout";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Dashboard/Students";
import Admission from "../pages/portal/Admission";
import Parent from "../pages/portal/Parent";
import StaffLogin from "../pages/portal/StaffLogin";
import Student from "../pages/portal/Student";
import Register from "../pages/portal/Register";
import Login from "../pages/portal/Login";
import Confirm from "../pages/portal/Register/confirm"
import Grades from "../pages/Dashboard/Grades";
import Courses from "../pages/Dashboard/Courses";
import AddCourse from "../pages/Dashboard/Courses/AddCourse";
import EditCourse from "../pages/Dashboard/Courses/EditCourse";
import Programmes from "../pages/Dashboard/Programmes";
import ErrorPage from "../pages/ErrorPage";
import Teachers from "../pages/Dashboard/Teachers";
import Home from "../pages/Home";
import TeacherDashboard from "../pages/TeacherDashboard";
import ParentDashboard from "../pages/ParentDashboard";
import StudentDashboard from "../pages/StudentDashboard"
import AdminProfile from "../pages/Dashboard/Profile"

function Router() {
  const routes = [
    // Dashboard Portal routes
    {
      path: "/portal/",
      element: <SideMenu />,
      children: [
        {
          path: "profile",
          element: <AdminProfile />,
        },
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
          path: "courses/edit/:id",
          name: "Edit Course",
          element: <EditCourse />,
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

    // Teacher Dashboard routes
    {
      path: "/teacher/",
      element: <SideMenu />,
      children: [
        {
          path: "dashboard",
          element: <TeacherDashboard />,
        },
      ]
    },

    // Parent Dashboard routes
    {
      path: "/parent/",
      element: <ParentLayout />,
      children: [
        {
          path: "dashboard",
          element: <ParentDashboard />,
        },
      ]
    },

    // Student Dashboard routes
    {
      path: "/student/",
      element: <StudentLayout />,
      children: [
        {
          path: "dashboard",
          element: <StudentDashboard />,
        },
      ]
    },

    // Home layout routes
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/staff/login",
          element: <StaffLogin />,
        },
      ],
    },

    // Authentication portal routes
    {
      path: "/parent",
      element: <Parent />,
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
      path: "*",
      element: <ErrorPage />,
    },

  ];

  return useRoutes(routes);
}

export default Router;

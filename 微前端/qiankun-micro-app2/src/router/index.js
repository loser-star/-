import HomeView from "../views/home";
import LoginView from "../views/login";
import StatisticsView from "../views/statistics";
import ReservationView from "../views/reservation";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/statistics",
        name: "statistics",
        component: StatisticsView,
      },
      {
        path: "/reservation",
        name: "reservation",
        component: ReservationView,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

export default routes;

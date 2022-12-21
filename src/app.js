import { Router } from "@vaadin/router";

import "./components/pages/hu-home-page";
import "./components/pages/hu-about-page";
import "./components/pages/hu-login-page";

const app = document.querySelector("#app");
const router = new Router(app);
router.setRoutes([
    {
        path: "/", component: "hu-page", children: [
            { path: "", component: "hu-home-page" },
            { path: "about", component: "hu-about-page" },
        ]
    },
    { path: "/login", component: "hu-login-page" },

]);

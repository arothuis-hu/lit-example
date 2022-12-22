import { Router } from "@vaadin/router";

import "./components/layouts/hu-page";
import "./components/pages/hu-home-page";
import "./components/pages/hu-notes-page";
import "./components/pages/hu-login-page";

const app = document.querySelector("#app");

const router = new Router(app);
router.setRoutes([
    {
        path: "/", component: "hu-page", children: [
            { path: "", component: "hu-home-page" },
            { path: "notes", component: "hu-notes-page" },
        ]
    },
    { path: "/login", component: "hu-login-page" },
]);

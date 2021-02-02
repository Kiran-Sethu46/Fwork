import React from "react";

const formsRoutes = [
  {
    path: "/forms/basic",
    component: React.lazy(() => import("./BasicForm")),
  },
];

export default formsRoutes;

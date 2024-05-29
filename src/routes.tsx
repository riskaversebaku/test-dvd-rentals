import {createBrowserRouter} from "react-router-dom";
import {RentalsPage} from "./pages/RentalsPage";
import React, {Suspense} from "react";
import {FullPageSpinner} from "./components/FullPageSpinner";
const NewRentalPage = React.lazy(() => import("./pages/NewRentalPage"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RentalsPage />
    },
    {
        path: "/new-rental",
        element: <Suspense fallback={<FullPageSpinner />}><NewRentalPage /></Suspense>
    }
]);
import {  Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import React from "react";

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};


import React from 'react'
import { Badge, Image, Space, Typography } from "antd"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from "../../Pages/Dashboard"
import { Orders } from "../../Pages/Orders"
import { Inventory } from "../../Pages/Inventory"
import { Customers } from "../../Pages/Customers"
export const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
        </Routes>

    )
}

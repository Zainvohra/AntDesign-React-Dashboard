import React from 'react'
import { useState, useEffect } from 'react'
import { Menu } from "antd"
import { ShoppingCartOutlined, UserOutlined, ShopOutlined, AppstoreOutlined } from "@ant-design/icons"
import { useLocation, useNavigate } from 'react-router-dom'
export const SideMenu = () => {
    const location = useLocation()
    const [selectedKeys, setselectedKeys] = useState('/')
    useEffect(() => {
        const pathName = location.pathname
        setselectedKeys(pathName)

    }, [location.pathname])




    const navigate = useNavigate();
    return (
        <div className='SideMenu'>

            <Menu
                className='SideMenuVertical'
                mode='vertical'
                onClick={(item) => {
                    //item.key
                    navigate(item.key);

                }}
                selectedKeys={[selectedKeys]}
                items={[
                    {
                        label: "Dashboard",
                        icon: <AppstoreOutlined />,
                        key: "/"
                    },
                    {
                        label: "Inventory",
                        icon: <ShopOutlined />,
                        key: "/inventory"
                    },
                    {
                        label: "Orders",
                        key: "/orders",
                        icon: <ShoppingCartOutlined />,
                    },
                    {
                        label: "Customers",
                        key: "/customers",
                        icon: <UserOutlined />,

                    }

                ]}>
            </Menu>
        </div>
    )
}

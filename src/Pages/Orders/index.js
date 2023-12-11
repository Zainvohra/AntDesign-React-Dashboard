// import Typography from 'antd/es/typography/Typography'
import React from 'react'
import { getInventory } from '../../API'
import { useState, useEffect } from 'react'
import { Badge, Image, Card, Space, Statistic, Typography, Table, Avatar, Rate } from "antd"
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarCircleOutlined, BellFilled, MailOutlined } from "@ant-design/icons"
import { getOrders } from '../../API'


export const Orders = () => {
    const [loading, setloading] = useState(false)
    const [dataSource, setdataSource] = useState([])

    useEffect(() => {
        setloading(true)
        getOrders().then(res => {
            // console.log(res.products)
            setdataSource(res.products)
            setloading(false)

        })
    }, [])
    //     getOrders()
    //         .then((res) => {
    //             console.log("Orders ", res)
    //             setdataSource(res.products.splice(0, 5))
    //             setloading(false)
    //         })


    // 

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <Table
                columns={[

                    {
                        title: "Title",
                        dataIndex: "title"
                    },

                    {
                        title: "Price",
                        dataIndex: "price",
                        render: (value) => <span>${value}</span>
                    },


                    {
                        title: "DiscountedPrice",
                        dataIndex: "discountedPrice",
                        render: (value) => <span>${value}</span>
                    },
                    {
                        title: "Qauntity",
                        dataIndex: "quantity"
                    },
                    {
                        title: "Total",
                        dataIndex: "total",
                        render: (value) => <span>${value}</span>
                    },

                ]}
                dataSource={dataSource}
                loading={loading}
                pagination={{
                    pageSize: 10
                }}
            ></Table>
        </Space>
    )
}

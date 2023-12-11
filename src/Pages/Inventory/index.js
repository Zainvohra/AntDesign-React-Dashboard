// import Typography from 'antd/es/typography/Typography'
import React from 'react'
import { getInventory } from '../../API'
import { useState, useEffect } from 'react'
import { Badge, Image, Card, Space, Statistic, Typography, Table, Avatar, Rate } from "antd"
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarCircleOutlined, BellFilled, MailOutlined } from "@ant-design/icons"
import { getOrders } from '../../API'


export const Inventory = () => {
    const [loading, setloading] = useState(false)
    const [dataSource, setdataSource] = useState([])

    useEffect(() => {
        setloading(true)
        getInventory().then(res => {
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
                        title: "Thumbnail",
                        dataIndex: "thumbnail",
                        render: (link) => {
                            return <Avatar src={link} />
                        }
                    },
                    {
                        title: "Title",
                        dataIndex: "title"
                    },
                    {
                        title: "Stock",
                        dataIndex: "stock"
                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                        render: (value) => <span>${value}</span>
                    },
                    {
                        title: "Rating",
                        dataIndex: "rating",
                        render: (rating) => {
                            return <Rate value={rating} allowHalf disabled />
                        }
                    },
                    {
                        title: "Brand",
                        dataIndex: "brand"
                    },
                    {
                        title: "Category",
                        dataIndex: "category"
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

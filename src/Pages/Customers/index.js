// import Typography from 'antd/es/typography/Typography'
import React from 'react'
import { getCustomers, getInventory } from '../../API'
import { useState, useEffect } from 'react'
import { Space, Typography, Table, Avatar, } from "antd"



export const Customers = () => {
    const [loading, setloading] = useState(false)
    const [dataSource, setdataSource] = useState([])

    useEffect(() => {
        setloading(true)
        getCustomers().then(res => {
            // console.log(res.products)
            setdataSource(res.users)
            setloading(false)

        })
    }, [])


    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <Table
                columns={[
                    {
                        title: "Photo",
                        dataIndex: "image",
                        render: (link) => {
                            return <Avatar src={link} />
                        }
                    },
                    {
                        title: "Firstname",
                        dataIndex: "firstName"
                    },
                    {
                        title: "Lastname",
                        dataIndex: "lastName"
                    },
                    {
                        title: "Phone No.",
                        dataIndex: "phone"
                    },
                    {
                        title: "Email",
                        dataIndex: "email"
                    },
                    {
                        title: "Address",
                        dataIndex: "address",
                        render: (address) => {
                            return <span>{address.address} , {address.city}</span>
                        }
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

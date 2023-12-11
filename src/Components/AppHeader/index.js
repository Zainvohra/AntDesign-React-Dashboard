import React from 'react'
import { List, Badge, Drawer, Image, Space, Typography } from "antd"
import { BellFilled, MailOutlined } from "@ant-design/icons"
import { getComments, getOrders } from '../../API'
import { useState, useEffect } from 'react'
export const AppHeader = () => {
    const [Comments, setComments] = useState([])
    const [Orders, setOrders] = useState([])
    const [CommentsOpen, setCommentsOpen] = useState(false)
    const [notifiacationsOpen, setnotificationsOpen] = useState(false)
    useEffect(() => {
        getComments().then((res) => {
            setComments(res.comments)
        })
        getOrders().then((res) => {
            setOrders(res.products)
        })



    }, [])




    return (
        <div className='AppHeader'>
            <Image src=""></Image>
            <Typography.Title>Dashboard</Typography.Title>
            <Space>
                <Badge count={Comments.length} dot>
                    <MailOutlined style={{ fontSize: 24 }} onClick={() => {
                        setCommentsOpen(true)
                    }} />
                </Badge>
                <Badge count={Orders.length}>
                    <BellFilled style={{ fontSize: 24 }} onClick={() => {
                        setnotificationsOpen(true)
                    }} />
                </Badge>
            </Space>
            <Drawer
                title="Comments"
                open={CommentsOpen}
                onClose={() => {
                    setCommentsOpen(false)
                }}
                maskClosable
            >
                {/* showing comments in top corner */}
                <List dataSource={Comments} renderItem={(item) => {
                    return <List.Item>{item.body}</List.Item>
                }}></List>
            </Drawer>
            <Drawer
                title="Notifications"
                open={notifiacationsOpen}
                onClose={() => {
                    setnotificationsOpen(false)
                }}
                maskClosable

            >
                {/* showing orders title */}
                <List dataSource={Orders} renderItem={(item) => {
                    return (
                        <List.Item><Typography.Paragraph strong>{item.title}</Typography.Paragraph>
                            ordered!
                        </List.Item>
                    )
                }}></List>
            </Drawer>
        </div>
    )
}

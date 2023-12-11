import React, { useState, useEffect } from 'react'
import { Badge, Image, Card, Avatar, Space, Statistic, Typography, Table } from "antd"
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarCircleOutlined, BellFilled, MailOutlined } from "@ant-design/icons"
import { getCustomers, getInventory, getOrders, getRevenue } from '../../API'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const Dashboard = () => {
    const [orders, setorders] = useState(0)
    const [inventory, setinventory] = useState(0)
    const [customers, setcustomers] = useState(0)
    const [revenue, setrevenue] = useState(0)

    useEffect(() => {
        getOrders().then((res) => {
            setorders(res.total);
            setrevenue(res.discountedTotal)
        })

        getInventory().then((res) => {
            setinventory(res.total)
        });
        getCustomers().then((res) => {
            setcustomers(res.total)
        })


    },)







    return (
        <div>
            <Space size={20} direction='vertical'>
                <Typography.Title level={4}>Dashboard</Typography.Title>
                <Space direction='horizontal'>
                    <DashboardCard
                        icon={<ShoppingCartOutlined style={{
                            color: "green",
                            backgroundColor: 'rgba(0,255,0,0.25',
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }} />}
                        title={"Orders"}
                        value={orders}
                    />
                    <DashboardCard
                        icon={<ShoppingOutlined style={{
                            color: "blue",
                            backgroundColor: 'rgba(0,0,255,0.25',
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }} />}
                        title={"Inventory"}
                        value={inventory}
                    />
                    <DashboardCard
                        icon={<UserOutlined style={{
                            color: "purple",
                            backgroundColor: 'rgba(0,255,255,0.25',
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }} />}
                        title={"Customers"}
                        value={customers}
                    />
                    <DashboardCard
                        icon={<DollarCircleOutlined style={{
                            color: "red",
                            backgroundColor: 'rgba(255,0,0,0.25',
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }} />}
                        title={"Revenue"}
                        value={revenue}
                    />
                </Space>
                <Space>
                    <RecentOrders />
                    <DashboardChart />
                </Space>
            </Space>
        </div>
    )
}

function DashboardCard({ icon, title, value }) {
    return (
        <Card style={{ width: 430, padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Space direction='horizontal' >
                {icon}
                <Statistic title={title} value={value} />

            </Space>
        </Card>
    )
}

function RecentOrders() {
    const [dataSource, setDataSource] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        getOrders()
            .then((res) => {
                console.log("Orders ", res)
                setDataSource(res.products.splice(0, 5))
                setloading(false)
            })




    }, [])

    return (
        <>
            <Typography.Text style={{ fontWeight: 'bold', display: 'block', textAlign: 'center' }}>Recent Orders</Typography.Text>

            <Table
                columns={[
                    {
                        title: "Title",
                        dataIndex: "title"
                    },
                    {
                        title: "Quantity",
                        dataIndex: "quantity"
                    },
                    {
                        title: "Price",
                        dataIndex: "discountedPrice"
                    },


                ]}
                loading={loading}
                dataSource={dataSource}
                pagination={false}

            ></Table>
        </>
    )
}

function DashboardChart() {
    const [revenueData, setrevenueData] = useState({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        getRevenue().then(res => {
            // Chart Data an Labels

            const labels = res.carts.map((cart) => {
                return `User-${cart.userId}`
            });
            const data = res.carts.map((cart) => {
                return cart.discountedTotal;
            })

            const dataSource = {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: '  rgba(255, 0, 0, 0.5)',
                    },

                ],
            };
            setrevenueData(dataSource)
        })
    }, [])

    // Chart Options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    }
    // Chart Options




    //Vertical Bar Chart component 
    return (
        <Card style={{ width: 1240, height: 600 }}>
            <Bar options={options} data={revenueData} />;
        </Card>

    )
}
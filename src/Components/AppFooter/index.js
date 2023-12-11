import Typography from 'antd/es/typography/Typography'
import React from 'react'

export const AppFooter = () => {
    return (
        <div className='AppFooter'>
            <Typography.Link href="tel:+123456789">+1234567</Typography.Link>
            <Typography.Link href="https://www.google.com/" target={"_blank"}>Privacy Policy</Typography.Link>
            <Typography.Link href="https://www.google.com/" target={"_blank"}>Terms of Use</Typography.Link>
        </div>
    )
}

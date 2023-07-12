import React from "react"

interface AlertProps {
    type: string //alert-success
    icon: React.ReactNode
    children: React.ReactNode
}

const Alert: React.FC<AlertProps> = ({ type, icon, children }) => {
    return (
        <div className={`alert ${type} w-96`}>
            { icon }
            <span>
                { children }
            </span>
        </div>
    )
}

export default Alert
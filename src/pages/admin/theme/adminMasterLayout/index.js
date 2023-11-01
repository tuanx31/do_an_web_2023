const AdminMasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            headeradmin
            {children}
            footer admin
        </div>
    )
}

export default AdminMasterLayout;
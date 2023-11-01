import AdminHeader from "../adminHeader";


const AdminMasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <AdminHeader />
            {children}
        </div>
    )
}

export default AdminMasterLayout;
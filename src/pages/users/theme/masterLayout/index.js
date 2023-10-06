import Footer from '../Footer';
import Header from '../Header';
const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />

        </div>
    )
}

export default MasterLayout;
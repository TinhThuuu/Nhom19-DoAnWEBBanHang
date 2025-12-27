import { memo } from 'react';
import Header from '../header';
import Footer from '../../../common/footer';
import { useLocation } from 'react-router-dom';
import { ROUTERS } from 'utils/router';

const MasterLayout = ({children,...props}) => {
    const location = useLocation();
    const isAuthPage = location.pathname.startsWith(`/${ROUTERS.USER.LOGIN}`) || location.pathname.startsWith(`/${ROUTERS.USER.REGISTER}`);

    return (
    <div {...props}>
    {!isAuthPage && <Header />}
    {children}
    {!isAuthPage && <Footer />}
    </div>
    );
};

export default memo(MasterLayout);
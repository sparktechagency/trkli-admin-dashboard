import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import MakeAdmin from '../pages/dashboard/MakeAdmin';
import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import TermsCondition from '../pages/dashboard/TermsCondition';
import FAQs from '../pages/dashboard/FAQs';
import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Profile from '../pages/dashboard/profile/Profile';
import Privacy from '../pages/dashboard/Privacy';
import TrackTrkli from '../pages/dashboard/TrackTrkli';
import TrackDetails from '../pages/dashboard/TrackDetails';
import SellingDetails from '../pages/dashboard/SellingDetails';
import OrderDetails from '../pages/dashboard/OrderDetails';
import ProductDetails from '../pages/dashboard/ProductDetails';
import About from '../pages/dashboard/About';
import AppSlider from '../pages/dashboard/AppSlider';
import Users from '../pages/dashboard/Users';
import UserDetails from '../pages/dashboard/UserDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'track-trkli', element: <TrackTrkli /> },
            { path: 'track-details', element: <TrackDetails /> },
            { path: 'order-details', element: <OrderDetails /> },
            { path: 'selling-details', element: <SellingDetails /> },
            { path: 'product-details', element: <ProductDetails /> },
            { path: 'users', element: <Users /> },
            { path: 'user-details', element: <UserDetails /> },
            { path: 'app-slider', element: <AppSlider /> },
            { path: 'make-admin', element: <MakeAdmin /> },
            { path: 'about', element: <About /> },
            { path: 'terms', element: <TermsCondition /> },
            { path: 'privacy', element: <Privacy /> },
            { path: 'faqs', element: <FAQs /> },
            { path: 'notification', element: <Notification /> },
            { path: 'profile', element: <Profile /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;

import { TSidebarItem } from './generateSidebarItems';
import {
    AiOutlineDollar,
    AiOutlineFileDone,
    AiOutlineFileSearch,
    AiOutlineProduct,
    AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { IoBarChartOutline, IoImagesOutline } from 'react-icons/io5';
import { TbLogout, TbMessage2Check } from 'react-icons/tb';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { BsExclamationOctagon, BsPersonGear } from 'react-icons/bs';

const sidebarItems: TSidebarItem[] = [
    {
        key: 'analytics',
        label: 'Analytics',
        path: '',
        icon: <IoBarChartOutline size={24} />,
    },
    {
        key: 'track-trkli',
        label: 'Track Trkli',
        path: 'track-trkli',
        icon: <AiOutlineFileSearch size={24} />,
    },
    {
        key: 'selling-details',
        label: 'Selling Details',
        path: 'selling-details',
        icon: <AiOutlineDollar size={24} />,
    },
    {
        key: 'product-details',
        label: 'Product Details',
        path: 'product-details',
        icon: <AiOutlineProduct size={24} />,
    },
    {
        key: 'users',
        label: 'App Users',
        path: 'users',
        icon: <TbMessage2Check size={24} />,
    },
    {
        key: 'add-admin',
        label: 'Admin Panel',
        path: 'make-admin',
        icon: <BsPersonGear size={24} />,
    },
    {
        key: 'app-slider',
        label: 'App Slider',
        path: 'app-slider',
        icon: <IoImagesOutline size={24} />,
    },
    // {
    //     key: 'reviews',
    //     label: 'Reviews',
    //     path: 'reviews',
    //     icon: <AiOutlineStar size={24} />,
    // },
    // {
    //     key: 'companies',
    //     label: 'Companies',
    //     path: 'companies',
    //     icon: <PiBuildingOffice size={24} />,
    // },
    // {
    //     key: 'why-choose',
    //     label: 'Why Choose',
    //     path: 'why-choose',
    //     icon: <BsExclamationOctagon size={24} />,
    // },
    // {
    //     key: 'transactions',
    //     label: 'Transactions',
    //     path: 'transactions',
    //     icon: <AiOutlineDollarCircle size={24} />,
    // },
    {
        key: 'about',
        label: 'About Us',
        path: 'about',
        icon: <IoIosInformationCircleOutline size={24} />,
    },
    {
        key: 'terms',
        label: 'Terms & Conditions',
        path: 'terms',
        icon: <AiOutlineFileDone size={24} />,
    },
    {
        key: 'privacy',
        label: 'privacy policy',
        path: 'privacy',
        icon: <RiAlarmWarningLine size={24} />,
    },
    {
        key: 'faqs',
        label: 'FAQs',
        path: 'faqs',
        icon: <AiOutlineQuestionCircle size={24} />,
    },
    {
        key: 'logout',
        label: 'Log Out',
        path: 'login',
        icon: <TbLogout size={24} />,
    },
];

export default sidebarItems;

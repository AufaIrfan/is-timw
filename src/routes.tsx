import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdReceipt,
} from 'react-icons/md';

// Admin Imports
// import MainDashboard from './pages/admin/default';
// import NFTMarketplace from './pages/admin/nft-marketplace';
// import Profile from './pages/admin/profile';
// import DataTables from './pages/admin/data-tables';
// import RTL from './pages/rtl/rtl-default';

// Auth Imports
// import SignInCentered from './pages/auth/sign-in';
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Purchase',
    layout: '/admin',
    path: '#',
    icon: <Icon as={MdReceipt} width="20px" height="20px" color="inherit" />,
    children: [
      {
        name: 'Purchase Request',
        layout: '/admin',
        path: '/purchase',
      },
      {
        name: 'Purchase Order',
        layout: '/admin',
        path: '/purchase',
      },
    ],
  },
  {
    name: 'Warehouse',
    layout: '/admin',
    path: '#',
    icon: <Icon as={MdReceipt} width="20px" height="20px" color="inherit" />,
    children: [
      {
        name: 'Stock Warehouse',
        layout: '/admin',
        path: '/default',
      },
      {
        name: 'Stock ?',
        layout: '/admin',
        path: '/default',
      },
    ],
  },
  {
    name: 'Supplier',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
  },
  {
    name: 'Report',
    layout: '/admin',
    path: '#',
    icon: <Icon as={MdReceipt} width="20px" height="20px" color="inherit" />,
    children: [
      {
        name: 'Purchase Report',
        layout: '/admin',
        path: '/data-tables',
      },
      {
        name: 'Warehouse Report',
        layout: '/admin',
        path: '/default',
      },
    ],
  },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/nft-marketplace',
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   secondary: true,
  // },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: '/data-tables',
  // },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  // },
];

export default routes;

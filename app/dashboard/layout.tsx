import SideNav from '@/app/ui/dashboard/sidenav';
//import { ArrowRightIcon } from '@heroicons/react/24/outline';
//import Link from 'next/link';
//import styles from '@/app/ui/home.module.css';
//import {lusitana} from '@/app/ui/fonts';
//import Image from 'next/image';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  );
}

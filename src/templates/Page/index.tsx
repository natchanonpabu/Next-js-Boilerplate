'use client';

import { Input, Layout } from 'antd';
import Image from 'next/image';

import LogoPantip from '@/public/assets/images/logo-pantip.webp';

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Header className="!bg-white !p-0">
        <div className="flex h-full items-center justify-between px-10">
          <div>
            <Image
              src={LogoPantip}
              alt="Pantip Logo"
              width={120}
              height={120}
              priority
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex">
            <Input placeholder="Search" className="!rounded-full shadow-md" />
          </div>

          <div className="flex font-semibold">
            <div className="hidden cursor-pointer rounded-full px-4 hover:bg-slate-200 sm:flex">
              ตั้งกระทู้
            </div>
            <div className="hidden cursor-pointer rounded-full px-4 hover:bg-slate-200 sm:flex">
              คอมมูนิตี้
            </div>
            <div className="cursor-pointer rounded-full px-4 hover:bg-slate-200">
              เข้าสู่ระบบ / สมัครสมาชิก
            </div>
          </div>
        </div>
      </Layout.Header>
      <Layout.Content className="bg-white">
        <div className="py-4">{props.children}</div>
      </Layout.Content>
    </Layout>
  );
};

export default PageLayout;

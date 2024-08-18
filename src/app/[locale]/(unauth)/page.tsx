import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import Announcements from '@/components/home/announcements';
import Highlights from '@/components/home/highlights';
import Rooms from '@/components/home/rooms';
import Topics from '@/components/home/topics';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <div className="flex flex-col gap-6">
      <Announcements />
      <Rooms />
      <Highlights />
      <Topics />
    </div>
  );
}

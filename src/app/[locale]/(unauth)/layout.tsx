import { unstable_setRequestLocale } from 'next-intl/server';

import PageLayout from '@/templates/Page';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return <PageLayout>{props.children}</PageLayout>;
}

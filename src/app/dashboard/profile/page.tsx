import { SearchParams } from 'nuqs/server';
import ProfileViewPage from '@/components/dashboard/profile/profile-view-page';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Profile'
};

export default async function Page({ searchParams }: pageProps) {
  return <ProfileViewPage />;
}

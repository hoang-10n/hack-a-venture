import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, User!</h1>
      <p>Coming soon...</p>
    </div>
  );
};

export default ProfilePage;

// import { SearchParams } from 'nuqs/server';
// import ProfileViewPage from '@/components/dashboard/profile/profile-view-page';

// type pageProps = {
//   searchParams: Promise<SearchParams>;
// };

// export const metadata = {
//   title: 'Dashboard : Profile'
// };

// export default async function Page({ searchParams }: pageProps) {
//   return <ProfileViewPage />;
// }

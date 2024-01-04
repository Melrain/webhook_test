import UserProfile from '@/components/UserProfile';

import React from 'react';

const page = async () => {
  return (
    <div className="flex items-center justify-start">
      <UserProfile />
    </div>
  );
};

export default page;

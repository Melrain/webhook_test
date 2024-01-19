import { connectToDatabase } from '@/lib/mongoose';
import React from 'react';

const page = async () => {
  await connectToDatabase();
  return <div>page</div>;
};

export default page;

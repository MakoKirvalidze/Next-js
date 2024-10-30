"use client";

import { useParams } from 'next/navigation';
import NotFound from '../../components/NotFound';

export default function UserDetailPage() {
  const params = useParams();
  const { id } = params;

  const userExists = id === '1'; 

  if (!userExists) {
    return <NotFound />;
  }

  return <div>User ID: {id}</div>;
}

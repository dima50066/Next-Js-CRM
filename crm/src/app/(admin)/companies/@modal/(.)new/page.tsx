'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';

export interface PageProps {
  params: { slug: string };
}

export default function Page({}: PageProps) {
  const router = useRouter();
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
}

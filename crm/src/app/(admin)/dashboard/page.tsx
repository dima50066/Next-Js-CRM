import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  title: string;
}
export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
}

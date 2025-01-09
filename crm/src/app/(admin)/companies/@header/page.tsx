import React from 'react';
import Header from '@/app/components/header';
export interface PageProps {
  id: string;
}
export default function Page({}: PageProps) {
  return <Header>Companies</Header>;
}

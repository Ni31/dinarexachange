import { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: "Home | Dinar Exchange Australia | Buy Iraqi Dinar & Zimbabwe Dollar",
  description: "Australia's most trusted currency exchange platform. Buy authentic Iraqi Dinar and Zimbabwe Dollar banknotes with certificates of authenticity and secure delivery.",
};

export default function Home() {
  return (
    <HomeClient />
  );
}

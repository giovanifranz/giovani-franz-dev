import Head from 'next/head';
import Header from '../components/molecules/Header';
import { Heading } from '../components/molecules/Heading';
import { Description } from '../components/organisms/Description';

export default function Home() {
  return (
    <>
      <Head>
        <title>Giovani Franz </title>
      </Head>
      <div className="h-screen text-white overflow-x-hidden">
        <Header />
        <Heading />
        <Description />
      </div>
    </>
  );
}

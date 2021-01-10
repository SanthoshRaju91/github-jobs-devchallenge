import Head from "next/head";
import Layout from "../components/Layout";
import JobsList from "../containers/JobsList/JobsList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Github Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JobsList />
    </Layout>
  );
}

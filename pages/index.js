import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Currently pursuing B.Tech in Computer Science and Engineering at BTKIT Dwarahat.
        Possess a natural inclination towards finding innovative solutions to problems, which has driven me to pursue a career in computer science.
        Have been exploring and experimenting with technology since my high school years.</p>
        <p> connect with me on <Link href='https://www.linkedin.com/in/milind-pandey0609/'> Linkdin</Link></p>
        
      </section>
    </Layout>
  );
}

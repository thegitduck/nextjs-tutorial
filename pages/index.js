import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Veniam qui proident aliquip laborum cillum reprehenderit sint sit
          velit quis nisi qui tempor. Ullamco proident cillum sint incididunt.
          Exercitation occaecat ipsum exercitation occaecat labore ex enim
          ullamco magna aute laboris ut. Sit dolor tempor enim voluptate quis
          officia pariatur. Elit cillum adipisicing enim excepteur in aute ipsum
          veniam et consequat velit anim.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

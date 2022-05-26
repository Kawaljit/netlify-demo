import Head from 'next/head';
import { attributes, react as HomeContent } from '../content/home.md';

function Home() {
  let { title, lists } = attributes;
  return (
    <>
      <style jsx>{`
        article {
          max-width: 1000px;
          width: 90%;
          margin: 0 auto;
          padding: 50px 0;
          font-family: Arial, Helvetica, sans-serif;
        }
        article h1 {
          font-size: 40px;
          margin: 20px 0;
          font-weight: bold;
        }
        article p {
          font-size: 20px;
          margin: 8px 0;
        }
        article ul {
          padding: 30px;
          border-radius: 10px;
          background: #f5f4f3;
        }
        article ul li {
          list-style: none;
          padding-bottom: 20px;
          border-bottom: 1px solid #dddddd;
        }
        article ul li:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }
      `}</style>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {lists.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default Home;

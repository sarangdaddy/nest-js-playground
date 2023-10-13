import Link from "next/link";

const IndexPage = ({ results }) => {
  const bookAllLists = results.results;

  return (
    <div className="container">
      <h2>The New York Times Best Seller Explorer</h2>
      <div className="lists-box">
        {bookAllLists.map((book, index) => (
          <Link href={`/list/${book.list_name}`} key={index}>
            <a className="hover">{book.display_name}</a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .container {
          width: 70%;
          margin: 0 auto;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
          padding: 8px;
        }
        h2 {
          font-size: 0.8em;
          margin: 20px;
          display: flex;
          justify-content: center;
        }

        .lists-box {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        .lists-box a {
          padding: 8px;
          border: 1px solid black;
          transition: all 0.3 ease-in-out;
          border-radius: 10px;
          font-size: 0.5em;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .lists-box a:hover {
          border: 2px solid skyblue;
          transform: translateY(-3px);
        }

        .lists-box a:active {
          transform: translateY(1px);
          border: 2px solid rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = async () => {
  const results = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();
  return {
    props: {
      results,
    },
  };
};

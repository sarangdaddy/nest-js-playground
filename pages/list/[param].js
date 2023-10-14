import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const DetailPage = () => {
  const router = useRouter();
  const listName = router.query.param;
  const [bookLists, setBookLists] = useState();

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      (async () => {
        const data = await (
          await fetch(
            `https://books-api.nomadcoders.workers.dev/list?name=${listName}`
          )
        ).json();
        setBookLists(data.results.books);
      })();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h2>{listName}</h2>
      <ul className="container">
        {!bookLists ? (
          <div>Loading...</div>
        ) : (
          bookLists.map((book, index) => (
            <li key={index} className="book-box">
              <img src={book.book_image}></img>
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.author}</div>
              <div className="btn-box">
                <Link href={`${book.amazon_product_url}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                  >
                    Buy now!
                  </a>
                </Link>
              </div>
            </li>
          ))
        )}
      </ul>
      <style jsx>{`
        h2 {
          font-size: 0.8em;
          margin: 20px;
          display: flex;
          justify-content: center;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 10px;
          padding: 30px;
          justify-items: center;
        }
        .book-box {
          width: 300px;
          display: flex;
          flex-direction: column;
          transition: background-color 0.3s ease, color 0.3s ease;
          border: 1px solid black;
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
          margin-bottom: 16px;
        }
        .book-box img {
          width: 100%;
          border: none;
        }
        .book-title {
          font-size: 0.6em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          padding: 0 10px;
        }
        .book-author {
          font-size: 0.5em;
          color: #0984e3;
          padding: 0 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }

        .btn-box {
          padding: 0 10px 10px 10px;
        }
        .btn-box a {
          padding: 8px;
          border: 1px solid black;
          transition: all 0.3 ease-in-out;
          border-radius: 10px;
          font-size: 0.5em;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .btn-box a:hover {
          border: 2px solid skyblue;
          transform: translateY(-3px);
        }

        .btn-box a:active {
          transform: translateY(1px);
          border: 2px solid rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default DetailPage;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const router = useRouter();
  const bookName = router.query.param;
  const [bookLists, setBookLists] = useState();

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      (async () => {
        const data = await (
          await fetch(
            `https://books-api.nomadcoders.workers.dev/list?name=${bookName}`
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
      <ul className="container">
        {!bookLists ? (
          <div>Loading...</div>
        ) : (
          bookLists.map((book, index) => (
            <li key={index} className="book-box">
              <img src={book.book_image}></img>
              <div className="book-title">{bookName}</div>
              <div className="book-author">{book.author}</div>
            </li>
          ))
        )}
      </ul>
      <style jsx>{`
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
          align-items: center;
          transition: background-color 0.3s ease, color 0.3s ease;
          cursor: pointer;
          border: 1px solid black;
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
          margin-bottom: 16px;
        }
        .book-box img {
          width: 100%;
          border: none;
        }
        .book-title {
          font-size: 0.7em;
        }
        .book-author {
          font-size: 0.5em;
        }
      `}</style>
    </>
  );
};

export default DetailPage;

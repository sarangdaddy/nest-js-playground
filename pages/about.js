const AboutPage = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <span>
        Welcome to the official explorer fot The New York Times Best Seller list
        explorer.
      </span>
      <br />
      <span>We hope you enjoy your stay!</span>
      <style jsx>{`
        .container {
          width: 70%;
          margin: 0 auto;
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
          padding: 8px;
        }

        h2 {
          font-size: 1em;
        }

        span {
          font-size: 0.5em;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

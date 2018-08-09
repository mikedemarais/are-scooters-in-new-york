import { Fragment } from 'react';

export default () => (
  <Fragment>
    <h1 className="title">
      <span className="scooter">
        <a className="link" href="//instagram.com/p/BlZRT8TnzNG">🛴</a>
      </span>
      <span>
        <a className="link" href="//instagram.com/p/BlBm5qHF0Gd">🗽</a>
        <a className="link" href="//instagram.com/p/BkZCX6sBYjn">❓</a>
      </span>
    </h1>

    <style jsx>{`
      .link {
        text-decoration: none;
      }
      .scooter {
        font-size: 84px;
      }
      .title {
        font-size: 96px;
        line-height: 1.15;
      }
    `}</style>
  </Fragment>
);

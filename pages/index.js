import { Fragment } from 'react';
import Head from '../components/head'
import Title from '../components/title'

const footerTextDict = [
  "Creators serving up hot takes at",
  "Check out the creators' sauci twetes",
  "A Cool Kids Capital Production:",
  "Meet your scooter overlords",
  "For more useless information follow",
  "If you would like to fund more projects that make the world a better place, please reach out to",
  "We are raising a fund called Cool Kids Capital, if you'd like to build and fund contrarian ideas hit up",
  "Did you expect flying cars? Write your grievances to",
  "Help us become product thot-fluencers",
];

const Page = ({ footerText }) => (
  <Fragment>
    <Head
      description="🛴🗽❓"
      ogImage="/static/ogImage.png"
      title="are scooters in new york yet?"
      url="arescootersinnewyorkyet.com"
    />

    <div className="container centered column">
      <header className="header centered section">are scooters in new york yet?</header>
      <div className="content centered column">
        <Title />
        <p className="answer animated rollIn">
          <a className="link" href="//instagram.com/p/BmBwWVZhdJA">👎</a>
        </p>
      </div>
      <footer className="footer centered section">
        <span>{footerTextDict[Math.floor(Math.random() * footerTextDict.length)]}</span>
        <span className="hide-mobile">&nbsp;</span>
        <a href="//twitter.com/hipcityreg">@hipcityreg</a>
        <span className="hide-mobile">&nbsp;</span>
        <a href="//twitter.com/mikedemarais">@mikedemarais</a>
      </footer>
    </div>

    <style jsx>{`
      .answer {
        animation-delay: 500ms;
        font-size: 200px;
        line-height: 1.15;
        margin: 0;
      }
      .centered {
        align-items: center;
        display: flex;
        justify-content: center;
      }
      .column {
        flex-direction: column;
      }
      .container {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
      .content {
        flex: 1;
      }
      .footer {
        flex-direction: column;
      }
      .header{
        border-bottom: 1px solid #ddd;
      }
      .hide-mobile {
        display: none;
      }
      .link {
        text-decoration: none;
      }
      .section {
        color: #aaa;
        flex: none;
        font-family: monospace;
        font-size: 16px;
        line-height: 1.5;
        padding: 16px 12px;
        text-align: center;
        width: 100%;
      }

      @media screen and (min-width: 480px) {
        .footer {
          flex-direction: row;
        }
        .hide-mobile {
          display: initial;
        }
      }
    `}</style>
  </Fragment>
);

Page.getInitialProps = () => ({
  footerText: footerTextDict[Math.floor(Math.random() * footerTextDict.length)]
})

export default Page;

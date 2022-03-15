import '../styles/globals.css';
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Link from "next/link";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top position-sticky" >
        <Link href="/">
          <a className="navbar-brand">
            <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="" />
            <span> CMS Midterm</span>
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/">
              <a className="nav-item nav-link">Home</a>
            </Link>
            <Link href="/post">
              <a className="nav-item nav-link">Post</a>
            </Link>
            <Link href="/category">
              <a className="nav-item nav-link">Category</a>
            </Link>
            <Link href="/author">
              <a className="nav-item nav-link">Author</a>
            </Link>
          </div>
        </div>
        {/* <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </nav>
      <Head>
          <title>Home Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

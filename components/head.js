import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Jerry Ye";
  const description =
    "This is the perfect Next.js theme that you should use instead of create-next-app.";
  const searchBarColor = "#ffffff"; // This is your Safari 15 Search Bar Color in Light Mode
  //const darkSearchBarColor = "#000000"; // This is your Safari 15 Search Bar Color in Dark Mode (optional)
  const keywords = "put some fun keywords here";
  const author = "Jerry Ye";
  const twitter = "@jerryzye1";
  const url = "http://localhost:3000"; // This is your og:url or domain (optional but recommended)
  const image = "/ogimage.png"; // This is your OpenGraph image
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta
        name="theme-color"
        content={searchBarColor}
        media="(prefers-color-scheme: light)"
      />
      {/* <meta name="theme-color" content={darkSearchBarColor} media="(prefers-color-scheme: dark)" /> */}
      {url ? <meta property="og:url" content={url} /> : ""}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      
      {/* Empty favicon to override default Next.js favicon */}
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>♠️</text></svg>" />
      
      {/* Add analytics here */}
      {children}
    </Head>
  );
}

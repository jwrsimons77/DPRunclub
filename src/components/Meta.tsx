import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Dark Peak Run Club | Trail Running in the Peak District</title>
      <meta
        name="description"
        content="Join the Dark Peak Run Club – a community of runners exploring the trails of the Peak District every week. All levels welcome. Coffee, mountains, good vibes."
      />
      <meta
        name="keywords"
        content="trail running, running club, Peak District, Glossop running, Dark Peak, run club, coffee and running"
      />
      <meta name="author" content="James Simons" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta
        property="og:title"
        content="Dark Peak Run Club | Trail Running in the Peak District"
      />
      <meta
        property="og:description"
        content="Run wild with us through the hills of the Peak District. Coffee and community included."
      />
      <meta property="og:image" content="/banner.jpg" />
      <meta property="og:url" content="https://darkpeakrunclub.netlify.app" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dark Peak Run Club" />
      <meta
        name="twitter:description"
        content="Join our retro-fresh trail running community."
      />
      <meta name="twitter:image" content="/banner.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

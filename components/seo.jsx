import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle == '' ? `Paguyuban Barudak Komputer` : `${pageTitle} - Paguyuban Barudak Komputer`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Paguyuban Barudak Komputer merupakan Unit Kegiatan Mahasiswa (UKM) dari Fakultas Ilmu Komputer Universitas Kuningan" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
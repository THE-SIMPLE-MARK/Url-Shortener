import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Personal URL shortener of SIMPLE MARK."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to my URL shortener!</h1>
        <hr />
        <p>This is just a URL shortner I made for myself for fun.</p>
        <footer
          style={{
            position: "fixed",
            bottom: "10px",
            width: "100%",
            textAlign: "center",
          }}
        >
          © 2023 SIMPLE MARK
        </footer>
      </main>
    </>
  )
}

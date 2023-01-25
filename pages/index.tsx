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
        <h1>Welcome to my url shortener!</h1>
        <hr />
        <p>This is just a URL shortner I made for myself for fun.</p>
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <footer>© 2023 SIMPLE MARK</footer>
        </div>
      </main>
    </>
  )
}

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// import Script from 'next/script'
import Layout from '../../components/layout'
import { Card, Text } from "@nextui-org/react";




export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post !!!</title>
        {/* <Link href="/posts/first-post" >Read</Link> */}
      </Head>

      <h1>First Post</h1>
      <h2>
        {/* <Link href="/">Back to home </Link> */}

      </h2>
      <Link href="/posts/first-post"> Read </Link>
      <p></p>
      <Link href="/posts/second-post"> Read2 </Link>
        <Card css={{ mw: "400px" }}>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>

    </Layout>

    

  )
}

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
// import Script from 'next/script'
import Layout from '../../components/layout'
import { Card, Text } from "@nextui-org/react";
import { Table } from "@nextui-org/react";




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
            

    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}>
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>ROLE</Table.Column>
        <Table.Column>STATUS</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

          </Card.Body>
        </Card>

    </Layout>

    

  )
}

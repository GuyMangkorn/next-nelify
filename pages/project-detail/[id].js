import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

function DetialId(props) {
  const project = props.project
  const id = props.id

  useEffect(() => {
    // window.open(`https://www.bangkokbastard.com/project-detail/${id}`, '_self')
  }, [])

  return (
    <div>
      <Head>
        <title>BANGKOK BASTARDS {`| ${project?.title?.th}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Bangkok Bastards, Bangkok Bastards, Bangkok Bastard, CHAT architects,สถาปัตยกรรมชั้นเลว,, สถาปัตยกรรมที่ไม่น่าพิสมัย,บ้านคนงานก่อสร้าง,สลัม,แผงลอยเป็นสถาปัตยกรรมชั้นต่ำ,บ้านคนงานก่อสร้าง"
        />
        <meta name="author" content="CHAT architects" />
        <meta
          name="description"
          content={project?.description?.th ? `${project?.description?.th}` : `Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city`}
        />
        <meta
          itemProp="name"
          content="สถาปัตยกรรมสารเลว กับมุมมองที่แตกต่างของคุณฉัตรพงษ์ ชื่นฤดีมล&nbsp;แห่ง CHAT Architects"
        />
        <meta
          itemProp="headline"
          content="สถาปัตยกรรมสารเลว กับมุมมองที่แตกต่างของคุณฉัตรพงษ์ ชื่นฤดีมล&nbsp;แห่ง CHAT Architects"
        />
        <meta
          itemProp="image"
          content={
            project?.shareimg || project?.thumbnail || `https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg`
          }
        />

        <meta
          property="og:title"
          content={`BANGKOK BASTARDS | ${project?.title?.th}`}
        />
        <meta
          property="og:url"
          content={props.id ? `https://www.bangkokbastards.com/project-detail/${id}` : "https://www.bangkokbastards.com"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={project?.description?.th ? `${project?.description?.th}` : `Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city`}
        />
        <meta
          property="og:image"
          content={
            project?.shareimg || project?.thumbnail || `https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg`
          }
        />
        <meta property="fb:app_id" content="5564660966946485"/>

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={`BANGKOK BASTARDS | ${project?.title?.th}`}
        />
        <meta
          name="twitter:description"
          content="Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city"
        />
        <meta
          name="twitter:image"
          content={project?.shareimg || project?.thumbnail || `https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg`}
        />
        {/* <meta name="twitter:site" content="@yourusername" /> */}
        {/* <meta name="twitter:creator" content="@yourusername" /> */}
      </Head>
      <div>
        <h1 style={{ textAlign: 'center' }}>{`BANGKOK BASTARDS | ${project?.title?.th}`}</h1>
        <Image
          alt={`BANGKOK BASTARDS | ${project?.title?.th}`}
          src={project?.shareimg || project?.thumbnail || `https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg`}
          layout='responsive'
          height={9}
          width={16}
        />
      </div>
    </div>
  )
}

export default DetialId

export async function getServerSideProps(context) {
  let requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${process.env.REACT_APP_API_URL}/project/${context.query.id}`, requestOptions)
  let body = null
  if (response.status === 200) {
    body = await response.json()
  }
  return {
    props: {
      project: body?.data || {},
      id: context.query.id
    },
  };
}

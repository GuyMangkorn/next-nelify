import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function Detail() {
  return (
    <div>
      <Head>
        <title>BANGKOK BASTARDS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Bangkok Bastards, Bangkok Bastard, CHAT architects,สถาปัตยกรรมชั้นเลว,, สถาปัตยกรรมที่ไม่น่าพิสมัย,บ้านคนงานก่อสร้าง,สลัม,แผงลอยเป็นสถาปัตยกรรมชั้นต่ำ,บ้านคนงานก่อสร้าง" />
        <meta name="author" content="CHAT architects" />
        <meta name="description" content="Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city." />
        <meta itemProp="name" content="สถาปัตยกรรมสารเลว กับมุมมองที่แตกต่างของคุณฉัตรพงษ์ ชื่นฤดีมล&nbsp;แห่ง CHAT Architects" />
        <meta itemProp="headline" content="สถาปัตยกรรมสารเลว กับมุมมองที่แตกต่างของคุณฉัตรพงษ์ ชื่นฤดีมล&nbsp;แห่ง CHAT Architects" />
        <meta itemProp="image" content="https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1660290435772-share.jpg" />

        <meta property="og:title" content="BANGKOK BASTARDS" />
        <meta property="og:description" content="Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city" />
        <meta property="og:url" content="https://www.bangkokbastards.com" />
        <meta property="og:image" content="https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="5564660966946485" />

        {/* <meta name="twitter:card" content="https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg" /> */}
        <meta name="twitter:title" content="BANGKOK BASTARDS" />
        <meta name="twitter:description" content="Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city" />
        {/* <meta name="twitter:site" content="@yourusername" /> */}
        <meta name="twitter:image" content="http://www.yoursite.com/yourimage.jpg" />
        {/* <meta name="twitter:creator" content="@yourusername" /> */}
      </Head>
      <div>
        <h1 style={{ textAlign: 'center' }}>BANGKOK BASTARDS</h1>
        <Image
          alt="BANGKOK BASTARDS"
          src="https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg"
          layout='responsive'
          height={9}
          width={16}
        />
      </div>
    </div>
  )
}

export default Detail
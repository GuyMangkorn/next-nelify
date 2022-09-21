import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'

function DetialId() {
  const router = useRouter()
  const { id } = router.query;
  const [project, setProject] = useState([]);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const { data } = await axios.get(`/api/project/${id}`)
          setProject(data?.data || {})
        } catch (error) {
          console.log(error);
        }
      })()
    }
  }, [id])

  return (
    <div>
      <Head>
        <title>BANGKOK BASTARDS {`| ${project?.title?.th}`}</title>
        <meta
          name="keywords"
          content="Bangkok Bastards, Bangkok Bastards, Bangkok Bastard, CHAT architects,สถาปัตยกรรมชั้นเลว,, สถาปัตยกรรมที่ไม่น่าพิสมัย,บ้านคนงานก่อสร้าง,สลัม,แผงลอยเป็นสถาปัตยกรรมชั้นต่ำ,บ้านคนงานก่อสร้าง"
        />
        <meta name="author" content="CHAT architects" />
        <meta
          name="description"
          content={`${project?.description?.th} ,Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city`}
        />
        <meta
          itemprop="name"
          content="สถาปัตยกรรมสารเลว กับมุมมองที่แตกต่างของคุณฉัตรพงษ์ ชื่นฤดีมล&nbsp;แห่ง CHAT Architects"
        />
        <meta
          itemprop="headline"
          content="สถาปัตยกรรมสารเลว กับมุมมองที่แตกต่างของคุณฉัตรพงษ์ ชื่นฤดีมล&nbsp;แห่ง CHAT Architects"
        />
        <meta
          itemprop="image"
          content={
            `https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg`
          }
        />
        <meta
          property="og:url"
          content="https://www.bangkokbastards.com"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`BANGKOK BASTARDS | ${project?.title?.th}`}
        />
        <meta
          property="og:description"
          content={`${project?.description?.th} ,Bangkok Bastards describes the research subjects of CHAT architects. From construction worker houses to forgotten shantytowns, from illegal pop-up markets to street vendor carts, from seedy massage parlors to underground sex motels, these vernacular Bastards are hybrids of questionable origins, scattered though out the city`}
        />
        <meta
          property="og:image"
          content={
            project.shareimg || `https://bangkokbastards.s3.ap-southeast-1.amazonaws.com/1663604036572-share.jpg`
          }
        />
      </Head>
    </div>
  )
}

export default DetialId
import {Breadcrumb, Divider, Layout, List, Typography} from 'antd';
import React from 'react';
import {gql, useQuery} from "@apollo/client";

interface Props {
  id?: number;
}

interface Post {
  title: string;
  content: string;
  category: {
    name: string;
  } | null;
  board: {
    name: string;
  };
  author: {
    nickname: string;
  };
  isModified: boolean;
  lastModified: string;
  issuedDate: string;
}

const GET_POST = gql`
  query ($id: Int!) {
    postById(id:$id) {
      id
      title
      content
      author {
        nickname
      }
      isAnonymous
      issuedDate
      lastModified
      likesCount
      didLike
      didDislike
      isModified
      isMine
      board {
          name
      }
      category {
          name
      }
    }
  }
`

export default function DetailView({ id }: Props) {
  const { loading, error, data } = useQuery<{postById: Post}, {id: number}>(GET_POST, {
    variables: { id: id ? id : 177 }
  });

  if (id === undefined) {
    return <div>없음</div>
  }
  if (loading) return <div>'Loading...'</div>
  if (error) return <div>`Error! ${error.message}`</div>
  const post = data?.postById

  if (post === undefined) {
    return <div>없음</div>
  }

  return (
    <Layout style={{width:"100wh"}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item> { post?.board.name } </Breadcrumb.Item>
        { post?.category && <Breadcrumb.Item> { post?.category?.name }</Breadcrumb.Item> }
        <Breadcrumb.Item> { post?.title }</Breadcrumb.Item>
      </Breadcrumb>
      <Typography.Title> { post?.title }, { id } </Typography.Title>
      <Typography.Title level={4} style={{margin: 0}}> { post?.author.nickname } / { (new Date(post.issuedDate)).toISOString().substring(0, 10) } </Typography.Title>

      <Divider />

      <div
        style={{minHeight: "50vh"}}
        dangerouslySetInnerHTML={{__html: post ? post.content : "없어요" }}
      />

      <Divider orientation="left"> 댓글 </Divider>

    </Layout>

  )
}
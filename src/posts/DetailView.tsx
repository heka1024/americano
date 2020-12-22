import {Divider, Layout, List, Typography }  from 'antd';
import React from 'react';

interface Props {
  post?: Post
}

interface Post {
  title: string;
  content: string;
}

export default function DetailView({ post }: Props) {
  return (
    <Layout style={{width:"100wh"}}>
      <Typography.Title> { post?.title }, 제목 </Typography.Title>
      <Divider />
      <div dangerouslySetInnerHTML={{__html: post ? post.content : "없어요" }} />
    </Layout>

  )
}
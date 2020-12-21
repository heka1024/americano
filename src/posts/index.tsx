import { Layout }  from 'antd';
import React from 'react';

import { gql, useQuery } from '@apollo/client';

interface PostThumbnail {
  title: string;
  tag: string;
  content: string;
}

const GET_POSTS = gql`
    query {
        posts {
            title
            tag
            content
        }
    }
`;

const { Content, Sider } = Layout

const style = { background: '#0092ff', padding: '8px 0' };

export default function Posts({}) {
  const { loading, error, data } = useQuery<{posts: Array<PostThumbnail>}>(GET_POSTS);

  if (loading) return <div>'Loading...'</div>
  if (error) return <div>`Error! ${error.message}`</div>

  return (
    <Layout style={{minHeight: "100vh", width: "400px"}}>
      <Sider style={styles.sider}>
        {
          data?.posts?.reduce((a, i) => a + i.title, "")
        }
        사이더
      </Sider>
      <Content>
        콘텐트
      </Content>
    </Layout>
  )
}

const styles = {
  sider: {
    backgroundColor: "transparent",
    border:"solid",
    borderWidth:"0px",
    borderRightWidth: "1px"
  }
}
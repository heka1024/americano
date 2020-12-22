import { Breadcrumb, Divider, Layout, List, Typography }  from 'antd';
import React from 'react';

import { gql, useQuery } from '@apollo/client';
import DetailView from "./DetailView";

interface PostThumbnail {
  id: number;
  title: string;
  tag: string;
  content: string;
  board: {
    name: string;
  };
  category: {
    name: string;
  } | null;
}

const GET_POSTS = gql`
    query {
        posts {
            title
            tag
            content
            board {
                name
            }
            category {
                name
            }
        }
    }
`;

const { Content, Sider } = Layout

export default function Posts({}) {
  const { loading, error, data } = useQuery<{posts: Array<PostThumbnail>}>(GET_POSTS);
  const [cur, setCur] = React.useState<PostThumbnail | undefined>(undefined)

  if (loading) return <div>'Loading...'</div>
  if (error) return <div>`Error! ${error.message}`</div>

  return (
    <Layout style={{minHeight: "100vh", width: "100wh"}}>
      <Sider style={styles.sider} width={200}>
        <List
          bordered={true}
          dataSource={data?.posts}
          renderItem={item => (
            <List.Item
              style={{cursor:"pointer"}}
              onClick={() => { setCur(item) }}
            >
              <Typography.Text mark>{item.tag}</Typography.Text> {item.title}
            </List.Item>
          )}
          />
      </Sider>
      <Content style={{ padding: '0 50px', overflow: "auto" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item> { cur?.board.name } </Breadcrumb.Item>
          { cur?.category && <Breadcrumb.Item> { cur?.category?.name }</Breadcrumb.Item> }
          <Breadcrumb.Item> { cur?.title }</Breadcrumb.Item>
        </Breadcrumb>
        <DetailView post={cur}/>
      </Content>
    </Layout>
  )
}

const styles = {
  sider: {
    backgroundColor: "transparent",
    border:"solid",
    borderWidth:"0px",
    borderRightWidth: "1px",
    borderColor: "gray",
    overflow: "auto",
    height: "100vh",
  }
}
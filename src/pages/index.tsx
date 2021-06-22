import React, { FC, useCallback, useMemo } from 'react';
import { List, Space } from 'antd';
import { MessageOutlined, StarOutlined } from '@ant-design/icons';
import Link from 'next/link';

/** styles */
import styles from '../styles/Home.module.css';
import { News } from '../api';

/** interfaces  */
import { INew } from '../@types/new';

/** helper */
import ToSeoURL from '../utils/helper/seoURL';

interface IProps {
    data: INew[];
}

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Home: FC<IProps> = ({ data }) => {
    const handleRenderContent = useMemo(() => {
        if (data)
            return (
                <List
                    style={{ width: '100%', height: '100%' }}
                    itemLayout="vertical"
                    size="large"
                    dataSource={data}
                    renderItem={(item: INew) => (
                        <List.Item
                            key={item.id}
                            actions={[
                                <IconText
                                    icon={StarOutlined}
                                    text={item.share_count}
                                    key="list-vertical-star-o"
                                />,
                                <IconText
                                    icon={MessageOutlined}
                                    text={item.comment_count}
                                    key="list-vertical-message"
                                />,
                            ]}
                            extra={<img width={272} alt="logo" src={item?.thumb?.default} />}
                        >
                            <List.Item.Meta
                                title={<Link href={`/${ToSeoURL(item.title)}`}>{item.title}</Link>}
                                description={item.summary}
                            />
                        </List.Item>
                    )}
                />
            );
    }, [data]);
    return <div className={styles.container}>{handleRenderContent}</div>;
};

export async function getStaticProps(context) {
    const res = await News.getNews({
        req: {
            uid: '3000.SSZzejyD0jSbZUcknXb2n3pSw_hOLqpSVu3vyCT53ivfbRklWKCDXY2IkwACH4AFBfFofOj5Guika_UX.1',
        },
    });
    if (!res) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data: res?.err != 1 ? res.data : [] }, // will be passed to the page component as props
    };
}

export default Home;

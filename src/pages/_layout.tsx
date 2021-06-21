import React from 'react';
import Head from 'next/head';
import { Breadcrumb, Layout } from 'antd';

/* ######### components ######## */
import { Header, Footer } from '../components';

const { Content } = Layout;

const MainLayout = ({ ...props }) => {
    return (
        <div className="wrapper">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Test</title>
                <meta name="description" content="description" />
                <meta name="generator" content="generator" />
                <meta name="copyright" content="© 2021 Microvn" />
                <meta name="keywords" content="" />
                <meta name="news_keywords" content="" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="OkLabel" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="" />
                <meta property="og:url" content="" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="315" />
                <link rel="canonical" href="" />
            </Head>
            <section className="container">
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content"> {props.children}</div>
                </Content>
                <Footer />
            </section>
        </div>
    );
};

export default MainLayout;

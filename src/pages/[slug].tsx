import React, { FC } from 'react';
import { useRouter } from 'next/router';

const PostDetail: FC = () => {
    const {
        query: { slug },
    } = useRouter();
    return <div>{slug}</div>;
};

export default PostDetail;

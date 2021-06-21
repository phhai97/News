import restful from '../utils/service/restful';

import { IPayload } from '../@types';

const getNews = async (request: IPayload) => {
    try {
        const res = await restful.GET('/getMayMissArticles', request);
        return res;
    } catch (error) {
        return error;
    }
};

export { getNews };

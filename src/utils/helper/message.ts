import { message } from 'antd';

interface IData {
    message: string | any;
    type: 'success' | 'error' | 'warning';
}

const ShowMessage = (data: IData) => {
    return message[data.type](data.message);
};

export default ShowMessage;

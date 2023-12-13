// 使用示例
import request from '..';

interface IGetResponseDemo {
  id: number;
}

export const getDemo = () => {
  return request.get<IGetResponseDemo>({
    url: '/demo',
    params: {
      id: 1
    }
  });
};

interface IPostRequestDemo {
  id: number;
}

interface IPostResponseDemo {
  id: number;
}

export const postDemo = (data: IPostRequestDemo) => {
  return request.post<IPostResponseDemo>({
    url: '/demo',
    data
  });
};

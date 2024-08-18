import { httpClient } from '@/libs/httpClient';

export const getHighlights = async () => {
  const response = await httpClient.get(
    '/api/forum-service/home/get_highlight',
  );
  if (response.status === 200) {
    return response.data.data;
  }
  return response.status;
};

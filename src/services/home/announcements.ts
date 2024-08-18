import { httpClient } from '@/libs/httpClient';

export const getAnnouncements = async () => {
  try {
    const response = await httpClient.get(
      'https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3',
    );

    return response.data.data;
  } catch (error) {
    return [];
  }
};

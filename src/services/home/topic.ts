import { httpClient } from '@/libs/httpClient';

export const getTagTopics = async () => {
  try {
    const response = await httpClient.post(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
      { type: 'tag', limit: 10 },
    );

    return response.data.data;
  } catch (error) {
    return [];
  }
};

export const getRoomTopics = async () => {
  try {
    const response = await httpClient.post(
      'https://pantip.com/api/forum-service/home/get_suggest_topic_popular',
      { type: 'room', limit: 10 },
    );

    return response.data.data;
  } catch (error) {
    return [];
  }
};

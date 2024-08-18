import { httpClient } from '@/libs/httpClient';

export const getRooms = async () => {
  try {
    const response = await httpClient.get(
      'https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code=%7Bsid0zb13qK8EeNgbmB%7D',
    );
    return response.data.data;
  } catch (error) {
    return [];
  }
};

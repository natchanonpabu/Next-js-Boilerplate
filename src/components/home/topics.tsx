'use client';

import Image from 'next/image';
import React from 'react';

import LogoAppPantip from '@/public/assets/images/logo-app-pantip.png';
import { getRoomTopics, getTagTopics } from '@/services/home/topic';

const Topics = () => {
  const [state, setState] = React.useState<any[]>([]);

  const getData = async () => {
    const responseTag = await getTagTopics();
    const responseRoom = await getRoomTopics();

    const tags =
      responseTag?.map((e: any) => ({
        ...e,
        id: e.tag_id,
        name: e.tag_name,
      })) || [];
    const rooms =
      responseRoom?.map((e: any) => ({
        ...e,
        id: e.room_id,
        name: e.room_name_th,
      })) || [];

    const response = [...tags, ...rooms].sort((a, b) => b.id - a.id);
    setState(response);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-10">
      {state.map((e: any) => (
        <div key={e.id} className="flex flex-col gap-4">
          <div className="text-xl font-semibold">{e.name}</div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {e.topics.map((topic: any) => (
              <div key={topic.topic_id} className="cursor-pointer rounded-b-md">
                <Image
                  src={topic.thumbnail_url || LogoAppPantip}
                  alt={topic.title}
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="h-40 w-full rounded-lg object-cover xl:h-60"
                />
                <div className="p-4">
                  <span className="line-clamp-3">{topic.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;

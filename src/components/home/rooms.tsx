'use client';

import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

import { getRooms } from '@/services/home/rooms';

const Rooms = () => {
  const [state, setState] = React.useState([]);
  const [pages, setPages] = React.useState(1);
  const [page, setPage] = React.useState(1);

  const getData = async () => {
    const response = await getRooms();
    setState(response);
    setPages(Math.ceil(response.length / 12));
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onNext = () => {
    if (page < pages) return setPage(page + 1);
    return setPage(pages);
  };

  const onPrev = () => {
    if (page > 1) return setPage(page - 1);
    return setPage(1);
  };

  return (
    <div className="sticky top-0 z-50 bg-white px-10 py-2">
      <div className="relative">
        <div className="grid grid-cols-4 gap-4 px-10 sm:grid-cols-6 lg:grid-cols-12">
          {state
            .filter(
              (_: any, i: number) => i >= 12 * (page - 1) && i < 12 * page,
            )
            .map((e: any) => (
              <div
                key={e.id}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div className="rounded-full bg-[#653190]">
                  <Image
                    src={e.room_icon_url}
                    alt={e.name}
                    width={200}
                    height={200}
                    className="h-10 w-auto"
                  />
                </div>
                <div className="truncate">{e.name}</div>
              </div>
            ))}
        </div>
        <div className="absolute top-[calc(50%-20px)] flex w-full justify-between lg:top-2">
          <Button
            onClick={onPrev}
            disabled={page === 1}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full"
          >
            {'<'}
          </Button>
          <Button
            onClick={onNext}
            disabled={page === pages}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full"
          >
            {'>'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

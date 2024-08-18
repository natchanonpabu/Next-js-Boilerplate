'use client';

import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

import { getHighlights } from '@/app/[locale]/(unauth)/api/home';

const Highlights = () => {
  const [state, setState] = React.useState([]);
  const [pages, setPages] = React.useState(1);
  const [page, setPage] = React.useState(1);

  const getData = async () => {
    const response = await getHighlights();
    setState(response);
    setPages(Math.ceil(response.length / 6));
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
    <div className="px-10">
      <div className="relative flex flex-col gap-2">
        <div className="px-20 text-xl font-semibold">Highlight</div>
        <div className="grid grid-cols-2 gap-4 px-20 sm:grid-cols-3 md:grid-cols-6">
          {state
            .filter((_: any, i: number) => i >= 6 * (page - 1) && i < 6 * page)
            .map((e: any) => (
              <div key={e.name} className="shadow hover:shadow-md">
                <Image
                  src={e.image_url[0]}
                  alt={e.name}
                  width={400}
                  height={400}
                  className="h-auto w-full rounded-t-md"
                  priority
                />
                <div className="p-4">
                  <span className="line-clamp-3">{e.name}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="absolute top-1/2 flex w-full justify-between">
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

export default Highlights;

'use client';

import classNames from 'classnames';
import React from 'react';

import { getAnnouncements } from '@/services/home/announcements';

const Announcements = () => {
  const [state, setState] = React.useState([]);

  const getData = async () => {
    const response = await getAnnouncements();
    setState(response);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-14">
      <div className="grid grid-cols-3 rounded-full border border-solid border-slate-400 px-6 py-4 shadow-md">
        {state.map((e: any, i: number) => (
          <div
            key={e.announce_id}
            className={classNames('px-4', {
              'border-l border-solid border-slate-400': !!i,
            })}
          >
            <div
              className={classNames({
                'text-yellow-400': e.category_name === 'highlight',
                'text-indigo-400': e.category_name === 'activity',
              })}
            >
              {e.category_name}
            </div>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: e.display_message }}
              className="truncate"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;

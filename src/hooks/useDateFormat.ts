import { useState, useEffect } from 'react';

const useDateFormat = (dateToFormat: string): string => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().locale;
    const dateit = new Date(dateToFormat).toLocaleDateString(timezone, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const dateSplit = dateit.split(/[ ,]+/);
    const place = dateit[1] === '1' ? 'st' : 'nd';

    setData(`${dateSplit[0]} ${dateSplit[1]}${place} ${dateSplit[2]}`);
  }, []);

  return data;
};
export default useDateFormat;

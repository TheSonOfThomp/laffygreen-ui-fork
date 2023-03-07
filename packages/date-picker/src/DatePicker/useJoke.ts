import { useEffect, useState } from 'react';

export function useJoke(...args: Array<any>) {
  const [joke, setJoke] = useState('');
  useEffect(() => {
    setJoke('');
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    })
      .then(data => data.text())
      .then(jk => {
        setJoke(jk);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...args]);

  return joke;
}

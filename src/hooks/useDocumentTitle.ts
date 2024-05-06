/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';

export default function useDocumentTitle(title: string, prevailOnUnmount: boolean = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        if (defaultTitle.current) {
          document.title = defaultTitle.current;
        }
      }
    },
    []
  );
}

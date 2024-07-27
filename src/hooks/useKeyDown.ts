import { useEffect } from "react";

interface KeyDownParams {
	fn: () => void;
	keyName: string;
}

export const useKeyDown = <T extends KeyDownParams>({ fn, keyName }: T) => {
	  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === keyName) {
          fn();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [fn, keyName]);
}
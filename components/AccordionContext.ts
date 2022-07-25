import { createContext } from 'react';

interface AccordionContextProps {
    active: any;
    setActive: (key: any) => void;
}

export const AccordionContext = createContext<AccordionContextProps>({} as AccordionContextProps);

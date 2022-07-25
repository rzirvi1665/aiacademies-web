import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { AiOutlineDown } from 'react-icons/ai';
import { AccordionContext } from './AccordionContext';

export const Accordion: React.FC = ({ children }) => {
    const [active, setActive] = useState<any>(undefined);

    useEffect(() => {
        console.log(active);
    }, [active]);

    return (
        <AccordionContext.Provider value={{ active, setActive }}>
            <div className="flex flex-col gap-5">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

interface AccordionElementProps {
    title: string;
}

export const AccordionElement: React.FC<AccordionElementProps> = ({ title, children }) => {
    const { active, setActive } = useContext(AccordionContext);

    return (
        <div className={classNames('rounded-xl bg-slate-100/50 overflow-y-hidden')}>
            <div className="font-bold text-lg px-5 py-3 border-b-2 border-white flex items-center gap-3 cursor-pointer" onClick={() => setActive(active === title ? undefined : title)}>
                <AiOutlineDown className={classNames('duration-500', { '-rotate-90': active !== title })} />
                {title}
            </div>
            <div className={classNames('duration-500', { 'max-h-24': active === title, 'max-h-0': active !== title })}>
                <div className="px-5 py-3">
                    {children}
                </div>
            </div>
        </div>
    );
};

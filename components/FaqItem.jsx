'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h4 className="text-lg font-semibold text-slate-800">{question}</h4>
                <span className="text-teal-500">{isOpen ? <Minus /> : <Plus />}</span>
            </button>
            {isOpen && <div className="mt-4 text-slate-600 prose max-w-none" dangerouslySetInnerHTML={{ __html: children }} />}
        </div>
    );
};

export default FaqItem;
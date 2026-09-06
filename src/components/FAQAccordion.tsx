import React, { useState } from 'react';
import { FAQItem } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = "Pertanyaan Sering Diajukan (FAQ)",
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {title && (
        <div className="flex items-center gap-2 mb-6 justify-center">
          <HelpCircle className="w-6 h-6 text-[#ffe600]" />
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">{title}</h2>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-[#121723] border-2 border-black shadow-[4px_4px_0px_0px_#000000] rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-[#182030] hover:bg-[#1f293d] transition-colors"
              >
                <span className="font-extrabold text-sm sm:text-base text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#00f0ff] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#ffe600]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 py-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans bg-[#121723] border-t border-gray-800">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

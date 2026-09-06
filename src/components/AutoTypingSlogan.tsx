import React, { useState, useEffect } from 'react';

interface AutoTypingSloganProps {
  slogans: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const AutoTypingSlogan: React.FC<AutoTypingSloganProps> = ({
  slogans,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2200,
}) => {
  const [text, setText] = useState('');
  const [sloganIndex, setSloganIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSlogan = slogans[sloganIndex % slogans.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentSlogan.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentSlogan.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentSlogan) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, sloganIndex, slogans, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="inline-flex items-center min-h-[3rem] text-center justify-center">
      <span className="text-lg sm:text-2xl md:text-3xl font-bold font-mono text-[#00f0ff] drop-shadow-[0_2px_10px_rgba(0,240,255,0.3)] tracking-tight">
        "{text}"
      </span>
      <span className="w-3 h-7 sm:h-8 bg-[#ffe600] inline-block ml-1 animate-pulse border border-black shadow-[1px_1px_0px_0px_#000]" />
    </div>
  );
};

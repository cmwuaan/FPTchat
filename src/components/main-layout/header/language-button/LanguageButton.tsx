import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../utils/atom';
import { FaLanguage } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import Classes from './LanguageButton.module.scss';

export const LanguageButton: React.FC = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
  ];

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={Classes.Container}>
      <button className={Classes.LanguageButton} onClick={() => setIsOpen(!isOpen)}>
        <FaLanguage className={Classes.LanguageIcon} />
        {languages.find((lang) => lang.code === language)?.label}
        <MdArrowDropDown className={Classes.DropdownIcon} />
      </button>
      {isOpen && (
        <ul className={Classes.DropdownMenu}>
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

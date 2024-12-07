'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { cn } from '@/lib/utils';

type Language = {
  code: string;
  name: string;
  shortName: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', shortName: 'EN', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', shortName: 'RU', flag: '🇷🇺' },
  { code: 'pt', name: 'Português', shortName: 'PT', flag: '🇵🇹' },
];

interface LanguageSwitcherProps {
  currentLang: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback(
    (newLocale: string) => {
      const segments = pathname.split('/');
      segments[1] = newLocale;
      const newPath = segments.join('/');
      router.push(newPath);
    },
    [pathname, router],
  );

  const getCurrentLanguage = () =>
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const currentLanguage = getCurrentLanguage();

  return (
    <Select onValueChange={switchLanguage} defaultValue={currentLang}>
      <SelectTrigger className={`bg-background text-foreground border-primary w-[50px]`}>
        <span className="mr-2 mt-1">{currentLanguage.flag}</span>
        <span>{currentLanguage.code}</span>
      </SelectTrigger>
      <SelectContent className={'bg-[#F7F7F7] dark:bg-[#181818]'}>
        {languages.map((lang) => (
          <SelectItem
            className={cn(currentLanguage.code === lang.code && 'bg-gray-300 dark:bg-gray-950')}
            key={lang.code}
            value={lang.code}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.code}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

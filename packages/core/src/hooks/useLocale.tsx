/* eslint-disable  @typescript-eslint/no-unnecessary-type-assertion */
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { sv } from 'date-fns/locale/sv';
import { enUS } from 'date-fns/locale/en-US';

import { format, setDefaultOptions } from 'date-fns';
import type { Locale } from 'date-fns';

export type locales = 'en' | 'sv';

type rdpModule = {
  registerLocale: (localeName: locales, locale: Locale) => void;
  setDefaultLocale: (localeName: locales) => void;
};

let rDatePicker: undefined | rdpModule;

import('react-datepicker')
  .then((module: rdpModule) => {
    module.registerLocale('sv', sv as Locale);
    module.registerLocale('en', enUS as Locale);
    module.setDefaultLocale('sv');
    rDatePicker = module;
  })
  .catch(() => {
    rDatePicker = undefined;
  });

type localeContextType = {
  locale: locales;
  availableLocales: locales[];
  setLocale: (locale: locales) => void;
  formatInLocale: (date: Date | number, formatString: string) => string;
};

type Props = {
  initialLocale: locales;
};

const LocaleContext = createContext<localeContextType | undefined>(undefined);

export const useLocale = () => {
  const localeContext = useContext(LocaleContext);
  if (!localeContext) {
    throw Error('Make sure localeProvider is set');
  }
  return localeContext;
};
export const getDefaultLocale = (): locales => {
  if (navigator.language && navigator.language.includes('sv')) {
    return 'sv';
  }

  return 'en';
};
export const LocaleProvider = ({
  initialLocale,
  children,
}: PropsWithChildren<Props>) => {
  const localeMap: { [name in locales]: Locale } = {
    sv: sv as Locale,
    en: enUS as Locale,
  };
  useEffect(() => {
    setDefaultOptions({ locale: localeMap[initialLocale] });
  }, []);

  const [locale, setLocaleState] = useState<locales>(initialLocale);

  setDefaultOptions({ locale: sv as Locale });

  const setLocale = (newLocale: locales) => {
    if (rDatePicker) {
      rDatePicker.setDefaultLocale(newLocale);
    }

    setDefaultOptions({ locale: localeMap[newLocale] });
    setLocaleState(newLocale);
  };

  const formatInLocale = (date: Date | number, formatString: string) =>
    format(date, formatString, {
      locale: localeMap[locale],
    });

  return (
    <LocaleContext.Provider
      value={{
        locale,
        availableLocales: Object.keys(localeMap) as locales[],
        setLocale,
        formatInLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

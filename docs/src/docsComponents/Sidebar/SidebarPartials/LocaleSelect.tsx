import { Container, Option, Select, Text, useLocale } from '@heliconhq/core';
import React from 'react';

import type { locales } from '@heliconhq/core';

export default function LocaleSelect() {
  const { setLocale, availableLocales, locale } = useLocale();
  const handleSelect = (newLocale: string) => {
    setLocale(newLocale as unknown as locales);
  };
  return (
    <Container margin="reduced">
      <Container margin="minimal">
        <Text>Locale</Text>
      </Container>
      <Select
        block={false}
        disabled={false}
        onChange={({ target: { value } }) => handleSelect(value)}
        value={locale}
      >
        {availableLocales.map((localeItem) => (
          <Option key={localeItem} value={localeItem}>
            {localeItem}
          </Option>
        ))}
      </Select>
    </Container>
  );
}

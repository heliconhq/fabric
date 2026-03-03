import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Sidebar, useTheme } from '@heliconhq/core';

import { components, categories, topCategories } from '../../registered';
import TopCategoryLink from './SidebarPartials/TopCategoryLink';
import Header from './SidebarPartials/Header';
import ThemeToggle from './SidebarPartials/ThemeToggle';
import FilterPages from './SidebarPartials/FilterPages';
import ComponentCategory from './SidebarPartials/ComponentCategory';
import LocaleSelect from './SidebarPartials/LocaleSelect';

type TOC = {
  name: string;
  slug: string;
  components: typeof components;
};

export default () => {
  const match = useRouteMatch<{ category: string | undefined }>({
    path: '/:category',
    strict: true,
    sensitive: true,
  });
  const { toggleTheme } = useTheme();
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(match?.params?.category);
  const isSearching = search.length >= 2;
  const toc: TOC[] = [
    {
      name: 'Unsorted',
      slug: 'unsorted',
      components: [],
    },
    ...categories
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(({ name, slug }) => ({
        name,
        slug,
        components: [],
      })),
  ];
  components
    .filter(
      ({ name }) =>
        !isSearching ||
        !name ||
        name.toLowerCase().includes(search.toLowerCase())
    )
    .forEach((props) => {
      const p = props as typeof props & { category?: string };
      const c = p.category || 'unsorted';
      const target = toc.find(({ slug }) => c === slug);

      if (!target) {
        throw new Error(`Cannot find category ${c}`);
      }

      target.components.push(props);
    });

  toc.forEach((category) => {
    if (category.name !== 'Unsorted') {
      category.components.sort((a, b) => a.name.localeCompare(b.name));
    }
  });

  return (
    <Sidebar>
      <Header />
      <ThemeToggle toggleTheme={toggleTheme}></ThemeToggle>
      <FilterPages
        searchString={search}
        onSearch={(value) => setSearch(value)}
      />

      {topCategories.map(({ slug: topSlug, name: topName }) => (
        <div key={topSlug}>
          <TopCategoryLink
            to={`/${topSlug}/`}
            onClick={() => {
              setOpen(topSlug === open ? undefined : topSlug);
            }}
            open={open === topSlug || isSearching}
            topName={topName}
          />

          {(open === topSlug || isSearching) && (
            <div className="contents">
              {toc.map(
                ({
                  name: categoryName,
                  slug: categorySlug,
                  components: comps,
                }) => (
                  <ComponentCategory
                    key={categoryName}
                    name={categoryName}
                    slug={categorySlug}
                    components={comps}
                    topSlug={topSlug}
                    searchString={search}
                  ></ComponentCategory>
                )
              )}
            </div>
          )}
        </div>
      ))}
      <LocaleSelect />
    </Sidebar>
  );
};

import charts from './registeredComponents/charts';
import dates from './registeredComponents/dates';
import marker from './registeredComponents/marker';
import dataDisplay from './registeredComponents/dataDisplay';
import navigation from './registeredComponents/navigation';
import appLayout from './registeredComponents/appLayout';
import containers from './registeredComponents/containers';
import dataViz from './registeredComponents/dataViz';
import form from './registeredComponents/form';
import general from './registeredComponents/general';
import typography from './registeredComponents/typography';
import SchemaForm from './components/SchemaForm';
import AdvancedSelect from './components/AdvancedSelect';
import Editor from './components/Editor';
import Highlight from './components/Highlight';
import MapView from './components/MapView';
import ThemeLab from './components/ThemeLab';
import core from './registeredComponents/core';
import layout from './registeredComponents/layout';
import overlays from './registeredComponents/overlays';

const categories = [
  { slug: 'general', name: 'General' },
  { slug: 'containers', name: 'Containers' },
  { slug: 'overlays', name: 'Overlays' },
  { slug: 'layout', name: 'Layout' },
  { slug: 'core-layout', name: 'Core layout' },
  { slug: 'forms', name: 'Forms' },
  { slug: 'typography', name: 'Typography' },
  { slug: 'datadisplay', name: 'Data Display' },
  { slug: 'dataviz', name: 'Data visualization' },
  { slug: 'pages', name: 'Pages' },
  { slug: 'navigation', name: 'Navigation' },
  { slug: 'markers', name: 'Markers' },
  { slug: 'lab', name: 'Lab' },
];

const topCategories = [
  { slug: 'overview', name: 'Overview' },
  { slug: 'themes', name: 'Themes' },
  { slug: 'core', name: '@heliconhq/core' },
  { slug: 'charts', name: '@heliconhq/charts' },
  { slug: 'highlight', name: '@heliconhq/highlight' },
  { slug: 'dates', name: '@heliconhq/dates' },
  { slug: 'maps', name: '@heliconhq/maps' },
  { slug: 'rjsf', name: '@heliconhq/rjsf' },
  { slug: 'select', name: '@heliconhq/select' },
  { slug: 'editor', name: '@heliconhq/editor' },
  { slug: 'lab', name: 'Lab' },
];

const components = [
  // General
  ...general,
  // Typography components
  ...typography,
  // Form components
  ...form,
  // Core
  ...core,
  // Containers
  ...containers,
  // Overlays
  ...overlays,
  // Layout
  ...layout,
  // App layouts
  ...appLayout,
  // Data viz
  ...dataViz,
  // Navigation
  ...navigation,
  // Data Display
  ...dataDisplay,
  // Markers
  ...marker,

  // Lab
  {
    component: ThemeLab,
    slug: 'themelab',
    name: 'ThemeLab',
    topCategory: 'lab',
  },
  // Schema form
  {
    component: SchemaForm,
    slug: 'schemaform',
    name: 'SchemaForm',
    topCategory: 'rjsf',
  },
  // Editor
  {
    component: Editor,
    slug: 'editor',
    name: 'Editor',
    topCategory: 'editor',
  },
  // Maps
  {
    component: MapView,
    slug: 'mapview',
    name: 'MapView',
    topCategory: 'maps',
  },
  // Advanced select
  {
    component: AdvancedSelect,
    slug: 'advanced-select',
    name: 'AdvancedSelect',
    topCategory: 'select',
  },
  // Highlight
  {
    component: Highlight,
    slug: 'highlight',
    name: 'Highlight',
    topCategory: 'highlight',
  },
  // Charts
  ...charts,
  // Dates
  ...dates,
];

export { categories, components, topCategories };

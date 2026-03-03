/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const { optimize } = require('svgo');
const path = require('path');
const fs = require('fs');

const svgoConfig = {
  floatPrecision: 4,
  plugins: [
    'preset-default',
    'removeDoctype',
    'convertStyleToAttrs',
    'cleanupListOfValues',
    'removeRasterImages',
    'sortAttrs',
    'removeDimensions',
    'removeElementsByAttr',
    'removeStyleElement',
    'removeScriptElement',
    {
      name: 'removeUselessStrokeAndFill',
      params: {
        // https://github.com/svg/svgo/issues/727#issuecomment-303115276
        removeNone: true,
        fill: true,
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill)',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: ['fill={color}'],
      },
    },
  ],
};

const generateComponentName = (filename) =>
  filename
    .replace('-24px.svg', '')
    .replace('.svg', '')
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.substring(1))
    .join('');

const generateComponentIdentifier = (filename) =>
  filename.replace('-24px.svg', '').replace('.svg', '').split('_').join('-');

const createIcon = async (srcPath, dstPath, filename) => {
  const svgPath = path.join(srcPath, filename);
  const content = fs.readFileSync(svgPath, 'utf8');
  const svg = await optimize(content, svgoConfig);
  const componentName = generateComponentName(filename);
  const componentIdentifier = generateComponentIdentifier(filename);
  const component = `const ${componentName} = ({ color = 'currentColor' }) => (
  ${svg.data}
);

export default ${componentName};
`;

  fs.writeFileSync(
    path.join(dstPath, `${componentName}.tsx`),
    component,
    'utf8'
  );
  return { componentName, componentIdentifier };
};

const main = () => {
  const rootPath = path.join(path.dirname(require.main.filename), '..');
  const srcPath = path.join(rootPath, 'assets', 'icons');
  const dstPath = path.join(rootPath, 'src', 'icons');
  const indexPath = path.join(dstPath, 'index.ts');

  fs.readdir(srcPath, async (_err, files) => {
    const promises = files.map(async (file) =>
      createIcon(srcPath, dstPath, file)
    );
    const components = await Promise.all(promises);
    const imports = components
      .map(
        (component) =>
          `import ${component.componentName} from './${component.componentName}';`
      )
      .join('\n');

    // Generate index file
    const index = `${imports}

/* eslint-disable quote-props */
export const iconNameToComponentMap = {
${components
  .map(
    (component) =>
      `  '${component.componentIdentifier}': ${component.componentName},`
  )
  .join('\n')}
};
/* eslint-enable */

export const iconNames = Object.keys(iconNameToComponentMap);

export type IconName =
${components
  .map((component) => `  | '${component.componentIdentifier}'`)
  .join('\n')}
  | string;
`;
    fs.writeFileSync(indexPath, index, 'utf8');
  });
};

if (require.main === module) {
  main();
}

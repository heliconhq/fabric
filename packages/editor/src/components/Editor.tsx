import AceEditor from 'react-ace';
import { useTheme } from '@heliconhq/core';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools';

type Props = {
  mode: 'javscript' | 'json' | 'sql' | 'yaml' | 'python';
  onChange: (value: string) => unknown;
  value: string;
};

const Editor = ({ mode, onChange, value, ...props }: Props) => {
  const { theme } = useTheme();

  return (
    <AceEditor
      mode={mode}
      onChange={onChange}
      value={value}
      width="100%"
      editorProps={{ $blockScrolling: true }}
      theme={theme.config.components.editor.themeName}
      fontSize={16}
      {...props}
    />
  );
};
export default Editor;

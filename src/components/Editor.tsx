import { useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useStore } from '../store/useStore';

export function Editor() {
  const { code, setCode, language } = useStore();

  return (
    <div className="h-full w-full">
      <MonacoEditor
        height="100%"
        language={language}
        value={code}
        theme="vs-dark"
        onChange={(value) => setCode(value || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: 'on',
          automaticLayout: true,
        }}
      />
    </div>
  );
}
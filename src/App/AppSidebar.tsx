import { python } from '@codemirror/lang-python';
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { EditorState, type Extension } from '@codemirror/state';
import { basicSetup, EditorView } from 'codemirror';
import { useContext, useEffect } from 'react';
import { AppContext } from './context';

const theme = EditorView.theme({
  '&': {
    outline: 'none !important',
    height: '100%',
  },
});

const themeExtension: Extension = [theme];

export default function AppSidebar() {
  const { setEditor } = useContext(AppContext);

  useEffect(() => {
    const editor = new EditorView({
      parent: document.querySelector('#codemirror')!,
      extensions: [
        basicSetup,
        EditorState.readOnly.of(true),
        EditorView.editable.of(false),
        EditorView.contentAttributes.of({ tabindex: '0' }),
        themeExtension,
        syntaxHighlighting(defaultHighlightStyle),
        python(),
      ],
    });

    setEditor(editor);

    return () => {
      editor?.dispatch();
    };
  }, [setEditor]);

  return (
    <div className='w-3xl h-full'>
      <div id='codemirror' className='w-full h-full'></div>
    </div>
  );
}

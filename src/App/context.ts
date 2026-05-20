import type { Workspace } from 'blockly';
import type { EditorView } from 'codemirror';
import React, { createContext } from 'react';

export type AppContextValue = {
  workspace: React.RefObject<Workspace | null>;
  editor: React.RefObject<EditorView | null>;
  setEditor: (editor: EditorView) => void;
};

export const AppContext = createContext<AppContextValue>({} as AppContextValue);

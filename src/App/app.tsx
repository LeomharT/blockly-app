import { CustomCategory } from '@/core/category';
import { toolbox } from '@/core/toolbox';
import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';
import { EditorView } from 'codemirror';
import { useEffect, useRef } from 'react';
import '../blocks/index';
import '../generator/index';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { AppContext } from './context';

export default function App() {
  const workspace = useRef<Blockly.Workspace>(null);
  const editor = useRef<EditorView>(null);

  function setEditor(_editor: EditorView) {
    editor.current = _editor;
  }

  useEffect(() => {
    // Create the definition.
    const definitions = Blockly.common.createBlockDefinitionsFromJsonArray([
      {
        // The type is like the "class name" for your block. It is used to construct
        // new instances. E.g. in the toolbox.
        type: 'my_custom_block',
        // The message defines the basic text of your block, and where inputs or
        // fields will be inserted.
        message0: 'move forward %1',
        args0: [
          // Each arg is associated with a %# in the message.
          // This one gets substituted for %1.
          {
            // The type specifies the kind of input or field to be inserted.
            type: 'field_number',
            // The name allows you to reference the field and get its value.
            name: 'FIELD_NAME',
          },
        ],
        // Adds an untyped previous connection to the top of the block.
        previousStatement: null,
        // Adds an untyped next connection to the bottom of the block.
        nextStatement: null,
        colour: 131,
      },
    ]);

    // Register the definition.
    Blockly.common.defineBlocks(definitions);

    Blockly.registry.register(
      Blockly.registry.Type.TOOLBOX_ITEM,
      Blockly.ToolboxCategory.registrationName,
      CustomCategory,
      true,
    );

    workspace.current = Blockly.inject('blocklyDiv', {
      toolbox,
      renderer: 'zelos',
      trashcan: false,
    });

    Blockly.serialization.workspaces.load(
      {
        blocks: {
          languageVersion: 0,
          blocks: [
            {
              type: '__main__',
              x: 50,
              y: 50,
            },
          ],
        },
      },
      workspace.current,
    );

    workspace.current.addChangeListener((e) => {
      if (!workspace.current) return;

      pythonGenerator.init(workspace.current);

      if (e instanceof Blockly.Events.Selected) {
        editor.current!.dispatch({ selection: { anchor: 0, head: 0 } });

        const block = Blockly.common.getSelected();
        if (block) {
          const code = pythonGenerator.blockToCode(block as unknown as Blockly.Block) as string;
          const fullCode = editor.current!.state.doc.toString();

          const from = fullCode.indexOf(code);
          const to = from + code.length;

          if (from >= 0) {
            editor.current!.dispatch({
              selection: { anchor: from, head: to },
            });
          }
        }

        return;
      }

      if (e.isUiEvent) return;

      if (workspace.current) {
        const code = pythonGenerator.workspaceToCode(workspace.current);
        if (editor.current) {
          editor.current.dispatch({
            changes: {
              from: 0,
              to: editor.current.state.doc.length,
              insert: code,
            },
          });
        }
      }
    });

    return () => {
      workspace.current?.dispose();
    };
  }, []);

  return (
    <AppContext.Provider value={{ workspace, editor, setEditor }}>
      <div className='h-dvh'>
        <AppHeader />
        <main className='h-[calc(100vh-64px)] flex flex-row'>
          <div id='blocklyDiv' className='w-full shrink'></div>
          <AppSidebar />
        </main>
      </div>
    </AppContext.Provider>
  );
}

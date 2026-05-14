import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';
import { useEffect } from 'react';
import '../blocks/index';
import '../generator/index';

export default function App() {
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

    const toolbox: Blockly.BlocklyOptions['toolbox'] = {
      kind: 'categoryToolbox',
      contents: [
        {
          kind: 'category',
          colour: '290',
          name: 'Control',
          contents: [
            {
              kind: 'block',
              type: 'my_custom_block',
            },
            {
              kind: 'block',
              type: '__main__',
            },
          ],
        },
      ],
    };

    const workspace = Blockly.inject('blocklyDiv', {
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
      workspace,
    );

    workspace.addChangeListener((e) => {
      if (e.isUiEvent) return;

      const code = pythonGenerator.workspaceToCode(workspace);
      console.log(code);
    });

    return () => {
      workspace.dispose();
    };
  }, []);

  return <div id='blocklyDiv' className='h-screen'></div>;
}

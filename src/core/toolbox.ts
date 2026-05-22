import { BLOCK_TYPES } from '@/constants/blockTypes';
import * as Blockly from 'blockly';

export const toolbox: Blockly.BlocklyOptions['toolbox'] = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      colour: '290',
      name: 'Sprites',
      cssconfig: { icon: 'fa-brands fa-codepen' },
      contents: [
        { kind: 'label', text: 'Sprites' },
        {
          kind: 'title',
          text: 'Sprites',
        },
        { kind: 'block', type: 'my_custom_block' },
        { kind: 'block', type: BLOCK_TYPES.MAIN },
        { kind: 'block', type: BLOCK_TYPES.TRY_CATCH },
      ],
    },
    {
      kind: 'category',
      colour: '130',
      name: 'Category2',
      cssconfig: { icon: 'fa-solid fa-music' },
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

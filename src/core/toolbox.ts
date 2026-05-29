import { BLOCK_TYPES } from '@/constants/blockTypes';
import { TTS_BLOCK_TYPES } from '@/constants/tts.block';
import * as Blockly from 'blockly';

const category_tts: Blockly.utils.toolbox.ToolboxItemInfo = {
  kind: 'category',
  colour: '130',
  name: 'Text To Speech',
  cssconfig: { icon: 'fa-solid fa-headphones' },
  contents: [
    {
      kind: 'label',
      text: '\uf001',
      'web-class': 'labelicon',
    } as Blockly.utils.toolbox.ToolboxItemInfo,
    { kind: 'label', text: 'voice' },
    { kind: 'block', type: TTS_BLOCK_TYPES.VOICE },
  ],
};

const category_hd_desk_lamp: Blockly.utils.toolbox.ToolboxItemInfo = {
  kind: 'category',
  colour: '190',
  name: 'Desk Lamp',
  cssconfig: { icon: 'fa-regular fa-lightbulb' },
  contents: [],
};

export const toolbox: Blockly.BlocklyOptions['toolbox'] = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      colour: '290',
      name: 'Logic',
      cssconfig: { icon: 'fa-brands fa-codepen' },
      contents: [
        {
          kind: 'label',
          text: '\uf1cb',
          'web-class': 'labelicon',
        } as Blockly.utils.toolbox.ToolboxItemInfo,
        { kind: 'block', type: 'my_custom_block' },
        { kind: 'block', type: BLOCK_TYPES.MAIN },
        { kind: 'block', type: BLOCK_TYPES.TRY_CATCH },
        { kind: 'block', type: BLOCK_TYPES.DEFINITION },

        { kind: 'block', type: 'logic_boolean', colour: '290' },
        { kind: 'block', type: BLOCK_TYPES.WITH_CONTENT },
      ],
    },
    category_tts,
    category_hd_desk_lamp,
  ],
};

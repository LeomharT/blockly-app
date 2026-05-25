import { BLOCK_TYPES } from '@/constants/blockTypes';
import { TTS_BLOCK_TYPES, TTS_FIELD, TTS_INPUT } from '@/constants/tts.block';
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
        {
          kind: 'label',
          text: '\uf1cb',
          'web-class': 'labelicon',
        } as Blockly.utils.toolbox.ToolboxItemInfo,
        { kind: 'block', type: 'my_custom_block' },
        { kind: 'block', type: BLOCK_TYPES.MAIN },
        { kind: 'label', text: 'Hhhhhahahah' },
        { kind: 'block', type: BLOCK_TYPES.TRY_CATCH },
      ],
    },
    {
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
        { kind: 'label', text: 'tts_client' },
        { kind: 'block', type: TTS_BLOCK_TYPES.TTS_CLIENT },
        { kind: 'label', text: 'token' },
        {
          kind: 'block',
          type: TTS_BLOCK_TYPES.ACCESS_TOKEN,
          fields: {
            [TTS_FIELD.TOKEN]: '请在此处输入你的Token',
          },
        },
        { kind: 'label', text: 'voice' },
        { kind: 'block', type: TTS_BLOCK_TYPES.VOICE },
        { kind: 'label', text: 'speech' },
        { kind: 'block', type: TTS_BLOCK_TYPES.SPEECH },
        { kind: 'label', text: 'text' },
        {
          kind: 'block',
          type: TTS_BLOCK_TYPES.TTS_TEXT,
          inputs: {
            [TTS_INPUT.TTS_TEXT_INPUT]: {
              block: {
                type: 'text',
                fields: {
                  TEXT: '请在此输入需要转为语音的文本',
                },
              },
            },
          },
        },
        { kind: 'label', text: 'instruction' },
        { kind: 'block', type: TTS_BLOCK_TYPES.INSTRUCTION },
      ],
    },
  ],
};

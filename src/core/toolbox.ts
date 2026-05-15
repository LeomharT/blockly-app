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
        { kind: 'label', text: 'Logic' },
        { kind: 'block', type: 'my_custom_block' },
        { kind: 'block', type: '__main__' },
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

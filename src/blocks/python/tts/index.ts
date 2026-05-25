import { TTS_BLOCK_TYPES } from '@/constants/tts.block';
import * as Blockly from 'blockly';

const COLOUR = '130';

Blockly.Blocks[TTS_BLOCK_TYPES.VOICE] = {
  audio: new Audio(),
  init(this: Blockly.Block & { audio: HTMLAudioElement }) {
    this.appendDummyInput()
      .appendField('选择语音')
      .appendField(
        new Blockly.FieldDropdown([
          ['龙安洋', 'longanyang'],
          ['龙安欢', 'longanhuan'],
          ['龙呼呼', 'longhuhu_v3'],
        ]),
        'VOICE',
      )
      .appendField(
        new Blockly.FieldImage('/imgs/volumn.svg', 24, 24, 'volumn', () => {
          this.audio.pause();
          this.audio.src = `/audio/${this.getFieldValue('VOICE')}.mp3`;
          this.audio.play();
        }),
      );

    this.setOutput(true);
    this.setColour(COLOUR);
  },
  destroy(this: Blockly.Block & { audio: HTMLAudioElement }) {
    this.audio.pause();
  },
};

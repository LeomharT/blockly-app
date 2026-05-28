import { TTS_BLOCK_TYPES, TTS_FIELD } from '@/constants/tts.block';
import * as Blockly from 'blockly';

const COLOUR = '130';

type Block = Blockly.Block & Record<string, string>;

type AudioBlock = Block & { audio: HTMLAudioElement };

Blockly.Blocks[TTS_BLOCK_TYPES.VOICE] = {
  audio: new Audio(),
  init(this: AudioBlock) {
    this.appendDummyInput()
      .appendField('语音')
      .appendField(
        new Blockly.FieldDropdown([
          ['龙安洋', 'longanyang'],
          ['龙安欢', 'longanhuan'],
          ['龙呼呼', 'longhuhu_v3'],
        ]),
        TTS_FIELD.VOICE,
      )
      .appendField(
        new Blockly.FieldImage('/imgs/volumn.svg', 24, 24, 'volumn', () => {
          this.audio.pause();
          this.audio.src = `/audio/${this.getFieldValue(TTS_FIELD.VOICE)}.mp3`;
          this.audio.play();
        }),
      )
      .appendField(',')
      .appendField('语速')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['1.5', '1.5'],
          ['2', '2'],
        ]),
        TTS_FIELD.SPEECH,
      )
      .appendField(',')
      .appendField('语调')
      .appendField(
        new Blockly.FieldDropdown([
          ['中立', 'neutral'],
          ['恐惧', 'fearful'],
          ['愤怒', 'angry'],
          ['悲伤', 'sad'],
          ['惊讶', 'surprised'],
          ['快乐', 'happy'],
          ['厌恶', 'disgusted'],
        ]),
        TTS_FIELD.INSTRUCTION,
      )
      .appendField(',')
      .appendField('文本')
      .appendField(new Blockly.FieldTextInput(''), TTS_FIELD.TTS_TEXT);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOUR);
  },
  destroy(this: AudioBlock) {
    this.audio.pause();
  },
} as AudioBlock;

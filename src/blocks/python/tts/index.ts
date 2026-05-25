import { TTS_BLOCK_TYPES, TTS_FIELD, TTS_INPUT, TTS_STATEMENT_INPUT } from '@/constants/tts.block';
import * as Blockly from 'blockly';

const COLOUR = '130';

type Block = Blockly.Block & Record<string, string>;

type AudioBlock = Block & { audio: HTMLAudioElement };

Blockly.Blocks[TTS_BLOCK_TYPES.TTS_CLIENT] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField('tts_client.tts_synthesize( ');
    this.appendStatementInput(TTS_STATEMENT_INPUT.TTS_STATEMENT);
    this.appendDummyInput().appendField(')');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOUR);
  },
} as Block;

Blockly.Blocks[TTS_BLOCK_TYPES.ACCESS_TOKEN] = {
  init: function (this: Blockly.Block) {
    this.appendDummyInput()
      .appendField('设置访问令牌: ')
      .appendField(new Blockly.FieldVariable('access_token'), TTS_FIELD.TOKEN_VARIABLE)
      .appendField('=')
      .appendField(new Blockly.FieldTextInput(''), TTS_FIELD.TOKEN);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOUR);
  },
} as Block;

Blockly.Blocks[TTS_BLOCK_TYPES.VOICE] = {
  audio: new Audio(),
  init(this: AudioBlock) {
    this.appendDummyInput()
      .appendField('设置语音')
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
      );

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOUR);
  },
  destroy(this: AudioBlock) {
    this.audio.pause();
  },
} as AudioBlock;

Blockly.Blocks[TTS_BLOCK_TYPES.SPEECH] = {
  init(this: Blockly.Block) {
    this.appendDummyInput()
      .appendField('设置语速')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['1.5', '1.5'],
          ['2', '2'],
        ]),
        TTS_FIELD.SPEECH,
      );

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOUR);
  },
} as Block;

Blockly.Blocks[TTS_BLOCK_TYPES.TTS_TEXT] = {
  init(this: Blockly.Block) {
    this.appendValueInput(TTS_INPUT.TTS_TEXT_INPUT).appendField('设置文本').setCheck('String');

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOUR);
  },
} as Block;

Blockly.Blocks[TTS_BLOCK_TYPES.INSTRUCTION] = {
  init(this: Blockly.Block) {
    this.appendDummyInput()
      .appendField('设置语调')
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
      );

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(COLOUR);
  },
} as Block;

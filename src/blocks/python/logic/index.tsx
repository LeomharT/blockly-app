import { BLOCK_TYPES } from '@/constants/blockTypes';
import * as Blockly from 'blockly';

const COLOR = 290;

type Block = Blockly.Block & Record<string, string>;

type ExceptionBlock = Block & {
  exceptionCount: number;
  addException: () => void;
  removeException: (index: number) => void;
};

Blockly.Blocks[BLOCK_TYPES.MAIN] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField(`if __name__ == "__main__"`);
    this.appendStatementInput('__main__').setCheck(null);
    this.setInputsInline(true);
    this.setDeletable(false);
    this.setEditable(false);
    this.setMovable(false);
    this.setColour(COLOR);
  },
} as Block;

Blockly.Blocks[BLOCK_TYPES.TRY_CATCH] = {
  exceptionCount: 0,
  init(this: ExceptionBlock) {
    this.appendDummyInput('TRY_INPUT').appendField('try');
    this.appendStatementInput('TRY').setCheck(null);

    this.appendDummyInput('CONTROLS').appendField(
      new Blockly.FieldImage('/plus.svg', 24, 24, 'add', () => {
        this.addException();
      }),
    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(COLOR);
  },
  addException(this: ExceptionBlock) {
    this.exceptionCount++;
    const currentIdx = this.exceptionCount;

    this.appendDummyInput(`EXCEPT_LABEL_${currentIdx}`)
      .appendField('except' + currentIdx)
      .appendField('                ')
      .appendField(
        new Blockly.FieldImage('/minus.svg', 24, 24, 'remove', () => {
          this.removeException(currentIdx);
        }),
      );
    this.appendStatementInput(`CATCH_${currentIdx}`).setCheck(null);

    this.moveInputBefore(`EXCEPT_LABEL_${currentIdx}`, 'CONTROLS');
    this.moveInputBefore(`CATCH_${currentIdx}`, 'CONTROLS');
  },
  removeException(this: ExceptionBlock, index: number) {
    if (this.getInput(`EXCEPT_LABEL_${index}`)) this.removeInput(`EXCEPT_LABEL_${index}`);
    if (this.getInput(`CATCH_${index}`)) this.removeInput(`CATCH_${index}`);
  },
} as ExceptionBlock;

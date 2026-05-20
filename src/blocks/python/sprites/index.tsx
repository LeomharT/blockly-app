import { BLOCK_TYPES } from '@/constants/blockTypes';
import * as Blockly from 'blockly';

const COLOR = 290;

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
};

Blockly.Blocks[BLOCK_TYPES.TRY_CATCH] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField('try');
    this.appendStatementInput('TRY').setCheck(null);
    this.appendDummyInput().appendField('catch');
    this.appendStatementInput('CATCH').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR);
  },
};

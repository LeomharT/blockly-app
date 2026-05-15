import * as Blockly from 'blockly';

Blockly.Blocks['__main__'] = {
  init(this: Blockly.Block) {
    this.appendDummyInput().appendField(`if __name__ == "__main__"`);
    this.appendStatementInput('__main__').setCheck(null);
    this.setInputsInline(true);
    this.setDeletable(false);
    this.setEditable(false);
    this.setColour('#FFBF00');
  },
};

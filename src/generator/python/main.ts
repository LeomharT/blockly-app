import { pythonGenerator } from 'blockly/python';

pythonGenerator.forBlock['__main__'] = function (block, generator) {
  const statements = generator.statementToCode(block, '__main__');
  return `if __name__ == "__main__":\n${statements || pythonGenerator.PASS}`;
};

pythonGenerator.forBlock['my_custom_block'] = function (block, generator) {
  return `if __name__ == "__main__":`;
};

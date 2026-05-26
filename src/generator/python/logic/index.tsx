import type { ExceptionBlock } from '@/blocks/python/logic';
import { BLOCK_TYPES } from '@/constants/blockTypes';
import { pythonGenerator } from 'blockly/python';

pythonGenerator.forBlock[BLOCK_TYPES.MAIN] = function (block, generator) {
  const statements = generator.statementToCode(block, '__main__');
  return `if __name__ == "__main__":\n${statements || pythonGenerator.PASS}`;
};

pythonGenerator.forBlock[BLOCK_TYPES.TRY_CATCH] = function (block) {
  const tryBranch = pythonGenerator.statementToCode(block, 'TRY') || '    pass\n';

  const exceptBlocksCode = '';
  const exceptionCount = (block as ExceptionBlock).exceptionCount;

  for (let i = 0; i < exceptionCount; i++) {
    console.log(i);
  }

  const code = `try:
${tryBranch}except Exception as e:
`;

  return code;
};

import { TTS_BLOCK_TYPES, TTS_FIELD, TTS_INPUT, TTS_STATEMENT_INPUT } from '@/constants/tts.block';
import { pythonGenerator } from 'blockly/python';

pythonGenerator.forBlock[TTS_BLOCK_TYPES.TTS_CLIENT] = function (block, generator) {
  const statement = generator.statementToCode(block, TTS_STATEMENT_INPUT.TTS_STATEMENT);
  return `tts_client.tts_synthesize(
${statement || pythonGenerator.PASS})
`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.VOICE] = function (block) {
  const voice = block.getFieldValue(TTS_FIELD.VOICE);
  return `voide='${voice}'\n`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.ACCESS_TOKEN] = function (block, generator) {
  const variableId = block.getFieldValue(TTS_FIELD.TOKEN_VARIABLE);
  const variableName = generator.getVariableName(variableId);
  const token = block.getFieldValue(TTS_FIELD.TOKEN);

  return `${variableName}='${token}'\n`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.SPEECH] = function (block) {
  const speech = block.getFieldValue(TTS_FIELD.SPEECH);
  return `speech='${speech}'\n`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.TTS_TEXT] = function (block, generator) {
  const text = generator.valueToCode(block, TTS_INPUT.TTS_TEXT_INPUT, 0);
  return `text=${text}\n`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.INSTRUCTION] = function (block) {
  const instruction = block.getFieldValue(TTS_FIELD.INSTRUCTION);
  return `instruction='${instruction}'\n`;
};

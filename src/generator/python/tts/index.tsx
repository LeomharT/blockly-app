import { TTS_BLOCK_TYPES, TTS_FIELD, TTS_STATEMENT_INPUT } from '@/constants/tts.block';
import { pythonGenerator } from 'blockly/python';

pythonGenerator.forBlock[TTS_BLOCK_TYPES.TTS_CLIENT] = function (block, generator) {
  const voice_statement = generator.statementToCode(block, TTS_STATEMENT_INPUT.VOICE_STATEMENT);

  console.log(voice_statement);

  return `tts_client.tts_synthesize(
${voice_statement || pythonGenerator.PASS.replaceAll('\n', '')}
)
`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.VOICE] = function (block) {
  const voice = block.getFieldValue(TTS_FIELD.VOICE);
  return `voide="${voice}"`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.ACCESS_TOKEN] = function (block, generator) {
  const variableId = block.getFieldValue(TTS_FIELD.TOKEN_VARIABLE);
  const variableName = generator.getVariableName(variableId);
  const token = block.getFieldValue(TTS_FIELD.TOKEN);

  return `${variableName}="${token}"`;
};

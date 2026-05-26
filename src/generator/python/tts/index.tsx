import { TTS_BLOCK_TYPES, TTS_FIELD, TTS_INPUT, TTS_STATEMENT_INPUT } from '@/constants/tts.block';
import { PythonGenerator, pythonGenerator } from 'blockly/python';

pythonGenerator.forBlock[TTS_BLOCK_TYPES.TTS_CLIENT] = function (block, generator) {
  const statement = generator.statementToCode(block, TTS_STATEMENT_INPUT.TTS_STATEMENT);
  const strings = statement.split('\n').filter(Boolean);

  (generator as PythonGenerator & { definitions_: Record<string, string> }).definitions_['import_sys'] =
    'import sys\nsys.path.append("..")';
  (generator as PythonGenerator & { definitions_: Record<string, string> }).definitions_['import_tts_client'] =
    'import tts_client';

  return `tts_client.tts_synthesize(
${strings.join(',\n') || pythonGenerator.PASS.replace('\n', '')}
)
`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.VOICE] = function (block) {
  const voice = block.getFieldValue(TTS_FIELD.VOICE);
  return `voice='${voice}'\n`;
};

pythonGenerator.forBlock[TTS_BLOCK_TYPES.ACCESS_TOKEN] = function (block, generator) {
  const variableId = block.getFieldValue(TTS_FIELD.TOKEN_VARIABLE);
  const variableName = generator.getVariableName(variableId);
  const token = block.getFieldValue(TTS_FIELD.TOKEN);

  (generator as PythonGenerator & { definitions_: Record<string, string> }).definitions_['variables'] =
    `ACCESS_TOKEN = '${token}'`;

  return `access_token=${variableName}\n`;
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
  return `instruction='你说话的情感是${instruction}。'\n`;
};

import { TTS_BLOCK_TYPES, TTS_FIELD } from '@/constants/tts.block';
import { PythonGenerator, pythonGenerator } from 'blockly/python';

pythonGenerator.forBlock[TTS_BLOCK_TYPES.VOICE] = function (block, generator) {
  (generator as PythonGenerator & { definitions_: Record<string, string> }).definitions_['import_sys'] =
    'import sys\nsys.path.append("..")';
  (generator as PythonGenerator & { definitions_: Record<string, string> }).definitions_['import_tts_client'] =
    'import tts_client';
  (generator as PythonGenerator & { definitions_: Record<string, string> }).definitions_['variables'] =
    `ACCESS_TOKEN = '${localStorage.getItem('token')}'`;

  return `tts_client.tts_synthesize(
  access_token=ACCESS_TOKEN,
  text=${block.getFieldValue(TTS_FIELD.TTS_TEXT)},
  voice="${block.getFieldValue(TTS_FIELD.VOICE)}",
  speech="${block.getFieldValue(TTS_FIELD.SPEECH)}",
  instruction="你说话的情感是${block.getFieldValue(TTS_FIELD.INSTRUCTION)}。",
  output_path="test1.wav"
)\n`;
};

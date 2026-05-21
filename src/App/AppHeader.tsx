import { Button } from '@/components/ui/button';
import { pythonGenerator } from 'blockly/python';
import { useContext } from 'react';
import { AppContext } from './context';

export default function AppHeader() {
  const { workspace } = useContext(AppContext);

  function saveCode() {
    if (workspace.current) {
      const code = pythonGenerator.workspaceToCode(workspace.current);
      console.log(code);
    }
  }

  return (
    <header className='h-16 bg-sidebar flex items-center px-8 justify-between border-b'>
      <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>TTS 语音转文本案例实践</h2>
      <Button className='w-30 h-10 cursor-pointer' size='lg' variant='outline' onClick={saveCode}>
        运行
      </Button>
    </header>
  );
}

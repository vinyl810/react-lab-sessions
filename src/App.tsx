import { useState } from 'react';
import StyledButton from './components/StyledButton';

function App() {
  const [tab, setTab] = useState<'all' | 'favorite'>('all');
  const [todos, setTodos] = useState<{ id: number; title: string; isFavorite: boolean }[]>([]);

  return (
    <main className='flex flex-col items-center py-4'>
      <h1 className='mt-4 text-4xl'>TODO APP</h1>
      <div id='tab-list' role='tab-list' className='mt-4'>
        <StyledButton
          id='all-tab'
          type={tab === 'all' ? 'blue' : 'gray'}
          onClick={() => setTab('all')}
        >
          {'전체'}
        </StyledButton>
        <StyledButton
          id='favorite-tab'
          type={tab === 'favorite' ? 'blue' : 'gray'}
          onClick={() => setTab('favorite')}
        >
          {'관심목록'}
        </StyledButton>
      </div>
      <input
        type='text'
        id='todo-input'
        className='mt-4 border border-gray-300 p-1 placeholder:text-center'
        placeholder='할 일을 입력하세요.'
        onKeyDown={(e) => {
          // macbook에서 한글 입력 시 KeyDown 이벤트가 두 번 발생하는 문제가 있어 e.nativeEvent.isComposing을 사용했습니다.
          // 이 이벤트의 속성은 복합문자가 입력중인지 여부를 반환합니다.
          if (e.nativeEvent.isComposing) return;
          if (e.key === 'Enter') {
            const newTodo = {
              id: todos.length ? todos[todos.length - 1].id + 1 : 1,
              title: e.currentTarget.value,
              isFavorite: false,
            };
            setTodos([...todos, newTodo]);
            e.currentTarget.value = '';
          }
        }}
      />
      <div className='mt-2 flex w-96 justify-center'>
        <ul role='todo-list' className='w-96'>
          {todos.length === 0 ? (
            <p className='flex justify-center text-lg'>{'목록이 없습니다.'}</p>
          ) : (
            todos
              .filter((todo) => tab === 'all' || (tab === 'favorite' && todo.isFavorite))
              .map((todo) => (
                <li
                  key={todo.id}
                  id={`todo-${todo.id}`}
                  className='grid grid-cols-[40px,_1fr,_60px] justify-items-center border-b border-gray-300 py-2'
                >
                  <StyledButton
                    type={todo.isFavorite ? 'active-star' : 'star'}
                    onClick={() => {
                      const newTodos = todos.map((t) =>
                        t.id === todo.id ? { ...t, isFavorite: !t.isFavorite } : t,
                      );
                      setTodos(newTodos);
                    }}
                  />
                  {todo.title}
                  <StyledButton
                    type='red'
                    onClick={() => {
                      const newTodos = todos.filter((t) => t.id !== todo.id);
                      setTodos(newTodos);
                    }}
                  >
                    {'삭제'}
                  </StyledButton>
                </li>
              ))
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;

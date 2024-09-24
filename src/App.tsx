import { useState, useRef } from 'react';
import StyledButton from './components/StyledButton';

function App() {

  const [tab, setTab] = useState<'all' | 'favorite'>('all');
  const [todos, setTodos] = useState<{ id: number; title: string; isFavorite: boolean }[]>([]);
  const todoRef = useRef<HTMLInputElement>(null);

  const handleTodo = () => {
    if (todoRef.current) {
      const title = todoRef.current.value;
      if (title) {
        const newTodo = {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
          title,
          isFavorite: false,
        };
        setTodos([...todos, newTodo]);
        todoRef.current.value = '';
      }
    }
  };

  const handleFavorite = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="flex flex-col items-center py-4">
      <h1 className="mt-4 text-4xl">TODO APP</h1>
      <div id="tab-list" role="tab-list" className="mt-4">
        <StyledButton type={tab === 'all' ? 'blue' : 'gray'} children="전체" onClick={() => setTab('all')} />
        <StyledButton type={tab === 'favorite' ? 'blue' : 'gray'} children="관심목록" onClick={() => setTab('favorite')} />
      </div>
      <input
        ref={todoRef}
        type="text"
        id="todo-input"
        className="mt-4 border border-gray-300 p-1 placeholder:text-center"
        placeholder="할 일을 입력하세요."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleTodo();
          }
        }}
      />
      <div className="mt-2 flex w-96 justify-center">
        {todos.length === 0 ? (
          <p className="text-lg">목록이 없습니다.</p>
        ) : (
          <ul role="todo-list" className="w-96">
            {todos
              .filter((todo) => tab === 'all' || (tab === 'favorite' && todo.isFavorite))
              .map((todo) => (
                <li
                  key={todo.id}
                  id={`todo-${todo.id}`}
                  className="grid grid-cols-[40px,_1fr,_60px] justify-items-center border-b border-gray-300 py-2"
                >
                  <StyledButton
                    type={todo.isFavorite ? 'active-star' : 'star'}
                    onClick={() => {
                      handleFavorite(todo.id);
                    }}
                  />
                  {todo.title}
                  <StyledButton
                    type="red"
                    children="삭제"
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                  />
                </li>
              ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default App;
/**
 * LAB2: More On State
 * ! 이번 LAB에서는 App.tsx 파일의 코드 line 수가 90줄을 넘어가지 않도록 작성해야 합니다.
 * ! 이번 LAB에서는 StyledButton 컴포넌트를 사용해야 합니다. (TASK1 참고)
 * ! 이번 LAB에서는 주어진 파일 외에 다른 파일을 수정하거나 생성하지 않습니다.
 * ! Happy Coding :)
 */
import { useState } from 'react';
import StyledButton from './components/StyledButton';

function App() {
  const [tab, setTab] = useState<'all' | 'favorite'>('all');
  const [todos, setTodos] = useState<{ id: number, title: string, isFavorite: boolean }[]>([]);
  return (
    <main className="flex flex-col items-center py-4">
      <h1 className="mt-4 text-4xl">TODO APP</h1>
      <div id="tab-list" role="tab-list" className="mt-4">
        <StyledButton type={tab === 'all' ? 'blue' : 'gray'} onClick={() => setTab('all')} children="전체" />
        <StyledButton type={tab === 'favorite' ? 'blue' : 'gray'} onClick={() => setTab('favorite')} children="관심목록" />
      </div>
      <input
        type="text"
        id="todo-input"
        className="mt-4 border border-gray-300 p-1 placeholder:text-center"
        placeholder="할 일을 입력하세요."
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value) {
            const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
            setTodos([...todos, { id: newId, title: e.currentTarget.value, isFavorite: false }]);
            e.currentTarget.value = '';
          }
        }}
      />
      <div className="mt-2 flex w-96 justify-center">
        {
          /**
           * TASK4: 할 일 목록을 표시합니다.
           * 1. 할 일 목록을 표시합니다.
           * 2. 할 일 목록은 id, title, isFavorite 속성을 가진 객체입니다.
           * 3. 할 일 목록은 ul요소 안의 li 요소로 표시합니다.
           * 4. ul 요소의 속성은 다음과 같습니다.
           *  - role: 'todo-list'로 지정합니다.
           *  - className: 'w-96'로 지정합니다.
           * 5. li 요소의 속성은 다음과 같습니다.
           *  - id: 'todo-할 일의 id'로 지정합니다.
           *  - className: 'grid grid-cols-[40px,_1fr,_60px] justify-items-center border-b border-gray-300 py-2'로 지정합니다.
           * 6. 할 일 목록의 각 요소는 다음과 같은 내용을 **순서대로** 표시합니다.
           *  - 별 버튼: isFavorite 속성이 true인 경우 active-star, false인 경우 star인 StyledButton 버튼
           *  - 할 일 제목: title 속성
           *  - 삭제 버튼: '삭제' 텍스트를 가진 StyledButton 버튼 (red 속성)
           * 7. 별 버튼을 클릭하면 관심목록에 추가됩니다. 다시 클릭하면 관심목록에서 제거됩니다.
           * 8. 삭제 버튼을 클릭하면 해당 할 일을 목록에서 삭제합니다.
           * 9. 할 일 목록이 없는 경우 '목록이 없습니다.' 텍스트를 표시합니다.
           *  - 목록이 없습니다. 텍스트는 p 요소로 표시하며, className은 'text-lg'로 지정합니다.
           * 10. 탭에 따라 전체 목록 또는 관심목록만 표시합니다.
           *  - 전체 탭: tab 상태가 'all'인 경우, isFavorite 속성에 관계없이 모든 할 일을 표시합니다. (기본값)
           *  - 관심목록 탭: tab 상태가 'favorite'인 경우, isFavorite 속성이 true인 할 일만 표시합니다.
           */
          todos.length ? (
            <ul role="todo-list" className="w-96">
              {
                todos.map(todo => (
                  (tab === 'all' || (tab === 'favorite' && todo.isFavorite)) &&
                  <li id={`todo-${todo.id}`} className="grid grid-cols-[40px,1fr,60px] justify-items-center border-b border-gray-300 py-2" key={todo.id}>
                    <StyledButton type={todo.isFavorite ? 'active-star' : 'star'} onClick={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, isFavorite: !t.isFavorite } : t))} children={todo.title} />
                    {todo.title}
                    <StyledButton type="red" onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>삭제</StyledButton>
                  </li>
                ))
              }
            </ul>
          ) : (
            <p className="text-lg">목록이 없습니다.</p>
          )
        }
      </div>
    </main>
  );
}

export default App;

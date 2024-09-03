/**
 * TASK2: ListProps 인터페이스를 선언합니다.
 * AnyForExam 타입을 실제 사용하는 타입으로 대체합니다.
 * - 필수 속성은 records입니다.
 *   - records는 숫자 배열입니다.
 * - 선택 속성은 id입니다.
 */

export interface ListProps {
  records: number[];
  id?: string;
}

/**
 * TASK2: ListItemProps 인터페이스를 선언합니다.
 * AnyForExam 타입을 실제 사용하는 타입으로 대체합니다.
 * - 선택 속성은 children과 index입니다.
 *   - children는 리스트 아이템 내부에 표시할 내용입니다.
 *   - index는 리스트 아이템의 인덱스입니다.
 */
export interface ListItemProps {
  children?: React.ReactNode;
  index?: number;
}

function ListItem(props: ListItemProps) {
  /**
   * TASK2: ListItem 컴포넌트를 완성합니다.
   * - 리스트 아이템의 클래스 이름은 tailwindcss 클래스를 사용하여 생성합니다.
   * - 리스트 아이템의 내부에는 props로 전달받은 children을 출력합니다.
   * - 리스트 아이템의 key 속성은 props로 전달받은 index를 사용합니다.
   */
  /* Your code starts here */
  return (
    <li
      key={props.index}
      className='my-1 flex h-12 w-32 items-center justify-center rounded-sm bg-zinc-300 text-zinc-800'
    >
      {props.children}
    </li>
  );
  /* Your code ends here */
}

function List(props: ListProps) {
  /**
   * TASK2: List 컴포넌트를 완성합니다.
   * - records 배열이 비어있는 경우, ListItem에는 "기록이 없습니다."를 전달하여 출력합니다.
   * - records 배열에 있는 각 요소를 ListItem 컴포넌트로 변환합니다.
   * - 배열이 비어있지 않은 경우, ListItem에는 n번째 기록: m 형식으로 출력합니다.
   * - ListItem 컴포넌트에는 index 속성을 전달하여 각 리스트 아이템의 인덱스를 전달합니다.
   */
  /* Your code starts here */
  return (
    <ul id={props.id} className='mt-4 border-2 border-zinc-500 p-2'>
      {props.records.length === 0 ? (
        <ListItem index={0}>기록이 없습니다.</ListItem>
      ) : (
        props.records.map((record, index) => (
          <ListItem index={index}>
            {`${index + 1}번째 기록: ${record}`}
          </ListItem>
        ))
      )}
    </ul>
  );
  /* Your code ends here */
}

export default List;

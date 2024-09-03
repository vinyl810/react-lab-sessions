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
  children?: string;
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
      className='flex justify-center items-center bg-zinc-300 my-1 rounded-sm w-32 h-12 text-zinc-800'
    >
      {props.children}
    </li>
  );
  /* Your code ends here */
}

function List(props: ListProps) {
  /**
   * TASK2: List 컴포넌트를 완성합니다.
   * - records 배열이 비어있는 경우, ListItem에는 '기록이 없습니다.'를 전달하여 출력합니다.
   * - records 배열에 있는 각 요소를 ListItem 컴포넌트로 변환합니다.
   * - 배열이 비어있지 않은 경우, ListItem에는 n번째 기록: m 형식으로 출력합니다.
   * - ListItem 컴포넌트에는 index 속성을 전달하여 각 리스트 아이템의 인덱스를 전달합니다.
   */
  /* Your code starts here */
  return (
    <ul className='border-2 border-zinc-500 mt-4 p-2'>
      {props.records.length === 0 ? (
        <ListItem children='기록이 없습니다.' />
      ) : (
        props.records.map((record, index) => (
          <ListItem key={index} index={index} children={`${index + 1}번째 기록: ${record}`} />
        ))
      )}
    </ul>
  );
  /* Your code ends here */
}

export default List;
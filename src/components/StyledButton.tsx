/**
 * TASK1-1: StyledButton 컴포넌트의 props를 정의합니다.
 * 1. type: 'blue', 'red', 'gray', 'star', 'active-star' 중 하나의 값을 가져야 합니다. (필수 속성)
 *   - 'blue': 배경색이 파란색, 글자색이 흰색
 *   - 'red': 배경색이 빨간색, 글자색이 흰색
 *   - 'gray': 배경색이 회색
 *   - 'star': 별 아이콘을 표시합니다. (색상은 #CCCCCC)
 *   - 'active-star': 별 아이콘을 표시합니다. (색상은 #ED8A19)
 * 2. children: React 컴포넌트의 자식 컴포넌트입니다. (선택 속성)
 * 3. id: 버튼의 id 속성입니다. (선택 속성)
 * 4. className: 버튼의 클래스 속성입니다. (선택 속성)
 * 5. onClick: 버튼을 클릭했을 때 실행할 함수입니다. (선택 속성)
 *
 * 아래의 AnyForExam 타입은 예시로 작성한 타입입니다. 실제로 사용하는 타입으로 대체해주세요.
 */

interface StyledButtonProps {
  type: 'blue' | 'red' | 'gray' | 'star' | 'active-star';
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
}

function StarIcon({ fill }: {fill: string}) {
  return (
    <svg id="star-icon" width="20" height="20" viewBox="0 0 50 50">
      <path style={{ fill }} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"/>
    </svg>
  );
}

/**
 * TASK1-2: StyledButton 컴포넌트를 완성합니다.
 * 1. type 속성에 따라 버튼의 스타일을 변경합니다. tailwindcss 클래스는 반드시 아래와 같이 사용합니다.
 *   - 'blue': 배경색이 파란색, 글자색이 흰색: 'bg-blue-500 text-white'
 *   - 'red': 배경색이 빨간색, 글자색이 흰색: 'bg-red-500 text-white'
 *   - 'gray': 배경색이 회색: 'bg-gray-300'
 * 2. type 속성이 'star' 또는 'active-star'인 경우 children 대신 별 아이콘을 표시합니다. (StarIcon 컴포넌트 사용)
 *   - 별 아이콘의 fill 속성은 type 속성이 'star'인 경우 #CCCCCC, 'active-star'인 경우 #ED8A19로 지정합니다.
 *   - 반드시 StarIcon 컴포넌트를 사용해야 합니다.
 * 3. type 속성이 'star'인 경우 별 아이콘의 색상은 #CCCCCC로 지정합니다.
 * 4. type 속성이 'active-star'인 경우 별 아이콘의 색상은 #ED8A19로 지정합니다.
 * 5. type 속성이 'blue', 'red', 'gray'인 경우 children 속성을 표시합니다.
 * 6. children 속성이 없는 경우 빈 문자열을 표시합니다.
 * 7. onClick 속성이 있는 경우 버튼을 클릭했을 때 해당 함수를 실행합니다.
 * 8. className 속성이 있는 경우 버튼에 해당 클래스를 추가합니다.
 * 9. id 속성이 있는 경우 버튼에 해당 id를 추가합니다.
 */
function StyledButton({ type, children, onClick, className, id }: StyledButtonProps) {
  return (
    <button
      id={id}
      className={`${type === 'blue' ? 'bg-blue-500 text-white' : type === 'red' ? 'bg-red-500 text-white' : type === 'gray' ? 'bg-gray-300' : ''} ${className}`}
      onClick={onClick}
    >
      {type === 'star' || type === 'active-star' ? <StarIcon fill={type === 'star' ? '#CCCCCC' : '#ED8A19'} /> : children || ''}
    </button>
  );
}

export default StyledButton;
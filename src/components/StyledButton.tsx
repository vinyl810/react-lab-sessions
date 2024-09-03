/**
 * TASK1: StyledButton 컴포넌트의 props를 정의합니다.
 * AnyForExam 타입을 실제 사용하는 타입으로 대체합니다.
 * 필수로 포함되어야 하는 속성은 다음과 같습니다.
 * - children: 버튼 내부에 표시할 내용입니다.
 * - onClick: 버튼 클릭 시 실행할 이벤트 핸들러입니다.
 * - id: 버튼의 id 속성입니다.
 * - className: 버튼의 클래스 이름입니다.
 */

export interface StyledButtonProps {
  /* Your code starts here */
  children?: string;
  onClick?: () => void;
  id?: string;
  className?: string;
  /* Your code ends here */
}

function StyledButton(props: StyledButtonProps) {
  /**
   * TASK1: StyledButton 컴포넌트를 완성합니다.
   * - 버튼의 클래스 이름은 props로 전달받은 className과 tailwindcss 클래스를 조합하여 생성합니다.
   * - 버튼의 내부에는 props로 전달받은 children을 출력합니다.
   * - 이벤트 핸들러는 props로 전달받은 onClick을 사용합니다.
   * - 버튼의 id 속성은 props로 전달받은 id를 사용합니다.
   */
  /* Your code starts here */
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className={`${props.className} flex justify-center items-center bg-zinc-500 my-1 rounded-md w-20 h-8 text-white`}
    >
      {props.children}
    </button >
  );
  /* Your code ends here */
}

export default StyledButton;
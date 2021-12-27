import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('등록버튼을 누르면 props로 전달된 함수를 실행한다.', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Form onClick={onClick} />);

    fireEvent.click(getByText('등록'));

    expect(onClick).toBeCalled();
  });

  it('props로 전달된 내용들을 폼에 출력한다.', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(
      <Form
        onChange={onChange}
        title="홍반장"
        menu="중국집"
        address="판교"
      />,
    );

    expect(getByDisplayValue('홍반장')).not.toBeNull();
    expect(getByDisplayValue('중국집')).not.toBeNull();
    expect(getByDisplayValue('판교')).not.toBeNull();
  });
});

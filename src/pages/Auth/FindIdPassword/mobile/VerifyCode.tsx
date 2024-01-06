import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cn from 'utils/ts/classNames';
import { sendFindEmail, getAccount, findPassword } from 'api/user';
import useInputCheck from 'pages/Auth/FindIdPassword/hook/useInputCheck';
import { RegisterProp, CodeInfo } from 'pages/Auth/FindIdPassword/entity';
import Modal from 'pages/Auth/FindIdPassword/mobile/Modal';
import Input from 'pages/Auth/FindIdPassword/mobile/Input';
import style from './VerifyCode.module.scss';

const CODE = ['first', 'second', 'third', 'fourth'] as const;

export default function VerifyCode({
  register, handleSubmit, setError, email, account,
}: RegisterProp): JSX.Element {
  const {
    isDone, inputRef, buttonRef, preventOverLength, user, setUser,
  } = useInputCheck();
  const [openModal, setOpenModal] = useState<boolean>();
  const param = useParams();
  const navigate = useNavigate();
  const loginOrChangePassword = () => {
    if (isDone) {
      if (param.type === 'id') setOpenModal(true);
      else if (param.type === 'password') navigate('/find-password/change-mobile');
    }
  };
  const findUserInfo = async (parameter: CodeInfo) => {
    const code = parameter.first + parameter.second + parameter.third + parameter.fourth;
    try {
      if (param.type === 'id') {
        const result = await getAccount({ email, code });
        if (result.status === 200) {
          setUser({
            email,
            id: result.data.account,
          });
        }
      } else if (param.type === 'password' && account) {
        const result = await findPassword({ account, email, code });
        if (result.status === 200) {
          sessionStorage.setItem('accessToken', result.data);
        }
      }
      loginOrChangePassword();
    } catch {
      setError('first', { type: 'value' });
    }
  };
  return (
    <div className={style.container}>
      <form
        onSubmit={
          handleSubmit(findUserInfo)
        }
        className={style.form}
      >
        <div className={style.form__container}>
          <div className={style.form__input}>
            {CODE.map((data, idx) => (
              <Input
                register={register}
                inputRef={inputRef}
                preventOverLength={preventOverLength}
                name={data}
                number={idx + 1}
                index={idx}
                key={data}
              />
            ))}
          </div>
          <button
            type="button"
            className={style.form__resend}
            onClick={() => sendFindEmail({ email })}
          >
            인증번호 재발송
          </button>
        </div>
        <button
          type="submit"
          ref={buttonRef}
          className={cn({
            [style.active]: isDone,
            [style.inactive]: true,
          })}
        >
          완료
        </button>
      </form>
      {openModal && (
        <Modal type="아이디">
          {user.email}
          으로
          <br />
          가입된 아이디는
          {' '}
          {user.id}
          입니다
        </Modal>
      )}
    </div>
  );
}

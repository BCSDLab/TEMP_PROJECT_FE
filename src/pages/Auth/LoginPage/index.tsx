/* eslint-disable react/jsx-props-no-spreading */
import { ReactComponent as GoogleIcon } from 'assets/svg/google.svg';
import { ReactComponent as NaverIcon } from 'assets/svg/naver.svg';
import { ReactComponent as KakaoIcon } from 'assets/svg/kakao.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import AuthTitle from 'components/Auth/AuthTitle';
import Copyright from 'components/Auth/Copyright';
import styles from './LoginPage.module.scss';

interface IFormInput {
  id: string;
  pw: string;
  checkbox:boolean;
}

function LoginPage(): JSX.Element {
  const { isMobile } = useMediaQuery();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInput>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <AuthTitle />
        <div className={styles.form}>
          <form className={styles.loginform} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.loginform__login}>로그인</div>
            <input className={styles['login-input']} type="text" id="id" placeholder="아이디" {...register('id', { required: true })} />
            <input className={styles['login-input']} type="password" id="pw" placeholder="비밀번호" {...register('pw', { required: true })} />
            <label htmlFor="checkbox" className={styles.autologin}>
              <div className={styles.autologin__text}>자동 로그인</div>
              <input type="checkbox" id="checkbox" {...register('checkbox')} className={styles.checkbox} />
              <div className={styles.dot} />
            </label>
            <button type="submit" disabled={!isValid} className={styles.loginform__button}>
              로그인
            </button>
          </form>
          <div className={styles.help}>
            <Link className={styles.help__link} to="/">아이디 찾기</Link>
            <Link className={styles.help__link} to="/">비밀번호 찾기</Link>
            <Link className={styles.help__link} to="/signup">회원가입</Link>
          </div>
          <div className={styles.social}>
            <div className={styles.social__title}>SNS계정으로 로그인하기</div>
            <div className={styles.social__link}>
              <Link className={styles.social__google} to="/"><GoogleIcon /></Link>
              <Link className={styles.social__kakao} to="/"><KakaoIcon /></Link>
              <Link className={styles.social__naver} to="/"><NaverIcon /></Link>
            </div>
          </div>
        </div>
        {!isMobile && <Copyright />}
      </div>
    </div>
  );
}

export default LoginPage;

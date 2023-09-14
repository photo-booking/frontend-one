import { LinkSignIn } from '../../components/LinkSignin/LinkSignin';
import google_logo from '../../images/icon_google.svg';
import vk_logo from '../../images/icon_vk_auth.svg';

export const AuthIntegration = () => {
  const client_id_google =
    '1091642644631-3nfthndgf7bsge2f1rckiqpqm0ddtpst.apps.googleusercontent.com';
  const client_id_vk = '51732243';
  const redirect_url = 'https://photo-market.acceleratorpracticum.ru/sign-in';
  return (
    // <>
    //   <LinkSignIn
    //     url={`https://photo-market.acceleratorpracticum.ru/api/social/login/google-oauth2/`}
    //     logo={google_logo}
    //     title="Войти через Google"
    //   />
    //   <LinkSignIn
    //     url={`https://photo-market.acceleratorpracticum.ru/api/social/login/vk-oauth2/`}
    //     logo={vk_logo}
    //     title="Войти через VK"
    //   />
    // </>

    <>
      <LinkSignIn
        url={`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${redirect_url}&client_id=${client_id_google}`}
        logo={google_logo}
        title="Войти через Google"
      />

      <LinkSignIn
        url={`https://oauth.vk.com/authorize?client_id=${client_id_vk}&display=page&redirect_uri=${redirect_url}&scope=email&response_type=code&v=5.131`}
        logo={vk_logo}
        title="Войти через VK"
      />
    </>
  );
};

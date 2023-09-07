import { LinkSignIn } from '../../components/LinkSignin/LinkSignin';
import google_logo from '../../images/icon_google.svg';
import vk_logo from '../../images/icon_vk_auth.svg';

export const AuthIntegration = () => {
  return (
    <>
      <LinkSignIn
        url={`https://photo-market.acceleratorpracticum.ru/api/social/login/google-oauth2/`}
        logo={google_logo}
        title="Войти через Google"
      />
      <LinkSignIn
        url={`https://photo-market.acceleratorpracticum.ru/api/social/login/vk-oauth2/`}
        logo={vk_logo}
        title="Войти через VK"
      />
    </>
  );
};

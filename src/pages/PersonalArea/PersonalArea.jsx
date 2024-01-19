import './PersonalArea.css';
import { ProfileNav } from '../../components/ProfileNav/ProfileNav';

export const PersonalArea = props => {
  const {
    isClient,
    onSubmitPersonalInfo,
    onSubmitPersonalAvatar,
    onSubmitPersonalContacts,
    onDeletePersonalAvatar,
    onSubmitPersonalPassword,
    onSubmitDeleteAccount
  } = props;

  return (
    <div className="personal-area">
      <ProfileNav
        isClient={isClient}
        onSubmitPersonalInfo={onSubmitPersonalInfo}
        onSubmitPersonalAvatar={onSubmitPersonalAvatar}
        onSubmitPersonalContacts={onSubmitPersonalContacts}
        onDeletePersonalAvatar={onDeletePersonalAvatar}
        onSubmitPersonalPassword={onSubmitPersonalPassword}
        onSubmitDeleteAccount={onSubmitDeleteAccount}
      />
    </div>
  );
};

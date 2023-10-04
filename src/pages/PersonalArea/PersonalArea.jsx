import './PersonalArea.css';
import { ProfileNav } from '../../components/ProfileNav/ProfileNav';

export const PersonalArea = props => {
  const {
    isClient,
    onSubmitPersonalInfo,
    onSubmitPersonalAvatar,
    onSubmitPersonalContacts,
    onDeletePersonalAvatar,
    onSubmitPersonalPassword
  } = props;

  return (
    <div className="">
      <ProfileNav
        isClient={isClient}
        onSubmitPersonalInfo={onSubmitPersonalInfo}
        onSubmitPersonalAvatar={onSubmitPersonalAvatar}
        onSubmitPersonalContacts={onSubmitPersonalContacts}
        onDeletePersonalAvatar={onDeletePersonalAvatar}
        onSubmitPersonalPassword={onSubmitPersonalPassword}
      />
    </div>
  );
};

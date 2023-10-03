import './PersonalArea.css';
import { ProfileNav } from '../../components/ProfileNav/ProfileNav';

export const PersonalArea = (props) => {
  const { isClient, onSubmitPersonalInfo, onSubmitPersonalAvatar } = props;

  return (
    <div className=''>
      <ProfileNav isClient={isClient} onSubmitPersonalInfo={onSubmitPersonalInfo}
      onSubmitPersonalAvatar={onSubmitPersonalAvatar}/>
    </div>
    
  );
};
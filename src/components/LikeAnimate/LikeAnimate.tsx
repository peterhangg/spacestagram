import * as React from 'react';
import { useLocation } from 'react-router-dom';
import RedHeart from '../../assets/red-heart.png';
import { LikeAnimateContainer, Fade } from './styles';

interface LikeAnimateProps {
  liked: boolean;
}

const LikeAnimate: React.FC<LikeAnimateProps> = ({ liked }) => {
  const [animate, setAnimate] = React.useState<boolean>(false);
  const location = useLocation();
  React.useEffect(() => {
    if (liked && location.pathname === '/') {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  }, [liked, location.pathname]);
  return (
    <LikeAnimateContainer>
      <Fade $in={animate}>
        <img src={RedHeart} alt="Red heart" />
      </Fade>
    </LikeAnimateContainer>
  );
};

export default LikeAnimate;

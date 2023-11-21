import { Transition } from 'react-transition-group';
import { useState, useRef, useEffect } from 'react';


const duration = 700;

const defaultStyle = {
  transition: `transform ${duration}ms ease`,
  transform: 'translateX:100%',
};

const transitionStyles = {
  entering: { transform: 'translateX(0%)' },
  entered: { transform: 'translateX(0%)' },
  exiting: { transform: 'translateX(100%)' },
  exited: { transform: 'translateX(100%)' },
  unmounted: {}
};

type Props = {
  isActive: boolean,
  onCartTriggerHandler: (state: boolean) => void,
}

const CartTransition = ({ isActive, onCartTriggerHandler }: Props) => {
  const nodeRef = useRef<any>(null);
  const [isChangeable, setIsChangeable] = useState(false);

  const handleClick = (e: MouseEvent, ref: React.MutableRefObject<any>) => {
    if (ref.current && !ref.current.contains(e.target) && isChangeable) {
      onCartTriggerHandler(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", event => handleClick(event, nodeRef));

    return () => {
      document.removeEventListener("click", event => handleClick(event, nodeRef));
    };
  })

  return (
    <Transition
      nodeRef={nodeRef}
      in={isActive}
      unmountOnExit={true}
      timeout={duration}
      onEntered={() => setIsChangeable(true)}
      onExited={() => setIsChangeable(false)}>

      {(state) => (
        
      )}
    </Transition >
  )
}

export default CartTransition
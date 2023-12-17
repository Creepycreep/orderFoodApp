import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { useClickOusideHandler } from '../../hooks/useClickOusideHandler';
import CartList from '../CartList/CartList';

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
  onCartTriggerHandler: any,
}

const Cart = ({ isActive, onCartTriggerHandler }: Props) => {
  const nodeRef = useRef<any>(null);
  const [isChangeable, setIsChangeable] = useState(false);

  useClickOusideHandler(nodeRef, isChangeable, onCartTriggerHandler)

  return (
    <Transition
      nodeRef={nodeRef}
      in={isActive}
      unmountOnExit={true}
      timeout={duration}
      onEntered={() => setIsChangeable(true)}
      onExited={() => setIsChangeable(false)}>

      {(state) => (
        <div
          ref={nodeRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className="bg-green-100 top-[74px] right-0 fixed w-full lg:w-1/3 h-[calc(100vh-74px)] p-6 pb-0 lg:max-w-md overflow-x-auto">
          <div className='h-full flex flex-col'>
            <CartList />
          </div>
        </div>
      )}
    </Transition >
  )
}

export default Cart
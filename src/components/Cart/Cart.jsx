import { Transition } from 'react-transition-group';
import { useRef } from 'react';

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button"

const duration = 700;

const defaultStyle = {
  transition: `transform ${duration}ms ease`,
  transform: 'translateX:100%',
};

const transitionStyles = {
  entering: { transform: 'translateX(0%)', },
  entered: { transform: 'translateX(0%)', },
  exiting: { transform: 'translateX(100%)', },
  exited: { transform: 'translateX(100%)', },
};

const Cart = ({ isActive }) => {
  const nodeRef = useRef(null);

  return (
    <Transition
      nodeRef={nodeRef}
      in={isActive}
      unmountOnExit={true}
      timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className={`fixed w-screen h-screen top-[74px] z-10 `}>

          {/* <div className="bg-green-950/30 fixed w-screen h-screen inset-0"></div> */}

          <div className="bg-green-100 w-full lg:w-1/3 h-[calc(100vh-74px)] ml-auto p-6 font-medium lg:max-w-md overflow-scroll">
            <div className="flex flex-col gap-8 pb-6">
              <h2 className="text-xl">My Order</h2>
              <div className='flex flex-col gap-8 mb-auto'>
                <Card />
                <Card />

              </div>
              <Button />
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default Cart
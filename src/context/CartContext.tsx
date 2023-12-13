import { createContext } from 'react';
import CartStore from '../components/Cart/CartStore';

const Order = createContext<any | null>(null);

export default Order

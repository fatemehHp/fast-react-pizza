import React from 'react';
import Button from '../../ui/Button';
import { increaseItemQuantity } from './cartSlice';
import { decreaseItemQuantity } from './cartSlice';
import { useDispatch } from 'react-redux';

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handeleIncreseItemQuantity(pizzaId) {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handeleDecreaseItemQuantity(pizzaId) {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className='flex gap-1 items-center'>
      <Button type='round' onClick={() => handeleDecreaseItemQuantity(pizzaId)}>
        -
      </Button>
      2
      <Button type='round' onClick={() => handeleIncreseItemQuantity(pizzaId)}>
        +
      </Button>
    </div>
  );
}

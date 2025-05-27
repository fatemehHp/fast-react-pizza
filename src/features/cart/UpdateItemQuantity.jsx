import React from 'react';
import Button from '../../ui/Button';
import { increaseItemQuantity } from './cartSlice';
import { decreaseItemQuantity } from './cartSlice';
import { getCurrentQuantity } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector((state) =>
    getCurrentQuantity(state, pizzaId),
  );

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
      {currentQuantity}
      <Button type='round' onClick={() => handeleIncreseItemQuantity(pizzaId)}>
        +
      </Button>
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cartItems = useSelector((state) => state.cart.cart);
  const isToCartitem = cartItems.find((item) => item.pizzaId === id);

  const dispatch = useDispatch();
  const selectedAddToCart = {
    pizzaId: id,
    name,
    unitPrice,
  };

  function handleAddToCart(selectedAddToCart) {
    dispatch(addItem(selectedAddToCart));
  }

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className='flex grow flex-col pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm capitalize italic text-stone-500'>
          {ingredients.join(', ')}
        </p>
        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm font-medium uppercase text-stone-500'>
              Sold out
            </p>
          )}
          <div className='flex gap-2  '>
            {isToCartitem ? <UpdateItemQuantity pizzaId={id} /> : null}

            <Button
              type='small'
              onClick={() => handleAddToCart(selectedAddToCart)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

import React from 'react';

const Paymentsummary = ({ deliveryOption, deliveryCost, items }) => {
  // Calculate total price based on items' quantities and prices
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="w-full mb-14">
      <div className="text-left w-full p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
        {items.map((item, index) => (
          <div key={index}>
            <div className="mb-2 text-black">
              {item.quantity}X {item.name} <span className="float-right">{item.price * item.quantity},00</span>
            </div>
            <hr className="border-t border-gray-300 my-2" />
          </div>
        ))}
        <div className="mb-2 text-black">
          {deliveryOption === 'delivery' ? 'Delivery' : 'Pick Up'} <span className="float-right">{deliveryCost}</span>
        </div>
        <hr className="border-t border-gray-300 my-2" />
        <div className="mt-4 font-bold text-black">
          Total <span className="float-right">{totalPrice},00</span>
        </div>
      </div>
    </div>
  );
}

export default Paymentsummary;

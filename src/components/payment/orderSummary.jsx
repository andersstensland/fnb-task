import React from 'react';
import Link from 'next/link';

import { Button } from "@/components/ui/button";



const OrderSummary = ({}) => {
  return (
    <div className='mt-7'>
        <h2 className="block text-lm font-bold mb-2">Your order</h2>
        <div className="flex justify-between">
            <p className="mr-auto font-bold">Products</p>
            <p className="ml-auto font-bold">Price (Nok)</p>
        </div>
            <hr class="mt-1.5 mb-6 h-0.5 border-t-0 bg-neutral-300 dark:bg-/10" />
            <Button
          variant="solid"
          className="bg-orange-300 text-white font-bold w-full py-3 mb-3"
        >
          <Link className='text-black' href="/menu">See the menu</Link>
        </Button>
    </div>
  )
}

export default OrderSummary
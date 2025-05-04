import React, { useState } from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import "./siparis.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function SiparisToplami({ toppings = [], basePrice = 85.50 }) {
  const [quantity, setQuantity] = useState(1);

  // Calculate prices
  const toppingPrice = toppings.length * 5; // 5₺ per topping
  const totalPrice = (basePrice + toppingPrice) * quantity;

  return (
    <div className='siparis-div'>
      <div className='siparis-form'>
        {/* Quantity Selector */}
        <div className='button-form'>
          <Button
            color="warning"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
          >
            -
          </Button>
          <Label className='p-number'>{quantity}</Label>
          <Button
            color="warning"
            onClick={() => setQuantity(q => q + 1)}
          >
            +
          </Button>
        </div>

        {/* Single Order Summary Section */}
        <div className='summary-section'>
          <h3>Sipariş Toplamı</h3>
          <div className='price-row'>
            <span>Seçimler</span>
            <span>{toppingPrice.toFixed(2)} ₺</span>
          </div>
          <div className='price-row total'>
            <span>Toplam</span>
            <span>{totalPrice.toFixed(2)} ₺</span>
          </div>

          <Button
            color="warning"
            className='order-button'
            block
            type="submit"
          >
            SİPARİŞ VER
          </Button>


        </div>
      </div>
    </div>
  );
}

export default SiparisToplami;
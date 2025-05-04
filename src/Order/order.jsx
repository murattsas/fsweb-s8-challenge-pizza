import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SiparisToplami from './Siparis';
import './order.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Order() {
  const [size, setSize] = useState('-');
  const [dough, setDough] = useState('-');
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState('');
  const [toplamTutar, setToplamTutar] = useState(85.50); // Base price
  const history = useHistory();

  const availableToppings = [
    "Pepperoni", "Sosis", "Kanada Jambonu",
    "Tavuk Izgara", "Biber", "Domates",
    "Mısır", "Sucuk", "Jalapeno", "Sarımsak",
    "Ananas", "Kabak", "Soğan", "Zeytin"
  ];

  // Price calculation based on selections
  useEffect(() => {
    calculateTotal();
  }, [size, dough, toppings]);

  const calculateTotal = () => {
    let total = 85.50; // Base price
    
    // Size pricing
    if (size === 'orta') {
      total += 10.00;
    } else if (size === 'büyük') {
      total += 15.00;
    }
    
    // Dough pricing
    if (dough === 'İnce') {
      total += 5.00;
    } else if (dough === 'Kalın') {
      total += 7.00;
    }
    
    // Toppings (5₺ each)
    total += toppings.length * 5.00;
    
    setToplamTutar(total);
  };

  const handleToppingChange = (malzeme) => {
    if (toppings.includes(malzeme)) {
      setToppings(toppings.filter(item => item !== malzeme));
    } else {
      if (toppings.length < 10) {
        setToppings([...toppings, malzeme]);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const gonderilecekForm = {
      size,
      dough,
      toppings,
      note, 
      totalPrice: toplamTutar,
      extraPrice: (toppings.length * 5.00) + 
                 (size === 'orta' ? 10.00 : size === 'büyük' ? 15.00 : 0) +
                 (dough === 'İnce' ? 5.00 : dough === 'Kalın' ? 7.00 : 0)
    };

    axios.post(
      "https://reqres.in/api/pizza",
      gonderilecekForm,
      {
        headers: {
          "x-api-key": "reqres-free-v1"
        }
      }
    ).then((res) => {
      console.log("gonderilecek Form", gonderilecekForm);
      history.push({
        pathname: "/success",
        state: gonderilecekForm
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="order-container">
      <div className="pizza-card">
        <div className="pizza-header">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="price-rating">
            <h2 className="price">85.50₺</h2>
          </div>
        </div>

        <p className="pizza-description">
          Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. <i>Küçük bir pizzaya bazen pizzetta denir.</i>
        </p>

        <Form onSubmit={handleSubmit}>
          {/* Size Selection */}
          <FormGroup className="form-section">
            <h3 className="section-title">Boyut Seç *</h3>
            <div className="size-options">
              {['Küçük', 'Orta', 'Büyük'].map((sizeOption) => (
                <Label check key={sizeOption} className="size-option">
                  <Input
                    type="radio"
                    name="size"
                    value={sizeOption.toLowerCase()}
                    checked={size === sizeOption.toLowerCase()}
                    onChange={() => setSize(sizeOption.toLowerCase())}
                    required
                  />
                  {sizeOption}
                </Label>
              ))}
            </div>
          </FormGroup>

          {/* Dough Selection */}
          <FormGroup className="form-section">
            <h3 className="section-title">Hamur Seç *</h3>
            <Input
              type="select"
              className="dough-select"
              value={dough}
              onChange={(e) => setDough(e.target.value)}
              required
            >
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </Input>
          </FormGroup>

          {/* Toppings Selection */}
          <FormGroup className="form-section">
            <h3 className="section-title">Ek Malzemeler</h3>
            <p className="toppings-info">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

            <div className="toppings-grid">
              {availableToppings.map((topping) => (
                <Label check key={topping} className="topping-item">
                  <Input
                    type="checkbox"
                    checked={toppings.includes(topping)}
                    onChange={() => handleToppingChange(topping)}
                    disabled={toppings.length >= 10 && !toppings.includes(topping)}
                  />
                  {topping}
                </Label>
              ))}
            </div>
          </FormGroup>

          {/* Order Note */}
          <FormGroup className="form-section">
            <Label className="section-title">Sipariş Notu</Label>
            <Input
              type="textarea"
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="order-note"
            />
          </FormGroup>

          <SiparisToplami toppings={toppings} basePrice={85.50} totalPrice={toplamTutar} />
          
          
        </Form>
      </div>
    </div>
  );
}

export default Order;
import { useLocation } from 'react-router-dom';
import './success.css';

function Success() {
  const location = useLocation();
  const {
    size = '',
    dough = '',
    toppings = [],
    note = '',
    totalPrice = 0,
    extraPrice = 0
  } = location.state || {};

  const sizeNames = {
    small: 'Küçük',
    medium: 'Orta',
    large: 'Büyük'
  };

  const doughNames = {
    normal: 'Normal',
    thin: 'İnce',
    thick: 'Kalın'
  };

  return (
    <div className="success-container">
      <div className="success-header">
        <h1>Siparişiniz Alındı!</h1>
        <p>Teşekkür ederiz!</p>
      </div>
      
      <div className="order-summary">
        <h2>Sipariş Detayları</h2>

        <div className="detail-section">
          <div className="detail-row">
            <span className="detail-label">Boyut:</span>
            <span className="detail-value">{size}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Hamur:</span>
            <span className="detail-value">{dough}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Ek Malzemeler:</span>
            <span className="detail-value">
              {toppings.length > 0 ? (
                toppings.map((t, i) => (
                  <strong key={i}>{t}{i < toppings.length - 1 ? ', ' : ''}</strong>
                ))
              ) : (
                <em>Ek malzeme seçilmedi</em>
              )}
            </span>
          </div>

          {note && (
            <div className="detail-row">
              <span className="detail-label">Sipariş Notu:</span>
              <span className="detail-value">{note}</span>
            </div>
          )}
        </div>

        <div className="price-summary">
          <div className="price-row">
            <span>Ekstra Ücret:</span>
            <span>{extraPrice.toFixed(2)}₺</span>
          </div>
          <div className="price-row total">
            <span>Toplam Tutar:</span>
            <span>{totalPrice.toFixed(2)}₺</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
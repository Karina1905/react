import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const WeatherModal = ({ weather, onClose }) => {
  const {theme} = useContext(ThemeContext);

  if (!weather) return null;
const modalClass = theme ==='light'
? 'modal-content bg-light'
: 'modal-content bg-primary-subtle';

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className='modal-dialog'>
        <div className={modalClass}>
          <div className='modal-header'>
     <h5 className='modal-title'>
        {weather.location.name}, {weather.location.country}</h5>
          <button
              type="button"
              className={`btn-close ${theme === 'dark' ? 'btn-close-white' : ''}`}
              onClick={onClose}
            />
            </div>
            <div className='modal-body'> <p>
        Температура: <b>{weather.current.temp_c} °C</b>
      </p>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />
      <p>
        Вітер: <b>{weather.current.wind_kph} км/год</b>
      </p>
      <p>
        Опис: <b>{weather.current.condition.text}</b>
      </p>
    </div></div></div></div>
     
  );
};

export default WeatherModal;

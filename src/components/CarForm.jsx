import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from '../features/cars/carsSlice';

function CarForm() {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim()) {
            setError("Marka boş olamaz!");
            return;
        }

        const numericValue = parseFloat(value);
        if (isNaN(numericValue) || numericValue <= 0) {
            setError("Fiyat geçerli bir sayı olmalı ve sıfırdan büyük olmalıdır!");
            return;
        }

        setError("");

        dispatch(addCar({ name, value: numericValue }));

        setName("");
        setValue("");
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle">Araba Ekle</h4>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Marka</label>
                    <input
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="label">Fiyat</label>
                    <input
                        className="input"
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className="field">
                    <button className="button is-link">Gönder</button>
                </div>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default CarForm;

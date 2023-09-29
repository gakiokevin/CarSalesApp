import "./form.css";
const Form = ({ onFormsubmit, onCarInfoChange, carDetails }) => {
  return (
    <form action="" onSubmit={onFormsubmit}>
      <div>
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={carDetails.make}
          onChange={onCarInfoChange}
          required
        />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={carDetails.model}
          onChange={onCarInfoChange}
          required
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={carDetails.year}
          onChange={onCarInfoChange}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={carDetails.price}
          onChange={onCarInfoChange}
          required
        />
      </div>
      <div>
        <label htmlFor="mileage">Mileage:</label>
        <input
          type="text"
          id="mileage"
          name="mileage"
          value={carDetails.mileage}
          onChange={onCarInfoChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          value={carDetails.image}
          onChange={onCarInfoChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;

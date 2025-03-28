function Filter({ onChangeFilter }) {
  const handleChange = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Busca tu país" onChange={handleChange} />
    </div>
  );
}

export default Filter;

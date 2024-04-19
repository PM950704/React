function handleImageChange(e) {
  setPerson({
    ...person,
    artwork: {
      ...person.artwork,
      image: e.target.value,
    },
  });
}
return (
  <>
    <label>
      Name:
      <input value={person.name} onChange={handleNameChange} />
    </label>
    <label>
      Title:
      <input value={person.artwork.title} onChange={handleTitleChange} />
    </label>
    <label>
      City:
      <input value={person.artwork.city} onChange={handleCityChange} />
    </label>
    <label>
      Image:
      <input value={person.artwork.image} onChange={handleImageChange} />
    </label>
    <p>
      <i>{person.artwork.title}</i>
      {' by '}
      {person.name}
      <br />
      (located in {person.artwork.city})
    </p>
    <img src={person.artwork.image} alt={person.artwork.title} />
  </>
);

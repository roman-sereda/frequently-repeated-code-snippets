const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

// example

function NameForm(props) {
  const { value, bind, reset } = useInput('');

  const handleSubmit = (evt) => {
    ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" {...bind} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

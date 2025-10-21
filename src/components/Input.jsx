const Input = ({input}) => {
  return (
        <input
          type="text"
          value={input || ""}
          className="form-control mb-3 text-end"
          readOnly
        />
  )
}

export default Input
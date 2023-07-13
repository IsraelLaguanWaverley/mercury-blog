const Menu = ({ menus }) => {
  return (
    <ul>
      {menus.map((menu, index) => (
        <li key={index}>{menu}</li>
      ))}
    </ul>
  )
}

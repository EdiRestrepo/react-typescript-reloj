interface HeaderProps {
    name: string
}

export const Header = ({name}: HeaderProps) => {
  return (
    <div className="flex bg-slate-100 py-4 h-20 items-center justify-between">
        <h1>{name}</h1> 
        <button>Login</button>
    </div>
  )
}

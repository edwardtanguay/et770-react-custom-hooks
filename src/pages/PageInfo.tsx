import { useToggle } from "../hooks/useToggle";

export const PageInfo = () => {
	const [isOnline, toggleIsOnline] = useToggle();
	return (
		<>
		<div className="flex gap-3 items-center"><button onClick={() => toggleIsOnline()}>sign in/out</button> <span className="text-2xl">{isOnline ? 'online' : 'offline'}</span></div>
		</>
	)
}

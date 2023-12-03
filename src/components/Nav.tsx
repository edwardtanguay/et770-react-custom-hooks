import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-slate-500 px-4 py-2 content">
			<li><NavLink to="/toggle">Toggle</NavLink></li>
			<li><NavLink to="/fetch">Fetch</NavLink></li>
			<li><NavLink to="/local-storage">Local Storage</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</nav>;
};

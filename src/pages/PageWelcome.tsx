import { IJob, ISkill } from "../components/interfaces";
import { useFetch } from "../hooks/useFetch";

export const PageWelcome = () => {
	const { items: skills } = useFetch<ISkill[]>(
		"https://edwardtanguay.vercel.app/share/skills_with_id.json"
	);
	const { items: jobs } = useFetch<IJob[]>(
		"https://edwardtanguay.vercel.app/share/jobs.json"
	);

	return (
		<>
			<p>There are {skills.length} skills.</p>
			<p>There are {jobs.length} jobs.</p>
		</>
	);
};

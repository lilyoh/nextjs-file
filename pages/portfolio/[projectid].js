import { useRouter } from 'next/router';

function PortfolioProjectPage() {
	const router = useRouter();

	console.log(router.pathname);
	console.log(router.query);

	const projectid = router.query.projectid;

	return (
		<div>
			<h1>The Portfolio Project : {projectid}</h1>
		</div>
	);
}

export default PortfolioProjectPage;

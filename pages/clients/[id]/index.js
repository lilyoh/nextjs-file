import { useRouter } from 'next/router';

function ClientProjectsPage() {
	const router = useRouter();

	function loadProjectHandler() {
		// loading data...
		router.push({
			pathname: '/clients/[id]/[clientprojectid]',
			query: { id: 'max', clientprojectid: 'projecta' },
		});
	}

	return (
		<div>
			<h1>The Projects of a Given Client: {router.query.id}</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}

export default ClientProjectsPage;

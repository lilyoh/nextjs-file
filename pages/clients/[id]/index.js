import { useRouter } from 'next/router';

function ClientProjectsPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The Projects of a Given Client: {router.query.id}</h1>
		</div>
	);
}

export default ClientProjectsPage;

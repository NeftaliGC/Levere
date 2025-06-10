import '../styles/App.scss';
import Nav from '../components/Nav.tsx';
import Split from 'react-split';

function App() {
	return (
		<div className="app-container">
			<div className="navbar">
				<Nav />
			</div>
			<Split
				className="split-container"
				sizes={[70, 30]} // Porcentaje inicial
				minSize={300} // Ancho mínimo por panel
				gutterSize={15} // Espacio entre columnas
			>
				<div className="main-content">
					<h1>Levere Project</h1>
					<p>
						This is a simple React application using Vite as the build tool.
						Click on the navigation buttons to explore different sections.
					</p>
				</div>
				<div className="secondary-content">
					<p>
						Edit <code>src/view/pages/App.tsx</code> and save to test HMR
					</p>
					<p className="read-the-docs">
						Click on the Vite and React logos to learn more
					</p>
				</div>
			</Split>
		</div>
	);
}

export default App;

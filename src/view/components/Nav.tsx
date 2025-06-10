import Button from './Button';
import '../styles/Nav.scss';
import HomeIcon from '@/assets/home.svg';
import SalesIcon from '@/assets/sale.svg';
import ProductsIcon from '@/assets/products.svg';
import PurchasesIcon from '@/assets/purchases.svg';
import BillsIcon from '@/assets/bills.svg';
import StadisticsIcon from '@/assets/stadistics.svg';
import ConfigIcon from '@/assets/config.svg';

function Nav() {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Button className="button-nav" icon={<HomeIcon />}>
						Inicio
					</Button>
				</li>
				<li>
					<Button className="button-nav" icon={<SalesIcon />}>
						Ventas
					</Button>
				</li>
				<li>
					<Button className="button-nav" icon={<ProductsIcon />}>
						Productos
					</Button>
				</li>
				<li>
					<Button className="button-nav" icon={<PurchasesIcon />}>
						Compras
					</Button>
				</li>
				<li>
					<Button className="button-nav" icon={<BillsIcon />}>
						Gastos
					</Button>
				</li>
				<li>
					<Button className="button-nav" icon={<StadisticsIcon />}>
						Reportes
					</Button>
				</li>

				<li>
					<Button className="button-nav" icon={<ConfigIcon />}>
						Configuración
					</Button>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

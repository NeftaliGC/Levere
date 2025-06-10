import '../styles/Button.scss';

function Button({
	children,
	className = '',
	icon,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}) {
	return (
		<button className={`${className}`} onClick={onClick}>
			{icon && <span className="icon-button">{icon}</span>}
			{children}
		</button>
	);
}

export default Button;

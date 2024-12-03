import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ label, count, bg }) => {
    return (
        <Link to="/allTask">
            <div className="w-full h-32 bg-white p-5 shadow-md rounded-lg flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-gray-600 uppercase font-medium">{label}</p>
                    <span className="text-3xl font-bold text-gray-800">{count}</span>
                    <span className="text-xs text-gray-400">Last month</span>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${bg} text-xl font-bold`}>
                    {label.charAt(0)}
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    bg: PropTypes.string.isRequired,
};

export default Card;

import {FiPhone, FiMapPin, FiMail} from 'react-icons/fi';

const contacts = {
    city: {
        id: 1,
        name: 'Набережные Челны',
        icon: <FiMapPin/>,
    },
    email: {
        id: 2,
        name: 'melkiy-dude01@yandex.ru',
        icon: <FiMail/>,
    },
    phone: {
        id: 3,
        name: '+7 917 876 48 46',
        phone: 'tel:+79178764846',
        icon: <FiPhone/>,
    },
};

const ContactDetails = () => {
    return (
        <div className="w-full lg:w-1/2">
            <div className="text-center max-w-xl px-6">
                <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                    Контакты
                </h2>
                <ul className="font-general-regular">
                    <li className="flex justify-center" key={contacts.city.id}>
                        <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                            {contacts.city.icon}
                        </i>
                        <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contacts.city.name}
							</span>
                    </li>

                    <li className="flex justify-center" key={contacts.email.id}>
                        <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                            {contacts.email.icon}
                        </i>
                        <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contacts.email.name}
							</span>
                    </li>

                    <li className="flex justify-center" key={contacts.phone.id}>
                        <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                            {contacts.phone.icon}
                        </i>
                        <a href={contacts.phone.phone} className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contacts.phone.name}
							</a>
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default ContactDetails;

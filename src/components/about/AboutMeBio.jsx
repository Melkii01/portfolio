import profileImage from '../../images/profile.jpg';
import {useContext} from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
    const {aboutMe} = useContext(AboutMeContext);

    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <img src={profileImage} className="rounded-lg w-96" alt=""/>
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMe.map((bio) => (

                    <>
                        <h3 className="mb-4 font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light"
                        >
                            {bio.title}
                        </h3>

                        <p
                            className="mb-6 text-ternary-dark dark:text-ternary-light text-lg"
                        >
                            {bio.bio}
                        </p>

                        <ul className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
                            {bio.skills.map(skill => (
                                <>
                                    <li className="text-ternary-dark dark:text-ternary-light text-lg">
                                        &#8212; {skill}
                                    </li>
                                </>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
        </div>
    );
};

export default AboutMeBio;

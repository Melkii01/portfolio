// Import images
import Image1 from '../images/spa-expense-income/1.png';
import Image2 from '../images/spa-expense-income/2.png';
import Image3 from '../images/spa-expense-income/3.png';
import Image5 from '../images/web-project-1.jpg';
// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';

import FreelanceStudioImageMain from '../images/freelance-studio/main.png';
import TeaImageMain from '../images/tea/main.png';
import HookahImageMain from '../images/hookah/main.png';
import ClubImageMain from "../images/club_4_horse/main.png";

export const incomeExpenseProjectData = {
    ProjectHeader: {
        title: 'Доходы и расходы',
        publishDate: '1 Февраля, 2024',
        tags: 'Админка',
    },
    ProjectImages: [
        {
            id: 1,
            title: 'Картинка',
            img: Image1,
        },
        {
            id: 2,
            title: 'Картинка',
            img: Image2,
        },
        {
            id: 3,
            title: 'Картинка',
            img: Image3,
        },
    ],
    ProjectInfo: {
        ClientHeading: 'О проекте',
        CompanyInfo: [
                      {
                id: 1,
                title: 'Ссылка на GIT',
                details: 'репозиторий',
                url: 'https://github.com/Melkii01/project_on_JS_SPA',
            },
                      {
                id: 2,
                title: 'Ссылка на сайт',
                details: 'отсутствует',
                url: '',
            },
        ],
        ObjectivesHeading: 'Objective',
        ObjectivesDetails:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        Technologies: [
            {
                title: 'Инструменты',
                techs: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Webpack',
                    'ChartJS'
                ],
            },
        ],
        ProjectDetailsHeading: 'Описание',
        ProjectDetails: [
            {
                id: 1,
                details: 'SPA приложение для подсчета доходов и расходов.'
            },
            {
                id: 2,
                details:'Можно добавлять/удалять категорию доходов и расходов, создавать совершенные операции по этим категориям, вести свой учёт, видеть все это на круглом графике от библиотеки chartJS'
            },
            {
                id: 3,
                details:'Проект создан, только на нативном JS. Есть адаптив.'
            },
        ],
        SocialSharingHeading: 'Share This',
        SocialSharing: [
            {
                id: 1,
                name: 'Twitter',
                icon: <FiTwitter/>,
                url: 'https://twitter.com/real',
            },
            {
                id: 2,
                name: 'Instagram',
                icon: <FiInstagram/>,
                url: 'https://instagram.com/real',
            },
            {
                id: 3,
                name: 'Facebook',
                icon: <FiFacebook/>,
                url: 'https://facebook.com/',
            },
            {
                id: 4,
                name: 'LinkedIn',
                icon: <FiLinkedin/>,
                url: 'https://linkedin.com/',
            },
            {
                id: 5,
                name: 'Youtube',
                icon: <FiYoutube/>,
                url: 'https://www.youtube.com/c/Studio',
            },
        ],
    },
    RelatedProject: {
        title: 'Другие проекты',
        Projects: [
            {
                id: 1,
                title: 'Клуб 4 коней',
                img: ClubImageMain,
                url: 'club-4-horse',
            },
            {
                id: 2,
                title: 'Кальянная',
                img: HookahImageMain,
                url: 'hookah',
            },
            {
                id: 3,
                title: 'Чай',
                img: TeaImageMain,
                url: 'tea',
            },
            {
                id: 4,
                title: 'Freelance Studio',
                img: FreelanceStudioImageMain,
                url: 'freelance-studio',
            },
        ],
    },
};

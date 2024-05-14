// Import images
import Image1 from '../images/articles/1.png';
import Image2 from '../images/articles/2.png';
import Image3 from '../images/articles/3.png';
import Image4 from '../images/articles/4.png';
import Image5 from '../images/articles/5.png';
import Image6 from '../images/articles/6.png';
import Image7 from '../images/articles/7.png';
import Image8 from '../images/articles/8.png';
import Image9 from '../images/articles/9.png';


// Import icons
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';

import IncomeExpenseImageMain from "../images/spa-expense-income/main.png";
import FreelanceStudioImageMain from "../images/freelance-studio/main.png";
import HookahImageMain from "../images/hookah/main.png";
import ClubImageMain from "../images/club_4_horse/main.png";

export const articlesProjectData = {
    ProjectHeader: {
        title: 'Чай',
        publishDate: '17 Марта, 2024',
        tags: 'Angular',
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
        {
            id: 4,
            title: 'Картинка',
            img: Image4,
        },
        {
            id: 5,
            title: 'Картинка',
            img: Image5,
        },
        {
            id: 6,
            title: 'Картинка',
            img: Image6,
        },
        {
            id: 7,
            title: 'Картинка',
            img: Image7,
        },
        {
            id: 8,
            title: 'Картинка',
            img: Image8,
        },
        {
            id: 9,
            title: 'Картинка',
            img: Image9,
        },

    ],
    ProjectInfo: {
        ClientHeading: 'О проекте',
        CompanyInfo: [
            {
                id: 1,
                title: 'Ссылка на GIT',
                details: 'репозиторий',
                url: 'https://github.com/Melkii01/diploma',
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
                    'Angular'
                ],
            },
        ],
        ProjectDetailsHeading: 'Описание',
        ProjectDetails: [
            {
                id: 1,
                details: 'SPA приложение статей.'
            },
            {
                id: 2,
                details: 'На проекте особо сложных элементов нет, есть страница статей, а есть конкретной статьи. Но самое интересное, можно оставлять комментарии, давать им реакции, даже пожаловаться. Конечно же только зарегистрированным пользователям. '
            },
            {
                id: 3,
                details: 'Проект создан на основе Ангуляр 14.'
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
                title: 'Freelance Studio',
                img: FreelanceStudioImageMain,
                url: 'freelance-studio'
            },
            {
                id: 4,
                title: 'Доходы и расходы',
                img: IncomeExpenseImageMain,
                url: 'income-expense',
            },
        ],
    },
};

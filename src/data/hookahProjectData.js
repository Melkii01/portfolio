// Import images
import Image1 from '../images/hookah/1.png';
import Image2 from '../images/hookah/2.png';
// import Image3 from '../images/hookah/3.png';
import Image4 from '../images/hookah/4.png';
import Image5 from '../images/hookah/5.png';
import Image6 from '../images/hookah/6.png';
import Image7 from '../images/hookah/7.png';


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
import TeaImageMain from "../images/tea/main.png";
import ClubImageMain from "../images/club_4_horse/main.png";

export const hookahProjectData = {
	ProjectHeader: {
		title: 'Кальянная',
		publishDate: '12 Октября, 2023',
		tags: 'Landing',
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

	],
	ProjectInfo: {
		ClientHeading: 'О проекте',
		CompanyInfo: [
			{
				id: 1,
				title: 'Ссылка на GIT',
				details: 'репозиторий',
				url: 'https://github.com/Melkii01/hookah',
			},
			{
				id: 2,
				title: 'Ссылка на сайт',
				details: 'сайт',
				url: 'https://melkii01.github.io/hookah/',
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
				],
			},
		],
		ProjectDetailsHeading: 'Описание',
		ProjectDetails: [
			{
				id: 1,
				details: 'Лэндинг сайт для заказа стола в кальянной.'
			},
			{
				id: 2,
				details:'Очень красивый темный сайт с дымами и яркими красками.'
			},
			{
				id: 3,
				details:'Есть адаптив под мобильники.'
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
				id: 3,
				title: 'Чай',
				img: TeaImageMain,
				url: 'tea',
			},
			{
				id: 3,
				title: 'Freelance Studio',
				img: FreelanceStudioImageMain,
				url:'freelance-studio'
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

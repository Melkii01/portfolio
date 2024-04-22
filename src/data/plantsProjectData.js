// Import images
import Image1 from '../images/plants/1.png';
import Image2 from '../images/plants/2.png';
import Image3 from '../images/plants/3.png';
import Image4 from '../images/plants/4.png';
import Image5 from '../images/plants/5.png';
import Image6 from '../images/plants/6.png';
import Image7 from '../images/plants/7.png';
import Image8 from '../images/plants/8.png';
import Image9 from '../images/plants/9.png';
import Image10 from '../images/plants/10.png';
import Image11 from '../images/plants/11.png';
import Image12 from '../images/plants/12.png';


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
import HookahImageMain from "../images/hookah/main.png";

export const plantsProjectData = {
	ProjectHeader: {
		title: 'Растения',
		publishDate: '15 Апреля, 2024',
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
		{
			id: 10,
			title: 'Картинка',
			img: Image10,
		},
		{
			id: 11,
			title: 'Картинка',
			img: Image11,
		},
		{
			id: 12,
			title: 'Картинка',
			img: Image12,
		},
	],
	ProjectInfo: {
		ClientHeading: 'О проекте',
		CompanyInfo: [
			{
				id: 1,
				title: 'Ссылка на GIT',
				details: 'репозиторий',
				url: 'https://github.com/Melkii01/plants',
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
					'JS',
					'Angular',
					'Angular Material'
				],
			},
		],
		ProjectDetailsHeading: 'Описание',
		ProjectDetails: [
			{
				id: 1,
				details: 'Интернет магазин для заказа растений.'
			},
			{
				id: 2,
				details:'SPA приложение на основе Angular 14. С авторизацией и регистрацией, личным кабинетом с данными для заказа, с избранными товарами, и каталогом, в котором есть фильтр товаров.'
			},
			{
				id: 3,
				details:'Без адаптива.'
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

// Import images
import Image1 from '../images/macaroons/1.png';
import Image2 from '../images/macaroons/2.png';
import Image3 from '../images/macaroons/3.png';
import Image4 from '../images/macaroons/4.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

import IncomeExpenseImageMain from "../images/spa-expense-income/main.png";
import HookahImageMain from "../images/hookah/main.png";
import TeaImageMain from "../images/tea/main.png";
import ClubImageMain from "../images/club_4_horse/main.png";

export const macaroonsProjectData = {
	ProjectHeader: {
		title: 'Макаруны',
		publishDate: '12 Ноября, 2023',
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
			id: 3,
			title: 'Картинка',
			img: Image3,
		},
		{
			id: 4,
			title: 'Картинка',
			img: Image4,
		},
	],
	ProjectInfo: {
		ClientHeading: 'О проекте',
		CompanyInfo: [
			{
				id: 1,
				title: 'Ссылка на GIT',
				details: 'репозиторий',
				url: 'https://github.com/Melkii01/macaroons',
			},
			{
				id: 2,
				title: 'Ссылка на сайт',
				details: 'сайт',
				url: 'https://melkii01.github.io/macaroons/',
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
					'CSS'
				],
			},
		],
		ProjectDetailsHeading: 'Описание',
		ProjectDetails: [
			{
				id: 1,
				details: 'Лэндинг сайт для заказа макарун.'
			},
			{
				id: 2,
				details:'Простой одностраничный сайт без функционала'
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
				title: 'Кальянная',
				img: HookahImageMain,
				url: 'hookah',
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

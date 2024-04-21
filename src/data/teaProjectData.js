// Import images
import Image1 from '../images/tea/1.png';
import Image2 from '../images/tea/2.png';
// import Image3 from '../images/tea/3.png';
import Image4 from '../images/tea/4.png';


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

export const teaProjectData = {
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
				url: 'https://github.com/Melkii01/tea',
			},
			{
				id: 2,
				title: 'Ссылка на сайт',
				details: 'сайт',
				url: 'https://melkii01.github.io/tea/',
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
				details: 'SPA приложение для заказа чаев.'
			},
			{
				id: 2,
				details:'Детально простой сайт для заказа чая. Выбираем чай, нажимаем купить, и заполняем форму заказа.'
			},
			{
				id: 3,
				details:'Проект создан на основе Ангуляр 14 .'
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

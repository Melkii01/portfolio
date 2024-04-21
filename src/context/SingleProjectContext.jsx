import {useState, createContext} from 'react';
import {freelanceStudioProjectData as freelanceStudioDataJson} from '../data/freelanceStudioProjectData';
import {incomeExpenseProjectData as incomeExpenseProjectDataJson} from '../data/incomeExpenseProjectData';
import {teaProjectData as teaProjectDataJson} from '../data/teaProjectData';
import {hookahProjectData as hookahProjectDataJson} from '../data/hookahProjectData';
import {clubProjectData as clubProjectDataJson} from '../data/clubProjectData';
import {sushiProjectData as sushiProjectDataJson} from '../data/sushiProjectData';
import {cappadociaProjectData as cappadociaProjectDataJson} from '../data/cappadociaProjectData';
import {macaroonsProjectData as macaroonsProjectDataJson} from "../data/macaroonsStudioProjectData";
import {burgersProjectData as  burgersProjectDataJson} from "../data/burgersProjectData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({children}) => {
    const currenPath = window.location.pathname.split('/');
    const currentPathHref = currenPath[currenPath.length - 1];

    let json = null;

    if (currentPathHref === 'income-expense') {
        json = incomeExpenseProjectDataJson;
    } else if (currentPathHref === 'freelance-studio') {
        json = freelanceStudioDataJson;
    } else if (currentPathHref === 'tea') {
        json = teaProjectDataJson;
    } else if (currentPathHref === 'hookah') {
        json = hookahProjectDataJson;
    } else if (currentPathHref === 'club-4-horse') {
        json = clubProjectDataJson;
    } else if (currentPathHref === 'sushi') {
        json = sushiProjectDataJson;
    } else if (currentPathHref === 'cappadocia') {
        json = cappadociaProjectDataJson;
    } else if (currentPathHref === 'macaroons') {
        json = macaroonsProjectDataJson;
    }else if (currentPathHref === 'burgers') {
        json = burgersProjectDataJson;
    }

    const [singleProjectData, setSingleProjectData] = useState(
        json
    );

    return (
        <SingleProjectContext.Provider
            value={{singleProjectData, setSingleProjectData}}
        >
            {children}
        </SingleProjectContext.Provider>
    );
};

export default SingleProjectContext;
